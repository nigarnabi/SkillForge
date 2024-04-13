"use client";

import Link from "next/link";

type Block = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export default function MegaGraduates({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const blocks: Block[] = [
    {
      title: "Graduate outcomes",
      body: "Our graduates come from all walks of life. Whether they’re starting from scratch or upskilling, they have one thing in common: They go on to forge careers they love.",
      href: "/graduates/outcomes",
      cta: "Meet our grads",
    },
    {
      title: "Looking for tech talent?",
      body: "If you want easy recruiting from a global pool of skilled candidates, we’re here to help. Our graduates are highly skilled, motivated, and prepared for impactful careers in tech.",
      href: "/graduates/hire",
      cta: "Hire our grads",
    },
  ];

  return (
    <div
      className={`absolute left-0 right-0 top-full -mt-px z-[60] ${
        open ? "block" : "hidden"
      }`}
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-2xl ring-1 ring-black/5">
        {/* full-bleed background; centered content */}
        <div className="w-full px-6  py-10">
          <div className="mx-auto max-w-7xl max-h-[70vh] overflow-y-auto pr-2">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Our graduates
              </h2>
              <button
                type="button"
                aria-label="Close"
                className="hidden size-8 items-center justify-center rounded hover:bg-slate-100 md:inline-flex"
              >
                <svg viewBox="0 0 24 24" className="size-5 text-slate-600">
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Two columns with a vertical divider */}
            <div className="grid gap-10  mt-24 lg:grid-cols-2">
              <GradBlock {...blocks[0]} />
              <GradBlock {...blocks[1]} divider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- pieces ---------- */

function GradBlock({
  title,
  body,
  href,
  cta,
  divider = false,
}: Block & { divider?: boolean }) {
  return (
    <article
      className={divider ? "lg:border-l lg:border-slate-200/70 lg:pl-10" : ""}
    >
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-500">{body}</p>
      <Link
        href={href}
        className="mt-3 inline-block text-[15px] font-medium text-teal-700 underline underline-offset-2 hover:text-teal-800"
      >
        {cta}
      </Link>
    </article>
  );
}
