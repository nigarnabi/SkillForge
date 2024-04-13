"use client";

import Link from "next/link";
import { useState } from "react";
import { LoginButton } from "@/components/LoginButton";
import MegaCourses from "./mega/MegaCourses";
import MegaLearnWithUs from "./mega/MegaLearnWithUs";
import MegaGraduates from "./mega/MegaGraduates";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<
    "courses" | "learn" | "graduates" | null
  >(null);

  return (
    // header is relative so panels can absolutely-position to it (full width)
    <header className="relative sticky top-0 z-50 w-full border-b border-white/10 bg-main text-white">
      {/* ROW: width-constrained */}
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="font-light tracking-wide">
          SKILL<span className="italic font-extrabold">FORGE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="ml-6 hidden flex-1 items-stretch md:flex">
          <ul className="flex items-stretch gap-6">
            {/* Courses trigger */}
            <li
              onMouseEnter={() => setOpenMenu("courses")}
              onMouseLeave={() =>
                setOpenMenu((m) => (m === "courses" ? null : m))
              }
            >
              <button
                className={`flex h-full items-center gap-1 px-3 text-[15px] font-medium ${
                  openMenu === "courses"
                    ? "bg-white text-slate-900 rounded-t-md"
                    : "text-white/90 hover:text-white"
                }`}
                aria-haspopup="true"
                aria-expanded={openMenu === "courses"}
              >
                Courses <Chevron open={openMenu === "courses"} />
              </button>
            </li>

            {/* Learn with us trigger */}
            <li
              onMouseEnter={() => setOpenMenu("learn")}
              onMouseLeave={() =>
                setOpenMenu((m) => (m === "learn" ? null : m))
              }
            >
              <button
                className={`flex h-full items-center gap-1 px-2 text-[15px] font-medium ${
                  openMenu === "learn"
                    ? "bg-white text-slate-900 rounded-t-md"
                    : "text-white/90 hover:text-white"
                }`}
                aria-haspopup="true"
                aria-expanded={openMenu === "learn"}
              >
                Learn with us <Chevron open={openMenu === "learn"} />
              </button>
            </li>

            {/* Our graduates trigger */}
            <li
              onMouseEnter={() => setOpenMenu("graduates")}
              onMouseLeave={() =>
                setOpenMenu((m) => (m === "graduates" ? null : m))
              }
            >
              <button
                className={`flex h-full items-center gap-1 px-2 text-[15px] font-medium ${
                  openMenu === "graduates"
                    ? "bg-white text-slate-900 rounded-t-md"
                    : "text-white/90 hover:text-white"
                }`}
                aria-haspopup="true"
                aria-expanded={openMenu === "graduates"}
              >
                Our graduates <Chevron open={openMenu === "graduates"} />
              </button>
            </li>

            {/* Direct Links */}
            <li>
              <Link
                href="/events"
                className="flex h-full items-center px-2 text-[15px] font-medium text-white/90 hover:text-white"
              >
                Online Events
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex h-full items-center px-2 text-[15px] font-medium text-white/90 hover:text-white"
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Right actions */}
          <div className="ml-auto flex items-center">
            <LoginButton />
          </div>
        </nav>
      </div>

      {/* ⬇️ MOVE PANELS HERE — direct children of <header> (full width) */}
      <MegaCourses
        open={openMenu === "courses"}
        onMouseEnter={() => setOpenMenu("courses")}
        onMouseLeave={() => setOpenMenu(null)}
      />
      <MegaLearnWithUs
        open={openMenu === "learn"}
        onMouseEnter={() => setOpenMenu("learn")}
        onMouseLeave={() => setOpenMenu(null)}
      />
      <MegaGraduates
        open={openMenu === "graduates"}
        onMouseEnter={() => setOpenMenu("graduates")}
        onMouseLeave={() => setOpenMenu(null)}
      />
    </header>
  );
}

/* ---------- Icons ---------- */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`size-4 transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
    >
      <path d="M5 7l5 5 5-5" fill="currentColor" />
    </svg>
  );
}
