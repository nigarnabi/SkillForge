"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CarouselButtonProps = {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
};
export default function CarouselButton({
  onPrev,
  onNext,
  className = "",
}: CarouselButtonProps) {
  return (
    <div className={`flex gap-3 ${className || ""}`}>
      <button
        onClick={onPrev}
        className="p-3 bg-main border border-white mb-4 rounded-full shadow-md hover:shadow-lg transition"
        aria-label="Previous"
      >
        <ArrowLeft className="size-6" />
      </button>
      <button
        onClick={onNext}
        className="p-3 bg-main border border-white mb-4 rounded-full shadow-md hover:shadow-lg transition"
        aria-label="Next"
      >
        <ArrowRight className="size-6" />
      </button>
    </div>
  );
}
