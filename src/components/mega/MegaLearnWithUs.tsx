"use client";

import Link from "next/link";

type Card = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export default function MegaLearnWithUs({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const cards: Card[] = [
    {
      title: "Learn online, not alone",
      body: "Our career-change programs are designed to take you from beginner to pro in your tech career—with personalized support every step of the way.",
      href: "/learn/how-it-works",
      cta: "How it works",
    },
    {
      title: "Individualized mentorship",
      body: "Nurture your inner tech pro with personalized guidance from not one, but two industry experts. They’ll provide feedback, support, and advice as you build your new career.",
      href: "/learn/mentorship",
      cta: "Meet our mentors",
    },
    {
      title: "Job Guarantee",
      body: "We back our programs with a job guarantee: follow our career advice, and you’ll land a job within 6 months of graduation—or you’ll get your money back.",
      href: "/learn/job-guarantee",
      cta: "Get the details",
    },
    {
      title: "Personal career coaching",
      body: "Build a career you love with 1:1 help from a career specialist who knows the job market in your area. Refine your portfolio and attract the right employers.",
      href: "/learn/career-services",
      cta: "Explore our career services",
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
        {/* background is full-bleed; content centered */}
        <div className="w-full px-6 py-10">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Learn with CareerFoundry
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

            {/* Four columns with vertical dividers */}
            <div className="grid gap-10 lg:grid-cols-4">
              {cards.map((card, i) => (
                <article
                  key={card.title}
                  className={`pt-2 ${
                    i > 0 ? "lg:border-l lg:border-slate-200/70 lg:pl-10" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                    {card.body}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-3 inline-block text-[15px] font-medium text-teal-700 underline underline-offset-2 hover:text-teal-800"
                  >
                    {card.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
