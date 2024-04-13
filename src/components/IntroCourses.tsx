"use client";
import IntroCourseCard from "./IntroCourseCard";
import CarouselButton from "./CarouselButton";
import { useRef } from "react";
import {
  PencilRuler,
  Framer,
  Boxes,
  GitBranchPlus,
  Puzzle,
  FileTerminal,
  SquaresExclude,
} from "lucide-react";
export default function IntroCourses() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollOffset * carouselRef.current.clientWidth * 0.25,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="bg-main mt-20 py-20 ">
      <div className=" mx-24 max-w-4xl px-6 text-start">
        <h2 className="text-7xl font-bold text-white">
          Not sure which field’s for you?{" "}
          <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
            Explore our free intro courses
          </span>
        </h2>
        <p className="mt-8 text-2xl text-gray-200">
          Learn how to apply for your Bildungsgutschein, design an app screen,
          code your first website, or learn end-to-end analysis, and get a taste
          for tech roles in Germany.
        </p>
      </div>
      <div className="relative mt-8">
        <div
          ref={carouselRef}
          className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth  mt-8"
        >
          <div className="flex gap-4 pr-6">
            <IntroCourseCard
              icon={PencilRuler}
              title="UX Design"
              description="Get a thorough intro to UX and learn how great products and services are designed."
              href="/courses/ux-design"
            />
            <IntroCourseCard
              icon={Framer}
              title="UI Design"
              description="Design your own app screen—learning key UI principles as you go."
              href="/courses/ui-design"
            />
            <IntroCourseCard
              icon={GitBranchPlus}
              title="Software Engineering"
              description="Code your own website from scratch, and learn HTML, CSS, and JavaScript."
              href="/courses/software-engineering"
            />
            <IntroCourseCard
              icon={Boxes}
              title="Product Management"
              description="Explore the multi-faceted world of building, testing, and improving products for customers."
              href="/courses/product-management"
            />
            <IntroCourseCard
              icon={Puzzle}
              title="Data Analytics"
              description="Learn key analysis techniques in order to turn raw data into actionable insights."
              href="/courses/data-analytics"
            />
            <IntroCourseCard
              icon={FileTerminal}
              title="Digital Marketing"
              description="Discover the skills you’ll need to carry out successful marketing campaigns."
              href="/courses/digital-marketing"
            />
            <IntroCourseCard
              icon={SquaresExclude}
              title="Product Design"
              description="Learn how to design products that solve user problems and meet company goals."
              href="/courses/product-design"
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
    </section>
  );
}
