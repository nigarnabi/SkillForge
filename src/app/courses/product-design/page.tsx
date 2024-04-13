import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";
import Sidebar from "./Sidebar";
import Overview from "./sections/Overview";
import JobGuarantee from "./sections/JobGuarantee";
import Curriculum from "./sections/Curriculum";
import HowItWorks from "./sections/HowItWorks";
import Who from "./sections/Who";
import Tuition from "./sections/Tuition";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "job-guarantee", label: "Job Guarantee" },
  { id: "curriculum", label: "Curriculum" },
  { id: "how-it-works", label: "How it works" },
  { id: "who", label: "Who it is for" },
  { id: "tuition", label: "Tuition Fee" },
];
export default function ProductDesignPage() {
  return (
    <section className="bg-amber-50 py-16">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:grid-cols-12">
        {/* LEFT: all copy + CTAs in ONE column */}
        <div className="md:col-span-7">
          {/* top badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              <ShieldCheck size={18} />
              Fully online
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              <Sparkles size={18} />
              Dual Mentorship
            </span>
          </div>

          {/* heading + subheading */}
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
            Product Design
            <br />
            Program
          </h1>

          <p className="mt-4 text-3xl font-bold text-slate-800">
            <span className=" bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
              Fully funded
            </span>{" "}
            by the German government
          </p>

          <p className="mt-4 max-w-xl text-lg leading-8 tracking-wide text-slate-600">
            Develop the skills of a Product designer, learn how to leverage AI,
            and work with expert mentors to prepare for a lasting career in
            tech. All in an online setup, with career coaching to help you land
            your new job, and 100% of the cost covered by the Agentur für
            Arbeit.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-main px-6 py-3 text-lg font-semibold text-white transition hover:bg-main/90">
              Apply now
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-lg font-semibold text-slate-900 transition hover:bg-slate-50">
              Check your eligibility
            </button>
          </div>

          {/* avatars + stat */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-1">
              <Image
                src="/student1.jpg"
                alt="Student 1"
                width={24}
                height={24}
                className="h-6 w-6 rounded-full border-2 border-white object-cover object-top"
              />
              <Image
                src="/student3.jpg"
                alt="Student 2"
                width={24}
                height={24}
                className="h-6 w-6 rounded-full border-2 border-white object-cover object-top"
              />
              <Image
                src="/student5.jpg"
                alt="Student 3"
                width={24}
                height={24}
                className="h-6 w-6 rounded-full border-2 border-white object-cover object-top"
              />
            </div>
            <p className="text-sm text-slate-600">
              +14,000 CareerFoundry students enrolled
            </p>
          </div>
        </div>

        {/* RIGHT: image */}
        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/product-design.png"
              alt="Product Design"
              width={900}
              height={1100}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* 2-column layout below */}
      <div className="mx-auto mt-44 grid max-w-7xl gap-12 px-6 md:grid-cols-12 items-start">
        {/* LEFT: sidebar */}
        <aside
          className="
      md:col-span-3
      md:sticky md:top-20 md:self-start
      md:max-h-[calc(100vh-5rem)] md:overflow-y-auto
    "
        >
          <Sidebar sections={SECTIONS} />
        </aside>
        {/* RIGHT: all sections */}
        <section className="md:col-span-9 space-y-24 ">
          <div id="overview" className="scroll-mt-32 ">
            <Overview />
          </div>
          <div id="job-guarantee" className="scroll-mt-32">
            <JobGuarantee />
          </div>
          <div id="curriculum" className="scroll-mt-32">
            <Curriculum />
          </div>
          <div id="how-it-works" className="scroll-mt-1 !mt-1">
            <HowItWorks />
          </div>
          <div id="who" className="scroll-mt-32">
            <Who />
          </div>
          <div id="tuition" className="scroll-mt-32">
            <Tuition />
          </div>
        </section>
      </div>
    </section>
  );
}
