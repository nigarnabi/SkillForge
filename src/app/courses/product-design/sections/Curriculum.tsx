"use client";
import { useState } from "react";
import { Layout, Grid2X2, Info, Scan, Sparkles } from "lucide-react";
import CurriculumCards from "./CurriculumCards";
import SparklesCard from "./SparklesCard";

type TrackKey = "flexible" | "fulltime";

const TRACKS: Record<
  TrackKey,
  Array<{ title: string; subtitle: string; time: string; Icon: any }>
> = {
  flexible: [
    {
      title: "Intro to Product",
      subtitle: "Design",
      time: "Approx. 0.5 – 1 months",
      Icon: Layout,
    },
    {
      title: "Product Design",
      subtitle: "Immersion",
      time: "3.5 – 5.5 months",
      Icon: Grid2X2,
    },
    {
      title: "Design",
      subtitle: "Specialization",
      time: "Approx. 1 – 2 months",
      Icon: Scan,
    },
  ],
  fulltime: [
    {
      title: "Intro to Product",
      subtitle: "Design",
      time: "Approx. 0.5 months",
      Icon: Layout,
    },
    {
      title: "Product Design",
      subtitle: "Immersion",
      time: "Approx. 3.5 months",
      Icon: Grid2X2,
    },
    {
      title: "Design",
      subtitle: "Specialization",
      time: "Approx. 1 month",
      Icon: Scan,
    },
  ],
};

export default function Curriculum() {
  const [mode, setMode] = useState<TrackKey>("flexible");
  const items = TRACKS[mode];

  return (
    <section className=" pt-16 pb-1">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
          Hands-on education in the
          <br />
          skills of{" "}
          <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
            the future
          </span>
        </h2>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
          We work together with skilled industry experts to create learning
          materials to get you job-ready. Manage your schedule however you like
          and dedicate anywhere from 15 to 40 hours per week to your studies.
        </p>

        {/* Segmented control */}
        <div className="mx-auto mt-8 w-[320px] rounded-full bg-slate-200/50 p-1">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setMode("flexible")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition
                ${
                  mode === "flexible"
                    ? "bg-white shadow text-slate-900"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              aria-pressed={mode === "flexible"}
            >
              Flexible
            </button>
            <button
              type="button"
              onClick={() => setMode("fulltime")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition
                ${
                  mode === "fulltime"
                    ? "bg-white shadow text-slate-900"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              aria-pressed={mode === "fulltime"}
            >
              Full-time
            </button>
          </div>
        </div>

        {/* Milestones */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {items.map(({ title, subtitle, time, Icon }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-600">
                <Icon size={18} aria-hidden />
              </div>
              <div className="mt-3 text-slate-800">
                <div className="text-[17px] font-semibold leading-snug">
                  {title}
                  <br />
                  {subtitle}
                </div>
                <div
                  className="mt-2 text-sm text-slate-500 transition-opacity"
                  key={time} // forces text fade on switch
                >
                  {time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Black line */}
          <div className="h-[3px] w-full bg-slate-800" />

          {/* Ticks */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <div className="flex justify-between">
              <span className="block h-6 w-[3px] bg-slate-800" />
              <span className="block h-6 w-[3px] bg-slate-800" />
              <span className="block h-6 w-[3px] bg-slate-800" />
              <span className="block h-6 w-[3px] bg-slate-800" />
            </div>
          </div>
        </div>
        {/* Labels */}
        <div className="mt-4 flex justify-between text-sm text-slate-600">
          <span className="pt-2">Start</span>
          <span className="pt-2">Deadline</span>
        </div>

        {/* Footnote */}
        <div className="mt-6 flex items-start gap-2 text-xs text-slate-500">
          <Info size={16} className="text-slate-400" />
          <p>
            Completion times are approximations based on the progress of our
            current students and graduates.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <CurriculumCards />
      </div>
      <div className="mt-20">
        <SparklesCard />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-8 text-slate-900">
          Human-centric learning in a
          <br />
          <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
            remote setup
          </span>
        </h2>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
          Practical, innovative, and human-centric learning in a fully remote
          setup.
        </p>
      </div>
    </section>
  );
}
