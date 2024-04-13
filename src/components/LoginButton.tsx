"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { LogOut } from "lucide-react";

export function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button disabled className="rounded bg-gray-300 px-4 py-2">
        Loading…
      </button>
    );
  }

  if (session) {
    const firstName = session.user?.name?.split(" ")[0] ?? "User";
    return (
      <div className="flex items-center gap-3">
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt={session.user.name ?? "User"}
            width={32}
            height={32}
            className="rounded-full"
          />
        )}
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {firstName}
        </span>
        <button
          onClick={() => signOut()}
          className="text-gray-500 hover:text-gray-700"
        >
          <LogOut size={20} />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")} // explicitly use Google
      className="rounded bg-main px-4 py-2 font-bold text-white hover:bg-main-600"
    >
      Sign in
    </button>
  );
}
