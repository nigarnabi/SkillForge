import Image from "next/image";
type MainInfoProps = {
  title: string; // h2 text
  highlightedText: string; // highlighted part of h2
  description: string; // paragraph text
  buttonText: string; // button text
  imageSrc: string; // image source
  imageAlt: string; // image alt text
};
export default function MainInfo({
  title,
  highlightedText,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}: MainInfoProps) {
  return (
    <section className="py-20">
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto px-8 items-center">
        <div>
          <h2 className="text-2xl md:text-5xl text-main font-bold">
            {title}{" "}
            <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
              {highlightedText}
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-2xl text-gray-700 leading-relaxed">
            {description}
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-main text-white py-3 px-6 font-semibold text-lg md:text-xl"
          >
            {buttonText}
          </a>
        </div>
        <div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={1600}
            className="rounded-lg  h-[600px] w-auto object-cover "
          />
        </div>
      </div>
    </section>
  );
}
