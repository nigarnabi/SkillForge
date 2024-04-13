import Image from "next/image";

// If you already have Stars/Star/Dot defined elsewhere, remove the versions below
export default function LearningCard() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-7">
        {/* CARD 1 — spans 2/7, calendar overlays text */}
        <article className="relative overflow-hidden rounded-[28px] bg-[#dfeefe] p-6 md:col-span-2 md:p-7">
          <h3 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-[32px]">
            100%{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
              online
            </span>{" "}
            learning
          </h3>

          <p className="mt-4 text-[17px] leading-7 text-slate-700">
            Work to your own timetable—not rigid class calendars. No need to
            quit your job or put life on hold, since you decide when and where
            you learn.
          </p>

          {/* calendar overlay (on top of text, bottom-right) */}
          <Image
            src="/calendar.png"
            alt="Weekly study calendar"
            width={1200}
            height={900}
            className="
              pointer-events-none
              absolute bottom-2 right-2
              w-[92%] md:w-[105%]
              max-w-[560px]
              rounded-[24px] shadow-lg
            "
            priority
          />
        </article>

        {/* CARD 2 — spans 5/7, gradient with stars */}
        <article className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-sky-300 to-violet-300 p-6 md:col-span-5 md:p-8">
          <h3 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-[32px]">
            Practical experience in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-700 bg-clip-text text-transparent">
              the tools of the future
            </span>
          </h3>

          <p className="mt-4 max-w-2xl text-[17px] leading-7 text-slate-900/80">
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

/* ===== Stars / Dots ===== */
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
