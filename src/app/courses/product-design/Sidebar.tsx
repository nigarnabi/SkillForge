"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
type Section = { id: string; label: string };
export default function Sidebar({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1
          )[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);
  return (
    <nav className="scroll-smooth">
      <ul className="space-y-6">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={clsx(
                "block rounded-md px-3 py-2 text-lg font-semibold transition",
                active === s.id
                  ? "" // gradient goes on the span, not here
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
              )}
            >
              <span
                className={clsx(
                  "inline-block", // shrink to text width
                  active === s.id &&
                    "bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent"
                )}
              >
                {s.label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/*button*/}
      <div className="mt-6 space-y-3">
        <button className="w-full rounded-full bg-main px-4 py-2 font-semibold text-white hover:bg-main/90">
          Apply now
        </button>
        <button className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-50">
          Get program guide
        </button>
      </div>
    </nav>
  );
}
