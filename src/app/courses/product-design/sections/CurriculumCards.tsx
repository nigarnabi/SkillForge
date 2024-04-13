import { Plus, Layout, Grid2X2, Scan, Shield, Sparkle } from "lucide-react";

type Card = {
  title: string;
  desc: string;
  badge?: string;
  Icon: React.ComponentType<any>;
};

const CARDS: Card[] = [
  {
    title: "Intro to Product Design",
    desc: "This one-month course, made up of eight lessons, will introduce key components of the design thinking process and business skills required in the product design field.",
    badge: "Learn to apply AI",
    Icon: Layout,
  },
  {
    title: "Product Design Immersion",
    desc: "This course provides a deeper dive into the daily practice and mindset of a professional product designer. You'll complete a total of six achievements, which will build off of each other to create a final product at the end of the course.",
    badge: "Learn to apply AI",
    Icon: Grid2X2,
  },
  {
    title: "Design Specialization",
    desc: "To further develop your expertise, you’ll choose one of three specialization course options.",
    badge: "Learn to apply AI",
    Icon: Scan,
  },
  {
    title: "Job Preparation Course",
    desc: "Create a career plan with your personal career specialist. From CV creation through to job preparation, you will learn the skills to launch a career that lasts.",
    badge: "Optional",
    Icon: Shield,
  },
];

export default function CurriculumCards() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="space-y-6">
        {CARDS.map(({ title, desc, badge, Icon }) => (
          <article
            key={title}
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm ring-1 ring-black/[0.02] md:p-8"
          >
            <div className="flex items-start gap-4">
              {/* Left icon */}
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 text-slate-700">
                <Icon size={22} aria-hidden />
              </div>

              {/* Title + description */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center text-slate-900 gap-3">
                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                    {title}
                  </h3>
                  {badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 px-3 py-1 text-xs font-semibold text-main">
                      <Sparkle size={12} className="shrink-0" />
                      {badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 max-w-3xl text-slate-600">{desc}</p>
              </div>

              {/* Plus button (decorative / hook for expand) */}
              <button
                type="button"
                className="ml-2 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl  text-slate-800"
                aria-label={`More about ${title}`}
              >
                <Plus size={24} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
