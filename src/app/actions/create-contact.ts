"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export type ContactState = {
  message: string;
  errors: Record<string, string[]>;
};

const schema = z.object({
  name: z.string().trim().optional(),
  email: z.string().trim().toLowerCase().email("Please enter a valid email"),
  consent: z.union([z.literal("on"), z.null()]).refine((v) => v === "on", {
    message: "Please accept the consent",
  }),
});

export async function createContact(
  prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // 1) Validate
  const parsed = schema.safeParse({
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    consent: formData.get("consent") ?? "",
  });

  if (!parsed.success) {
    return {
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email } = parsed.data;
  const now = new Date();

  // 2) Auth (optional link to User)
  const session = await auth().catch(() => null);
  const userId = session?.user?.id ?? null;

  // 3) Upsert by unique email
  await prisma.contact.upsert({
    where: { email },
    create: {
      name,
      email,
      consent: true,
      consentAt: now,
      userId,
    },
    update: {
      name,
      consent: true,
      consentAt: now,
      // Only set userId if it was empty (preserve existing link)
      ...(userId ? { userId } : {}),
    },
  });

  return {
    message: "All set! Check your inbox for lesson one. 🎉",
    errors: {},
  };
}
