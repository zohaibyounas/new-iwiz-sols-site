// components/OurProcess.js
import React from "react";
import Image from "next/image";

const stats = [
  { value: "10+", label: "Years of Industry Experience", offset: "mt-6" },
  { value: "97%", label: "Client Retention Rate", offset: "mt-0" },
  { value: "100+", label: "Projects Successfully Delivered", offset: "mt-6" },
  { value: "40+", label: "Satisfied Global Clients", offset: "mt-0" },
];

const steps = [
  {
    title: "Initiation & Planning",
    description:
      "We analyze requirements, define scope, and plan scalable IT solutions.",
    step: "STEP - 01",
    image: "/illustration.png",
  },
  {
    title: "Execution & Development",
    description:
      "We develop, integrate, and deliver reliable IT products efficiently globally.",
    step: "STEP - 02",
    image: "/illustration1.png",
  },
  {
    title: "Testing & Maintenance",
    description:
      "We test, optimize, and maintain systems ensuring performance, security, reliability.",
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
      {/* Process Section */}
      {/* Process Section */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm text-blue-500 mb-2">Our Process</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-14">
          Features That Simplify The Ticketing Process
        </h2>

        {/* Images */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="md:w-1/3 flex justify-center">
              <Image
                src={step.image}
                alt={step.title}
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Dashed STEP Line */}
        <div className="hidden md:flex items-center justify-between mb-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center md:w-1/3">
              {/* Left dash */}
              <div className="flex-1 border-t border-dashed border-gray-300"></div>

              {/* Step label */}
              <span className="mx-3 bg-blue-500 text-white text-[11px] font-semibold rounded-full px-4 py-1 whitespace-nowrap">
                {step.step}
              </span>

              {/* Right dash */}
              <div className="flex-1 border-t border-dashed border-gray-300"></div>
            </div>
          ))}
        </div>

        {/* Titles & Descriptions */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {steps.map((step, index) => (
            <div key={index} className="md:w-1/3">
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
