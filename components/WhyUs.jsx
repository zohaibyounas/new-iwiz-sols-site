import React from "react";
import Image from "next/image";
import { Target, Settings, Trophy } from "lucide-react";

const stats = [
  { value: "12", label: "Years Experience", offset: "mt-6" },
  { value: "97%", label: "Retention Rate", offset: "mt-0" },
  { value: "8K", label: "Project Completed", offset: "mt-6" },
  { value: "19K", label: "Happy Clients", offset: "mt-0" },
];

const WhyUs = () => {
  return (
    <section className="relative w-full py-20 bg-[#F8F9FC] overflow-hidden font-sans">
      {/* 1. Background Pattern (Subtle contour lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="contour"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 Q 25 25, 50 50 T 100 50"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1"
              />
              <path
                d="M0 20 Q 25 45, 50 20 T 100 20"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1"
              />
              <path
                d="M0 80 Q 25 55, 50 80 T 100 80"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contour)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* LEFT: Large Image */}
          <div className="relative w-full">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-tl-[60px] rounded-br-[60px] overflow-hidden shadow-lg bg-white border-4 border-white">
              <Image
                src="/choose.png"
                alt="Team Brainstorming"
                fill
                className="object-cover"
              />
              {/* Optional Tech Overlay Graphic inside image */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: Main Heading Text */}
          <div className="pt-2 lg:pl-6">
            <span className="text-blue-600 font-bold text-sm md:text-base tracking-wide uppercase mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight mb-6">
              IT Solutions Designed to <br className="hidden md:block" />
              Drive Results
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl">
              Monotonectally synergize granular markets and front market
              Collaboratively visualize strat fomediaries after based models,
              Synergistically task state of the art infrastructures.
            </p>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: 3 Features (Mission/Vision/Awards) - Spans 7 columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-start group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-blue-50 flex items-center justify-center mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Target className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                Our Mission
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our mission is push engage boundaries, enga audiences, and driv
                engage innovation through innovation
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-blue-50 flex items-center justify-center mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Settings className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                Our Vision
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our mission is push engage boundaries, enga audiences, and driv
                engage innovation through innovation
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-blue-50 flex items-center justify-center mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Trophy className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                Our Awards
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our mission is push engage boundaries, enga audiences, and driv
                engage innovation through innovation
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Small Image + Floating Badge - Spans 5 columns */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-end">
            {/* Container for Image & Badge */}
            <div className="relative inline-block w-full max-w-[400px]">
              {/* 
                 THE CIRCULAR BADGE
                 Positioned absolutely to overlap the Top-Left corner of the image.
                 -top-12 and -left-12 pulls it upward and leftward "above" the image.
                 z-20 ensures it stays on top.
              */}
              <div className="absolute -top-44 -left-10 md:-left-16 z-20 w-36 h-36 md:w-40 md:h-40 hidden sm:flex items-center justify-center">
                {/* 1. Rotating Text Ring */}
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite] w-full h-full">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full overflow-visible"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent"
                    />
                    <text className="text-[11.5px] font-bold tracking-[0.14em] fill-[#0F172A] uppercase">
                      <textPath href="#circlePath" startOffset="0%">
                        • Years of Experience in IT Solutions •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* 2. Center Blue Circle */}
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-[#2563EB] rounded-full border-[5px] border-[#F8F9FC] flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl md:text-4xl font-bold">
                    25
                  </span>
                </div>
              </div>

              {/* The Small Image */}
              <div className="relative w-full h-[280px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/chooseus.png"
                  alt="Business Meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 mt-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-40 h-40 bg-[#E7F1FF] rounded-full border-2 border-[#BFD9FF] shadow-sm ${stat.offset}`}
          >
            <span className="text-3xl font-bold text-gray-900">
              {stat.value}
            </span>
            <span className="mt-2 text-sm text-gray-700 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
