import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

type CarouselCardProps = {
  imgSrc: string;
  href: string;
  alt: string;
  title: string;
  description: string;
};
export default function CarouselCard({
  imgSrc,
  href,
  alt,
  title,
  description,
}: CarouselCardProps) {
  return (
    <article
      className="flex flex-col bg-white border border-gray-200 rounded-3xl shadow-md 
                 hover:shadow-lg transition-all duration-300
                 shrink-0 w-[300px] sm:w-[400px] md:w-[550px] snap-start "
    >
      <div className="overflow-hidden rounded-t-3xl">
        <Link href={href}>
          <Image
            src={imgSrc}
            alt={alt}
            width={1000}
            height={562}
            className="w-full h-[260px] sm:h-[300px] object-cover"
          />
        </Link>
      </div>

      <div className="flex flex-col p-6 sm:p-8 gap-6 flex-1">
        <h3
          className="text-[20px] sm:text-[24px] font-extrabold
                     leading-snug text-main"
        >
          “{title}”
        </h3>

        <div className="flex-1" />

        <p className="text-sm sm:text-base text-slate-500">{description}</p>
      </div>
    </article>
  );
}
