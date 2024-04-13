"use client";
import Image from "next/image";
import Link from "next/link";
import CarouselCard from "./CarouselCard";
import CarouselButton from "./CarouselButton";
import IntroCourses from "./IntroCourses";
import { useRef } from "react";
export default function Journey() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollOffset * carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-main mt-20 py-20 ">
      <div className="mx-auto max-w-7xl px-6 text-start">
        <h2 className="text-6xl font-bold text-white">
          Career
          <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
            {" "}
            Change
          </span>
          <span className="text-white"> Journeys</span>
        </h2>
        <p className="mt-8 text-2xl text-gray-200">
          Learn first-hand from our graduates what it’s like to study at
          CareerFoundry.
        </p>
        <Link
          href="/journeys"
          className="mt-8 inline-flex items-center justify-center text-lg rounded-full bg-blue-400 px-6 py-3 tracking-wide text-main   font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 hover:bg-blue-500 transition"
        >
          More Stories
        </Link>
      </div>
      {/* Carousel Cards */}
      <div className="relative mt-8">
        <div
          ref={carouselRef}
          className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth  mt-8"
        >
          <div className="flex gap-2 pr-6 w-[110%]">
            <CarouselCard
              imgSrc="/carousel1.png"
              href="/journeys/journey1"
              alt="Journey 1"
              title="The conversations and advice from my mentor were invaluable! I appreciated that someone was dedicated to looking at my work and my career path."
              description="From educator to senior UX design researcher"
            />

            <CarouselCard
              imgSrc="/carousel2.png"
              href="/journeys/journey1"
              alt="Journey 1"
              title="I love what I do now and I’m so satisfied with my new career. It’s the first time in my life where I can see my future clearly."
              description="From educator to senior UX design researcher"
            />

            <CarouselCard
              imgSrc="/carousel3.png"
              href="/journeys/journey1"
              alt="Journey 1"
              title="I made a career pivot in less than a year and I landed my unicorn job situation. I’m much happier and more fulfilled with my life and professional career."
              description="From fashion designer to design experience senior analyst"
            />
          </div>
        </div>
        {/* Carousel Buttons */}
        <CarouselButton
          onPrev={() => scroll(-1)}
          onNext={() => scroll(1)}
          className="absolute -bottom-20 right-8 "
        />
      </div>
      {/* Intro Courses section  */}
      <IntroCourses />
    </section>
  );
}
