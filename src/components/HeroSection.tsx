import Amazon from "@/assets/amazon.svg";
import Metadata from "@/assets/metadata.svg";
import Forbes from "@/assets/forbes.svg";
import Ux from "@/assets/ux.svg";
import Cloud from "@/assets/cloud.svg";

import Ebay from "@/assets/ebay.svg";
import Facebook from "@/assets/facebook.svg";
import Paypal from "@/assets/paypal.svg";

import Microsoft from "@/assets/microsoft.svg";
import Tesla from "@/assets/tesla.svg";
import Image from "next/image";
import MainInfo from "./MainInfo";
import ProgramCard from "./ProgramCard";
import StatCard from "./StatCard";
import Journey from "./Journey";
import IntroCourses from "./IntroCourses";
export default function HeroSection() {
  return (
    <section className="bg-[#FAF8F5] py-20">
      <div className="mx-auto max-w-3xl text-center px-4">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-black leading-tight sm:text-6xl">
          Launch your career in tech{" "}
          <span className="bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
            fully funded by the German government
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-2xl text-gray-700">
          Learn flexibly online, guided by industry mentors, and get job-ready—
          <span className="font-medium">
            100% funded by the Agentur für Arbeit
          </span>
          .
        </p>

        {/* Button */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-block rounded-full bg-main px-6 py-3 font-semibold text-white shadow hover:bg-main/90"
          >
            Check your eligibility
          </a>
        </div>
      </div>
      <p className="mt-5 text-2xl text-gray-700 text-center">
        10,000+ CareerFoundry graduates have launched exciting tech careers
      </p>
      {/* Logos */}
      <div className="mt-8 flex  flex-wrap items-center justify-center space-x-6 ">
        <Amazon className="brand-logo" />

        <Ebay className="brand-logo" />
        <Facebook className="brand-logo" />
        <Paypal className="brand-logo" />

        <Microsoft className="brand-logo" />
        <Tesla className="brand-logo" />
      </div>
      <p className="mt-14 text-2xl text-gray-700 text-center">
        Loved and trusted. Many years and counting.
      </p>
      <div className="mt-10 mx-auto max-w-xl">
        <div className="mt-8 grid grid-cols-4 place-items-center gap-0.5">
          <Metadata className="h-12 w-auto text-gray-500 " />
          <Forbes className="h-12 w-auto text-gray-500 " />
          <Ux className="h-12 w-auto text-gray-500 " />
          <Cloud className="h-12 w-auto text-gray-500 " />
        </div>
      </div>
      {/* Image + Stats together */}
      <div className="mt-16 mx-auto max-w-7xl px-4">
        <Image
          src="/studentprof.png"
          alt="Student Profile"
          className="rounded-lg shadow-lg"
          width={1600}
          height={800}
        />

        {/* stats directly under image */}
        <div className="mt-12 flex items-start gap-8">
          {/* Stat 1 */}
          <div className="flex items-baseline gap-4">
            <span className="text-2xl font-extrabold text-main">90.8%</span>
            <span className="text-xl text-gray-600 leading-snug">
              of graduates get a<br className="hidden sm:block" />
              job within 180 days
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex items-baseline gap-4">
            <span className="text-2xl font-extrabold text-main">+€14,413</span>
            <span className="text-xl text-gray-600 leading-snug">
              the average salary
              <br className="hidden sm:block" />
              increase per year
            </span>
          </div>
        </div>
      </div>
      {/* Info section  */}
      <MainInfo
        title="Break into tech"
        highlightedText="from any background"
        description="Learn new tech skills from scratch. We work with skilled industry experts to create learning materials that equip you with the knowledge and in-demand skills needed to land the job you want. So even if you’re a complete beginner, our online study platform's cutting-edge curriculum is built for you."
        buttonText="Find Out More"
        imageSrc="/studenttech.png"
        imageAlt="Break into tech"
      />
      <MainInfo
        title="Get practical experience with our"
        highlightedText="cutting-edge curriculum"
        description="A career in technology means staying up to date with the latest tools. Our instructional designers and editors work with skilled industry experts to create learning materials and project briefs that equip you with the knowledge and in-demand skills needed to land the job you want."
        buttonText="Find Your New Career"
        imageSrc="/inspire.png"
        imageAlt="Learn flexibly online"
      />
      <MainInfo
        title="Navigate your next steps with "
        highlightedText="expert mentors"
        description="Work in partnership with industry experts. Your mentor is a senior in the field helping you meet your long-term career goals, and your tutor is a course expert providing your assignment feedback. In the Job Preparation Course, enjoy 1:1 support from a career specialist. Practice interviewing, revamp your resume, and get job-ready!"
        buttonText="Meet Our Mentors"
        imageSrc="/mentor.png"
        imageAlt="Your Mentor"
      />
      <MainInfo
        title="Shape your studies "
        highlightedText="around your life"
        description="Swap the commute to class for the flexibility of remote learning. Our career-change platform is built with busy schedules in mind, so you can work to your own timetable—not rigid class calendars. No need to quit your job or put life on hold, since you decide when and where you learn."
        buttonText=" How It Works"
        imageSrc="/schedule.png"
        imageAlt="Learn on your schedule"
      />
      {/* End of Info section  */}
      <div className="mx-auto max-w-7xl px-6">
        <h1
          className="font-extrabold tracking-tight text-black leading-[0.95]
                       text-7xl"
        >
          Launch a career in tech <br />
          <span className="inline-block bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
            that lasts
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-8 max-w-3xl text-slate-600 leading-relaxed
                     text-2xl"
        >
          Our programs teach you everything you need to get your first job in
          tech and build a career fit for the future. With flexible study
          options, you can learn part-time or full-time and graduate in as
          little as 5 months.
        </p>
      </div>
      {/* Cards */}
      <div className="mt-16 mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProgramCard
          heading1="Fully Online"
          heading2="Dual Mentorship"
          title="Software Engineering Program"
          funding="100% funded by the German government"
          description="Make the web. Learn to create with code."
          href="#"
          buttonText="View  Program"
          avatarSrc={["/student1.jpg", "/student5.jpg", "/student3.jpg"]}
        />
        <ProgramCard
          heading1="Fully Online"
          heading2="Dual Mentorship"
          title="Digital Marketing Program"
          funding="100% funded by the German government"
          description="Make your next company famous. Learn the skills you need to drive growth."
          href="#"
          buttonText="View  Program"
          avatarSrc={["/student2.jpg", "/student5.jpg", "/student3.jpg"]}
        />
        <ProgramCard
          heading1="Fully Online"
          heading2="Dual Mentorship"
          title="Product Management Program"
          funding="100% funded by the German government"
          description="Make great products that people love. Learn every step from research to execution."
          href="#"
          buttonText="View  Program"
          avatarSrc={["/student4.jpg", "/student5.jpg", "/student6.jpg"]}
        />
        <ProgramCard
          heading1="Fully Online"
          heading2="Dual Mentorship"
          title="Product Design Program"
          funding="100% funded by the German government"
          description="Make products users love. Learn the product design process."
          href="#"
          buttonText="View  Program"
          avatarSrc={["/student1.jpg", "/student5.jpg", "/student6.jpg"]}
        />
        <ProgramCard
          heading1="Fully Online"
          heading2="Dual Mentorship"
          title="UI Design Program"
          funding="100% funded by the German government"
          description="Make the web beautiful. Learn to design a complete application from scratch."
          href="#"
          buttonText="View  Program"
          avatarSrc={["/student1.jpg", "/student5.jpg", "/student3.jpg"]}
        />
        <ProgramCard
          heading1="Fully Online"
          heading2="Dual Mentorship"
          title="UX Design Program"
          funding="100% funded by the German government"
          description="Make the web usable for everyone. Become fluent in the UX design process."
          href="#"
          buttonText="View  Program"
          avatarSrc={["/student1.jpg", "/student5.jpg", "/student3.jpg"]}
        />
        <ProgramCard
          heading1="Fully Online"
          heading2="Dual Mentorship"
          title="Data Analytics Program with German"
          funding="100% funded by the German government"
          description="Lean German and make the data talk. Become a highly adept analyst with Excel, SQL, and Python."
          href="#"
          buttonText="View  Program"
          avatarSrc={["/student6.jpg", "/student5.jpg", "/student2.jpg"]}
        />
        <ProgramCard
          heading1="Vollständig Online"
          heading2="Duales Mentorship"
          title="Data Analytics Program (Deutsch)"
          funding="100% von der Agentur für Arbeit finanziert"
          description="Bringe die Daten zum Sprechen. Werde ein hochkompetenter Datenanalyst mit Excel, SQL und Python."
          href="#"
          buttonText="Programm ansehen"
          avatarSrc={["/student1.jpg", "/student5.jpg", "/student3.jpg"]}
        />
        <ProgramCard
          heading1="Job Guarantee"
          heading2="Dual Mentorship"
          title="Data Analytics Program"
          funding="100% funded by the German government"
          description="Make the data talk. Become a highly adept analyst with Excel, SQL, and Python."
          href="#"
          buttonText="View  Program"
          avatarSrc={["/student6.jpg", "/student5.jpg", "/student2.jpg"]}
        />
      </div>
      {/* End of Program section  */}
      <div className="mx-auto max-w-7xl mt-44 px-6">
        <h1
          className="font-extrabold tracking-tight text-black leading-tight
                       text-7xl"
        >
          Get hired faster with
          <br />
          <span className="inline-block bg-gradient-to-r from-hero-blue to-hero-purple bg-clip-text text-transparent">
            with personalized 1:1
            <br />
            <span className="inline-block bg-gradient-to-r from-hero-purple to-purple-950 bg-clip-text text-transparent">
              {" "}
              career coaching
            </span>
          </span>
        </h1>

        <p
          className="mt-10 max-w-3xl text-slate-600 leading-tight
                     text-2xl"
        >
          Career change isn’t easy—that’s why we’re with you every step of the
          way. With over a decade of experience helping our graduates land jobs,
          our personalized career coaching equips you with the tools and
          confidence you need to secure the role you want.
        </p>
      </div>
      {/* Stats section */}
      <div className="mt-8 mx-auto max-w-7xl px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StatCard
            number="90.8%"
            description="of grads get a job within 6 months"
            iconSrc="/stats1.png"
          />
          <StatCard
            number="75 days"
            description="average time taken for grads to land a new job"
            iconSrc="/stats2.png"
          />
          <StatCard
            number="€14,413"
            description="average salary increase per year"
            iconSrc="/stats3.png"
          />
        </div>
      </div>
      {/* Journey section */}
      <Journey />
    </section>
  );
}
