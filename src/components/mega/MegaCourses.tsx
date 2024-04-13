"use client";

import Link from "next/link";

type Row = {
  label: string;
  href: string;
  tags?: Array<"AfA" | "new" | "Deutsch" | string>;
};

type Section = {
  heading: string;
  items: Row[];
};

export default function MegaCourses({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  // --- data ---
  const col1: Section = {
    heading: "Agentur für Arbeit programs",
    items: [
      {
        label: "Product Design",
        href: "/courses/product-design",
        tags: ["AfA", "new"],
      },
      { label: "UX Design", href: "/courses/ux-design", tags: ["AfA"] },
      { label: "UI Design", href: "/courses/ui-design", tags: ["AfA"] },
      {
        label: "Software Engineering",
        href: "/courses/software",
        tags: ["AfA"],
      },
      {
        label: "Data Analytics",
        href: "/courses/data-analytics",
        tags: ["AfA"],
      },
      {
        label: "Data Analytics with German",
        href: "/courses/data-analytics-de",
        tags: ["AfA"],
      },
      {
        label: "Digital Marketing",
        href: "/courses/digital-marketing",
        tags: ["AfA"],
      },
      {
        label: "Product Management",
        href: "/courses/product-mgmt",
        tags: ["AfA"],
      },
      {
        label: "Data Analytics (Deutsch)",
        href: "/courses/data-analytics-de-only",
        tags: ["AfA", "new"],
      },
      {
        label: "Digital Marketing (Deutsch)",
        href: "/courses/digital-marketing-de",
        tags: ["AfA", "new"],
      },
      {
        label: "Product Management (Deutsch)",
        href: "/courses/product-mgmt-de",
        tags: ["AfA", "new"],
      },
    ],
  };

  const col2: Section = {
    heading: "Programs to change your career",
    items: [
      {
        label: "Product Design",
        href: "/courses/product-design",
        tags: ["new"],
      },
      { label: "UX Design", href: "/courses/ux-design" },
      { label: "UI Design", href: "/courses/ui-design" },
      { label: "Software Engineering", href: "/courses/software" },
      { label: "Data Analytics", href: "/courses/data-analytics" },
      { label: "Digital Marketing", href: "/courses/digital-marketing" },
      { label: "Product Management", href: "/courses/product-management" },
    ],
  };

  const col3: Section = {
    heading: "Introductory courses",
    items: [
      { label: "Intro to UX Design", href: "/intro/ux" },
      { label: "Intro to UI Design", href: "/intro/ui" },
      { label: "Intro to Frontend Development", href: "/intro/frontend" },
      { label: "Intro to Data Analytics", href: "/intro/data" },
      { label: "Intro to Digital Marketing", href: "/intro/marketing" },
      { label: "Intro to Product Management", href: "/intro/product" },
    ],
  };

  const advanced: Section = {
    heading: "Advanced courses",
    items: [
      { label: "Voice User Interface Design", href: "/advanced/voice-ui" },
      { label: "UI for UX Designers", href: "/advanced/ui-for-ux" },
      { label: "Portfolio Course", href: "/advanced/portfolio" },
      { label: "Agile with Scrum", href: "/advanced/agile-scrum" },
      { label: "SQL for Data Analysts", href: "/advanced/sql" },
      { label: "Digital Analytics", href: "/advanced/digital-analytics" },
      { label: "Google Ads", href: "/advanced/google-ads" },
      { label: "Facebook Ads", href: "/advanced/facebook-ads" },
      { label: "SEO", href: "/advanced/seo" },
    ],
  };

  return (
    <div
      className={`absolute inset-x-0 top-full -mt-px  z-[60] ${
        open ? "block" : "hidden"
      }`}
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="  bg-white shadow-2xl ring-1 ring-black/5">
        <div className="px-6 py-10 max-h-[85vh] mx-auto max-w-7xl overflow-y-auto pr-2">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Courses
            </h2>
            {/* optional close button if you add click-to-close later */}
            <button
              className="hidden size-8 items-center justify-center rounded hover:bg-slate-100 md:inline-flex"
              aria-label="Close"
              type="button"
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

          {/* Columns */}
          <div className="grid gap-10 lg:grid-cols-3">
            <Column section={col1} withRightDivider />
            <Column section={col2} withRightDivider />
            <Column section={col3} />
          </div>

          {/* Advanced */}
          <div className="mt-10">
            <h3 className="mb-3 text-lg font-semibold text-slate-800">
              {advanced.heading}
            </h3>
            <ul className="space-y-1">
              {advanced.items.map((r) => (
                <li key={r.href}>
                  <RowLink row={r} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------- pieces -------- */

function Column({
  section,
  withRightDivider = false,
}: {
  section: Section;
  withRightDivider?: boolean;
}) {
  return (
    <div
      className={
        withRightDivider ? "lg:pr-10 lg:border-r lg:border-slate-200/70" : ""
      }
    >
      <h3 className="mb-3 text-lg font-semibold text-slate-800">
        {section.heading}
      </h3>
      <ul className="space-y-1">
        {section.items.map((r) => (
          <li key={r.href}>
            <RowLink row={r} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function RowLink({ row }: { row: Row }) {
  return (
    <Link
      href={row.href}
      className="group inline-flex items-center gap-2 rounded px-0.5 py-1.5 text-[15px] font-medium text-slate-800 hover:bg-slate-100"
    >
      <span className="underline-offset-2 group-hover:underline">
        {row.label}
      </span>
      {row.tags?.map((t, i) => (
        <Tag key={i} text={t} />
      ))}
    </Link>
  );
}

function Tag({ text }: { text: string }) {
  const isNew = text.toLowerCase() === "new";
  return (
    <span
      className={`rounded-sm px-1.5 py-0.5 text-[10px] font-semibold tracking-wide ${
        isNew ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700"
      }`}
    >
      {text}
    </span>
  );
}
