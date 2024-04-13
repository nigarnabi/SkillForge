"use client";
import { CalendarDays, CircleStar, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Fee from "@/assets/fee.svg";
import SignupForm from "../SignupForm";
const UPCOMING = [
  "Monday, September 15th, 2025",
  "Monday, September 22nd, 2025",
  "Monday, September 29th, 2025",
  "Monday, October 6th, 2025",
  "Monday, October 13th, 2025",
  "Monday, October 20th, 2025",
];

export default function TuitionFee() {
  return (
    <section className="py-16">
      <div className="flex flex-col gap-7">
        <h2 className="text-7xl font-extrabold text-main leading-tight">
          Tuition{" "}
          <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
            Fee
          </span>
        </h2>
        <p className="text-lg text-main">
          Flexible payment options for students from all backgrounds.
        </p>
      </div>
      {/*Tuition fee Cards*/}
      <div className=" mt-8 max-w-7xl ">
        {/* Top: two pricing cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            {/* badges */}
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-slate-700">
                12 month plan
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                <Star className="h-4 w-4 fill-slate-700 text-slate-700" />
                Popular
              </span>
            </div>

            <div className="text-[44px] font-extrabold tracking-tight text-slate-900">
              €6900
            </div>

            <dl className="mt-4 space-y-3 text-[15px] text-slate-700">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <dt>One time payment</dt>
                <dd className="font-medium text-slate-900">€492</dd>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <dt>Monthly for 12 months</dt>
                <dd className="font-medium text-slate-900">€534</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Total</dt>
                <dd className="font-semibold text-slate-900">€6900</dd>
              </div>
            </dl>

            <Link
              href="#enroll"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0f1631] px-5 py-3 text-[15px] font-semibold text-white hover:opacity-95"
            >
              Enroll now
            </Link>
          </article>

          {/* Educational voucher */}
          <article className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <div className="mb-5">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                Educational voucher
              </span>
            </div>

            <div className="text-[44px] font-extrabold tracking-tight text-slate-900">
              €0
            </div>

            <p className="mt-4 text-[15px] leading-7 text-slate-700">
              For residents in Germany. Talk to the local jobcenter to find out
              if you&apos;re eligible for a Bildungsgutschein.
            </p>

            <Link
              href="#voucher"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f1631] px-5 py-3 text-[15px] font-semibold text-white hover:opacity-95"
            >
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>

        {/* Bottom: cohorts + what you’ll get */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 items-start">
          {/* Upcoming cohorts */}
          <article className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h3 className="text-[22px] font-extrabold leading-tight text-slate-900">
              Our product design cohort start every second week on Mondays.
            </h3>

            <div className="mt-5 flex items-center gap-2 text-slate-700">
              <CalendarDays className="h-5 w-5" />
              <span className="text-[15px]">Upcoming cohorts:</span>
            </div>

            <ul className="mt-4 flex flex-col gap-3 items-start ">
              {UPCOMING.map((d) => (
                <li
                  key={d}
                  className="inline-flex rounded-full bg-red-100 px-4 py-2 text-[14px] font-medium text-slate-800"
                >
                  {d}
                </li>
              ))}
            </ul>
          </article>

          {/* What you'll get  */}
          <article className=" relative rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <h3 className="text-[22px] font-extrabold leading-tight text-slate-900">
              What you’ll get
            </h3>

            <ul className="mt-5 space-y-4 text-[15px] text-slate-800">
              {[
                "A project-based curriculum",
                "Dedicated mentor & tutor",
                "Product design, UX design, & AI skills",
                "Professional portfolio",
                "Job Guarantee",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CircleStar className="mt-0.5 h-5 w-5 text-slate-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="absolute right-[30px] bottom-[20px]  ">
              <Fee className="h-52 w-28 text-slate-300" />
            </div>
          </article>
        </div>
      </div>
      {/*Signup Form*/}
      <main className="mt-8">
        <SignupForm />
      </main>
    </section>
  );
}
