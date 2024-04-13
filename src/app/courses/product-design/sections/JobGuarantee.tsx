import Image from "next/image";
import Amazon from "@/assets/amazon.svg";

import Ebay from "@/assets/ebay.svg";
import Facebook from "@/assets/facebook.svg";
import Paypal from "@/assets/paypal.svg";

import Microsoft from "@/assets/microsoft.svg";
import Tesla from "@/assets/tesla.svg";

export default function JobGuarantee() {
  return (
    <section>
      <h1 className="text-7xl  text-main font-extrabold leading-tight">
        Graduate with our job{" "}
        <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
          guarantee
        </span>
      </h1>
      <p className="mt-5 text-2xl text-slate-600">
        Land a job within 6 months of graduation—or we’ll refund your tuition.
      </p>
      {/* image + stat */}
      <div className="mt-6 flex flex-col md:flex-row md:gap-8">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/product3.png"
            alt="Job Guarantee"
            width={600}
            height={350}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="max-w-3xl space-y-4  text-white bg-main p-6 rounded-lg flex justify-center flex-col  mt-4 md:mt-0">
          <h1 className="text-5xl font-bold"> +$15,082</h1>
          <p className="text-lg text-slate-200">
            the average salary increase per year
          </p>
        </div>
      </div>
      {/* 2 cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-5">
        <div className="flex flex-col md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <div>
            <Image
              src="/product4.png"
              alt="Job Guarantee"
              width={300}
              height={300}
              className="h-auto w-full object-cover rounded-xl"
            />
          </div>
          <div className="flex items-center gap-5 mt-24">
            <Image
              src="/studentsq1.jpg"
              alt="CareerFoundry Logo"
              width={40}
              height={40}
              className="h-auto rounded-full mt-4"
            />
            <h1 className="mt-4 text-lg text-main">
              Devanshi Vasa's <br /> Portfolio Project
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:col-span-3 rounded-2xl border border-blue-300 bg-blue-200 p-8 shadow-lg">
          <h1 className="text-3xl text-main font-bold">
            As a product designer, I had transferable skills to bring to the
            role. I still continue to help people and use my previous
            interpersonal skills, and now I am actually recognized and valued
            for it. I love the teamwork and seeing the designs grow and launch.
          </h1>
          <div className="flex items-center gap-5 mt-6">
            <Image
              src="/studentsq2.jpg"
              alt="CareerFoundry Logo"
              width={40}
              height={40}
              className="h-auto rounded-full mt-4"
            />
            <h1 className="mt-4 text-lg  text-main">
              Susana Roque Nunes <br /> From Nursing to Product Design
            </h1>
          </div>
        </div>
      </div>
      <p className="mt-10 text-lg text-slate-600">
        10,000+ CareerFoundry graduates have launched exciting tech careers
      </p>
      <div className="mt-8 flex  flex-wrap items-center justify-center space-x-4 ">
        <Amazon className="brand-logo" />

        <Ebay className="brand-logo" />
        <Facebook className="brand-logo" />
        <Paypal className="brand-logo" />

        <Microsoft className="brand-logo" />
      </div>
    </section>
  );
}
