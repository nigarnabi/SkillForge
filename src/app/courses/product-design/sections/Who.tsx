"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Who is this program for?",
    answer: `If you’ve got an interest in designing great products and the motivation to transform your career, this program is for you. You don’t need a background in design or tech as our program is designed to take you from complete beginner to job-ready.

You can study part-time at 15–20 hours per week to finish the program in 10 months; or complete the program in as little as 5 months by studying up to 30–40 hours per week.

You’ll also need written and spoken English skills at level B2 and higher, and a computer (macOS, Windows, or Linux) with a webcam, microphone, and an internet connection.`,
  },
  {
    id: 2,
    question: "Why product design?",
    answer:
      "Product design is one of the most in-demand fields in tech today, combining creativity with real-world problem solving. You’ll learn skills that are immediately valuable in the job market.",
  },
  {
    id: 3,
    question: "Why CareerFoundry?",
    answer:
      "CareerFoundry offers mentor-led learning with job support, giving you both the knowledge and confidence to transition into a new career.",
  },
];

export default function WhoFor() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className=" py-16">
      <h2 className="text-6xl font-extrabold text-main leading-tight">
        <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
          Flexible
        </span>{" "}
        study for beginners
      </h2>
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-[1fr_auto] mt-12 gap-12">
        {/* LEFT: Title + Accordion */}
        <div>
          <div className="mt-8 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <div key={faq.id} className="py-6">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="flex w-full items-center justify-between text-left text-lg font-medium text-slate-900"
                >
                  {faq.question}
                  {openId === faq.id ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </button>

                {openId === faq.id && (
                  <div className="mt-4 text-slate-700 whitespace-pre-line text-[15px] leading-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Fixed Image */}
        <div>
          <Image
            src="/whofor.png"
            alt="Student learning online"
            width={350}
            height={600}
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
