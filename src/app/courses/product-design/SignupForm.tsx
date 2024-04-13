"use client";

import { useActionState } from "react";
import { createContact } from "@/app/actions/create-contact";

const initialState = { message: "", errors: {} as Record<string, string[]> };

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(
    createContact,
    initialState
  );

  return (
    <section className="rounded-2xl bg-amber-100 p-6 ring-1 ring-slate-200">
      <h2 className="text-2xl font-bold text-slate-900">
        Want to know if Product Design is right for you?
      </h2>
      <p className="mt-1 text-slate-600">Get a free 5-step short course</p>

      <form
        action={formAction}
        className="mt-5 grid gap-4 md:grid-cols-[1fr_1fr_auto]"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Your name"
            className="w-full rounded-xl text-main bg-white px-4 py-3 ring-1 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
            disabled={pending}
          />
          {state.errors?.name && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors.name.join(", ")}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="sr-only">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-xl bg-white px-4 py-3 ring-1 ring-slate-300 focus:outline-none text-main focus:ring-2 focus:ring-slate-900"
            disabled={pending}
          />
          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors.email.join(", ")}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          className="h-[52px] self-start rounded-full bg-slate-900 px-6 text-white disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send me lesson one"}
        </button>

        {/* Consent (full-width row) */}
        <div className="md:col-span-3 mt-1 flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-5 w-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
            disabled={pending}
          />
          <label htmlFor="consent" className="text-sm text-slate-700">
            I agree to receive educational emails and offers. I can unsubscribe
            anytime.
          </label>
        </div>
        {state.errors?.consent && (
          <p className="md:col-span-3 -mt-2 text-sm text-red-600">
            {state.errors.consent.join(", ")}
          </p>
        )}
      </form>

      {/* Message */}
      {state.message && (
        <p className="mt-3 text-sm text-slate-900" aria-live="polite">
          {state.message}
        </p>
      )}
    </section>
  );
}
