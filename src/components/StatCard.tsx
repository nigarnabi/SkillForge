import Image from "next/image";

type StatCardProps = {
  number: string;
  description: string;
  iconSrc: string;
  className?: string;
};

export default function StatCard({
  number,
  description,
  iconSrc,
  className = "",
}: StatCardProps) {
  return (
    <article
      className={[
        "rounded-3xl bg-[#EAF4FF] p-6 sm:p-8 ring-1 ring-black/5 shadow-sm",
        "min-h-[380px] sm:min-h-[420px]",
        "transition hover:shadow-md",
        className,
      ].join(" ")}
    >
      <div className="flex h-full flex-col">
        <div>
          <div
            className="font-extrabold text-[#0E1A2A] leading-[0.9]
                          text-[clamp(2.25rem,6vw,4rem)]"
          >
            {number}
          </div>

          <p className="mt-4 max-w-[36ch] text-slate-700 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-6 w-[325px] h-[329px] shrink-0">
          <Image
            src={iconSrc}
            alt=""
            width={325}
            height={329}
            className="!w-[325px] !h-[329px] max-w-none object-contain"
          />
        </div>
      </div>
    </article>
  );
}
