// components/OurProcess.js
import React from "react";
import Image from "next/image";

const stats = [
  { value: "12", label: "Years Experience", offset: "mt-6" },
  { value: "97%", label: "Retention Rate", offset: "mt-0" },
  { value: "8K", label: "Project Completed", offset: "mt-6" },
  { value: "19K", label: "Happy Clients", offset: "mt-0" },
];

const steps = [
  {
    title: "Initiation & Planning",
    description:
      "We are architects innovation trailblazers of technological advancement",
    step: "STEP - 01",
    image: "/illustration.png",
  },
  {
    title: "Execution & Development",
    description:
      "We are architects innovation trailblazers of technological advancement",
    step: "STEP - 02",
    image: "/illustration1.png",
  },
  {
    title: "Testing & Maintenance",
    description:
      "We are architects innovation trailblazers of technological advancement",
    step: "STEP - 03",
    image: "/illustration2.png",
  },
];

export default function OurProcess() {
  return (
    <section className="py-16 bg-white">
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 mb-20">
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

      {/* Process Section */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm text-blue-500 mb-2">Our Process</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Features That Simplify The Ticketing Process
        </h2>

        {/* Step badges connected by dashed line */}
        <div className="relative flex flex-col items-center md:flex-row md:justify-between md:items-start mb-16">
          {/* Dashed line behind badges */}
          <div className="hidden md:block absolute top-4 left-0 right-0 h-0 border-t border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative z-10 md:w-1/3"
            >
              {/* Step Badge */}
              <div className="bg-blue-500 text-white text-[11px] font-semibold rounded-full px-3 py-1 mb-6 inline-block">
                {step.step}
              </div>

              {/* Step Illustration */}
              <div className="w-32 h-32 mb-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={128}
                  height={128}
                  className="mx-auto"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
