"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Raza Abbas",
    job: "C.E.O Mira Elektronikentwicklung",
    text: "Impressed by the innovative approach of iWizSolutions. Their IoT-based smart car parking solution has been a game-changer for our facility. Streamlined parking and easy access in one efficient package.",
    image: "/raza.jpeg",
  },
  {
    name: "Fritz Conroy",
    job: "C.E.O AFCO Inc.",
    text: "iWizSolutions’ IoT-based garage gate system redefined control. I can now manage my garage from anywhere with a single tap. This is modern convenience at its best.",
    image: "/Fritz2.jpg",
  },
  {
    name: "Ben David",
    job: "C.T.O at MetaTech",
    text: "A rare team that combines creativity, reliability, and strong communication. They helped us with a challenging project and delivered excellence at every level.",
    image: "/Ben David.jpeg",
  },
  {
    name: "Abdul Habib",
    job: "C.E.O IQRA Foundation",
    text: "iWizSolutions transformed our security infrastructure with their IP-based CCTV and email casting services. A seamless and brilliant solution.",
    image: "/Abdul.jpeg",
  },
  {
    name: "Abbas Naqvi",
    job: "CTO at Iraq Duty Free",
    text: "The IWIZ team expertly upgraded our POS systems and credit card machines. Leadership and execution were top-notch.",
    image: "/clientupdata.jpeg",
  },
  {
    name: "Muhammad Ali",
    job: "Director at Inno IT Pvt Ltd",
    text: "An excellent experience working with Team IWIZ. Their POS solution integrated smoothly with SAP and exceeded expectations.",
    image: "/client6.jpeg",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const data = testimonials[current];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center bg-gray-50"
      style={{
        backgroundImage: "url('/test.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT */}
        <div className="space-y-6 lg:max-w-lg">
          <span className="text-blue-600 font-bold text-lg tracking-wide">
            Testimonial
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A]">
            What Our Clients Say About Us
          </h2>

          <p className="text-gray-500 text-lg">
            Real feedback from our international clients.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-xl bg-white border shadow-sm flex items-center justify-center hover:bg-gray-50"
            >
              <ArrowLeft className="w-6 h-6 text-blue-600" />
            </button>

            <button
              onClick={next}
              className="w-14 h-14 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30 flex items-center justify-center hover:bg-blue-700"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
          <div className="absolute top-6 left-6 w-full h-full rounded-[2rem] border bg-white opacity-60"></div>
          <div className="absolute top-3 left-3 w-full h-full rounded-[2rem] border bg-white"></div>

          <div className="relative z-20 bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Text */}
            <blockquote className="text-gray-600 text-lg leading-relaxed mb-8">
              &ldquo;{data.text}&rdquo;
            </blockquote>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg">
                    {data.name}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    {data.job}
                  </p>
                </div>
              </div>

              <Quote className="w-10 h-10 text-blue-600 fill-blue-600 rotate-180 opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
