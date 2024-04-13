export default function SparklesCard() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-[28px] bg-violet-100 p-6 md:p-10">
        {/* layout */}
        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* LEFT: text */}
          <div className="max-w-xl pb-10 md:pb-16">
            <h3 className="text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">
              Will the Product Design Program teach me how to use{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                AI tools and techniques?
              </span>
            </h3>
            <p className="mt-4 text-slate-700">
              Yes! You will learn to use AI in a way that is reflective of how
              real-world tasks are approached in the industry, while still
              building the core skills of your new profession. In doing so, you
              will learn to use AI to aid your learning, rather than bypass the
              learning process, and to support you professionally—rather than
              replace you.
            </p>
          </div>

          {/* RIGHT: sparkles field */}
          <div className="relative h-[340px] md:h-[420px] pointer-events-none">
            <Stars />
          </div>
        </div>

        {/* subtle card outline */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="absolute inset-0">
      {/* big stars */}
      <Star className="text-violet-900/90 left-[60%] top-[12%] h-10 w-10" />
      <Star className="text-violet-900/90 right-[82%] top-[18%] h-12 w-12" />
      <Star className="text-violet-900/90 left-[68%] bottom-[10%] h-10 w-10" />
      <Star className="text-violet-900/90 left-[68%] bottom-[10%] h-10 w-10" />

      {/* medium stars */}
      <Star className="text-violet-900/90 right-[52%] top-[36%] h-5 w-5" />
      <Star className="text-violet-900/90 left-[78%] top-[32%] h-6 w-6" />

      {/* small stars */}
      <Star className="text-violet-900/90 left-[58%] bottom-[20%] h-3 w-3" />
      <Star className="text-violet-900/90 right-[86%] top-[26%] h-4 w-4" />

      {/* dots */}
      <Dot className="left-[90%] top-[12%]" />
      <Dot className="right-[74%] top-[52%]" />
      <Dot className="left-[60%] bottom-[25%]" />
      <Dot className="right-[74%] top-[52%]" />
      <Dot className="left-[88%] bottom-[18%]" />
    </div>
  );
}

/** 4-point sparkle */
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

/** simple dot */
function Dot({ className = "" }) {
  return (
    <span
      className={`absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-900/90 ${className}`}
    />
  );
}
