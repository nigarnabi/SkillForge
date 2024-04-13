import Image from "next/image";

export default function Overview() {
  return (
    <>
      <h1 className="text-7xl  text-main font-extrabold leading-tight">
        Launch a career in tech{" "}
        <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
          that lasts
        </span>
      </h1>
      <p className="mt-5 text-2xl text-slate-600">
        Launch a new career as a product designer in as little as 5 months.
      </p>
      <div className="mt-12 mb-5 overflow-hidden rounded-3xl">
        <Image
          src="/product2.png"
          alt="Product Design"
          width={500}
          height={900}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </>
  );
}
