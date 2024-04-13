import { Gift } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type IntroCourseCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};
export default function IntroCourseCard({
  icon: Icon,
  title,
  description,
  href,
}: IntroCourseCardProps) {
  return (
    <article className="bg-white rounded-3xl shadow-md border border-gray-200  p-4 sm:p-6 hover:shadow-lg transition-all duration-300 shrink-0 snap-start w-[300px] sm:w-[320px] md:w-[390px]  min-h-[320px] ">
      <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-sm font-medium">
        <span>
          {" "}
          <Gift className="w-6 h-6 text-blue-500" />
        </span>
        <span>Free short course</span>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <span className=" text-main">
          <Icon className="size-5 sm:size-6" />
        </span>

        <h3 className="text-2xl font-bold text-main mb-2">{title}</h3>
      </div>
      <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
        {description}
      </p>
      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center justify-center text-lg rounded-full bg-white border border-main px-6 py-3 tracking-wide text-main   font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 hover:bg-blue-500 transition"
        >
          Get Started Today
        </Link>
      </div>
    </article>
  );
}
