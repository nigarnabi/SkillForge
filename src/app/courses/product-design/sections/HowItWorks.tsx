import Image from "next/image";
import Fastrol from "@/assets/fastrol.svg";
import Googleai from "@/assets/googleai.svg";
import Figma from "@/assets/figma.svg";
import Notion from "@/assets/notion.svg";
import Sketch from "@/assets/sketch.svg";
import Chatgpt from "@/assets/chatgpt.svg";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-7">
        {/* LEFT CARD */}
        <article className="md:col-span-2 overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-black/5">
          {/* top image */}
          <Image
            src="/howitworks.png"
            alt="How it works"
            width={800}
            height={600}
            className="h-52 w-full object-cover md:h-56"
            priority
          />
          {/* dark copy block */}
          <div className="rounded-t-none rounded-b-[28px] bg-[#0c1a2a] px-5 pb-6 pt-5 text-white">
            <h3 className="text-2xl font-extrabold leading-tight md:text-[28px]">
              1:1{" "}
              <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
                support
              </span>{" "}
              from your expert mentor
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-200">
              Your mentor, a senior in the field, guides your career; while your
              tutor offers assignment feedback within 24 hours.
            </p>
          </div>
        </article>

        {/* RIGHT CARD */}
        <article className="md:col-span-5 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-10">
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
            <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
              Break into tech
            </span>{" "}
            with the skills of in-demand professions
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
            Learn the essential skills of product design in our innovative
            project-based curriculum, that takes you through theory and into
            immersive tasks. Put everything you learn to immediate practical use
            through hands-on projects you’ll build your extensive portfolio
            around.
          </p>

          {/* tools row */}
          <div className="mt-28 flex flex-wrap items-center justify-between gap-4">
            <Tool
              icon={<Chatgpt className="h-7 w-7 bg-black" />}
              bg="bg-slate-100"
            />
            <Tool icon={<Fastrol className="h-7 w-7" />} bg="bg-amber-300" />
            <Tool icon={<Googleai className="h-7 w-7" />} bg="bg-indigo-50" />
            <Tool icon={<Figma className="h-7 w-7" />} bg="bg-slate-100" />
            <Tool icon={<Notion className="h-7 w-7" />} bg="bg-slate-100" />
            <Tool icon={<Sketch className="h-7 w-7" />} bg="bg-amber-200" />
          </div>
        </article>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-7 mt-8">
        <article className="relative overflow-hidden rounded-[28px] bg-[#dfeefe] p-6 md:col-span-5 md:p-7 flex flex-col">
          <h3 className="text-2xl font-extrabold  text-slate-900">
            <span className="bg-gradient-to-r font-extrabold from-hero-blue to-hero-purple bg-clip-text text-transparent">
              100% online
            </span>{" "}
            learning
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            Work to your own timetable—not rigid class calendars. No need to
            quit your job or put life on hold, since you decide when and where
            you learn.
          </p>

          {/* push the image to the bottom-right */}
          <div className="mt-6 -mb-6 -mr-6 self-end">
            <Image
              src="/calendar.png"
              alt="Weekly study calendar"
              width={450}
              height={250}
              className="block"
            />
          </div>
        </article>
        {/* CARD 2 — spans 5/7, gradient with stars */}
        <article className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-sky-300 to-violet-300 p-6 md:col-span-2 md:p-8">
          <h3 className="text-lg font-bold leading-tight text-slate-900 md:text-xl">
            Practical experience in{" "}
            <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
              the tools of the future
            </span>
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-900/80">
            Your mentor and tutor will teach you to use generative AI to become
            more effective in your work, so you can launch a career that lasts.
          </p>

          {/* decorative stars */}
          <div className="pointer-events-none absolute inset-0">
            <Stars />
          </div>
        </article>
      </div>
    </section>
  );
}

/** Rounded square “pill” for each tool icon */
function Tool({
  icon,
  bg = "bg-slate-100",
}: {
  icon: React.ReactNode;
  bg?: string;
}) {
  return (
    <div
      className={[
        "flex h-16 w-16 items-center justify-center rounded-2xl",
        "shadow-sm ring-1 ring-black/5",
        bg,
      ].join(" ")}
    >
      {icon}
    </div>
  );
}

function Stars() {
  return (
    <div className="absolute inset-0">
      {/* big stars */}
      <Star className="text-violet-900/90 left-[78%] top-[16%] h-10 w-10" />
      <Star className="text-violet-900/90 left-[86%] bottom-[12%] h-11 w-11" />

      {/* medium */}
      <Star className="text-violet-900/90 left-[64%] top-[34%] h-6 w-6" />
      <Star className="text-violet-900/90 left-[72%] bottom-[30%] h-6 w-6" />

      {/* small */}
      <Star className="text-violet-900/90 left-[66%] bottom-[18%] h-4 w-4" />
      <Star className="text-violet-900/90 left-[84%] top-[26%] h-4 w-4" />

      {/* dots */}
      <Dot className="left-[90%] top-[14%]" />
      <Dot className="left-[74%] top-[52%]" />
      <Dot className="left-[62%] bottom-[26%]" />
      <Dot className="left-[88%] bottom-[20%]" />
    </div>
  );
}

function Star({ className = "" }) {
  return (
    <svg
      className={`absolute ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2c-.5 2.7-2.8 5-5.5 5.5C9.2 8 11.5 10.3 12 13c.5-2.7 2.8-5 5.5-5.5C14.8 7 12.5 4.7 12 2z" />
      <path d="M12 11c-.4 2.1-2 3.7-4.1 4.1 2.1.4 3.7 2 4.1 4.1.4-2.1 2-3.7 4.1-4.1-2.1-.4-3.7-2-4.1-4.1z" />
    </svg>
  );
}

function Dot({ className = "" }) {
  return (
    <span
      className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-900/90 ${className}`}
    />
  );
}
