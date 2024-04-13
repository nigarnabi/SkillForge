import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";
import Link from "next/link";

type CardProps = {
  heading1: string;
  heading2: string;
  title: string;
  funding: string;
  description: string;
  href?: string;
  buttonText: string;
  avatarSrc: string[];
};

export default function ProgramCard({
  heading1,
  heading2,
  title,
  funding,
  description,
  href,
  buttonText,
  avatarSrc,
}: CardProps) {
  return (
    <article className="bg-white p-8 ring-1 ring-black/5 rounded-2xl shadow-md max-w-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {/* Badge 1 */}
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-main">
          <BadgeCheck className="h-4 w-4" />
          {heading1}
        </span>

        {/* Badge 2 */}
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-main">
          <Star className="h-4 w-4" />
          {heading2}
        </span>
      </div>

      <h3 className="text-3xl font-extrabold leading-tight text-main ">
        {title}
      </h3>
      <p className="mt-4 text-lg text-gray-700 font-bold">{funding}</p>
      <p className="mt-6 text-gray-600">{description}</p>
      <div className="mt-20">
        <Link
          href={href || "#"}
          className=" inline-flex items-center justify-center rounded-full bg-main text-white py-3 px-6 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2 hover:bg-main/20"
        >
          {buttonText}
        </Link>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <div className=" flex -space-x-0.5">
          <Image
            src={avatarSrc[0]}
            alt="Avatar 1"
            width={20}
            height={20}
            className="h-5 w-5 rounded-full border-2 border-white object-cover object-top"
          />
          <Image
            src={avatarSrc[1]}
            alt="Avatar 2"
            width={20}
            height={20}
            className="h-5 w-5 rounded-full border-2 border-white object-cover object-top "
          />
          <Image
            src={avatarSrc[2]}
            alt="Avatar 3"
            width={20}
            height={20}
            className="h-5 w-5 rounded-full border-2 border-white object-cover object-top"
          />
        </div>
        <p className="text-sm text-gray-600 ">
          14,000+ students enrolled in our programs
        </p>
      </div>
    </article>
  );
}
