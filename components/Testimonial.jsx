import React from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center bg-gray-50"
      style={{
        // Using the requested background image path
        backgroundImage: "url('/test.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay if the background image needs tinting to match the white vibe of the design */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-6 lg:max-w-lg">
          <span className="text-blue-600 font-bold text-lg tracking-wide">
            Testimonial
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
            What Our Clients Say About Us
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed">
            Each demo built with Teba will look different. You can customize
            almost anything in the appearance of your website.
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 pt-4">
            {/* Previous Button - White with Blue Icon */}
            <button className="w-14 h-14 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group hover:bg-gray-50 transition-colors">
              <ArrowLeft className="w-6 h-6 text-blue-600" />
            </button>

            {/* Next Button - Blue with White Icon */}
            <button className="w-14 h-14 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30 flex items-center justify-center group hover:bg-blue-700 transition-colors">
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Stacked Card Design */}
        <div className="relative w-full max-w-xl mx-auto lg:ml-auto perspective-1000">
          {/* Layer 2 (Furthest Back) */}
          <div className="absolute top-6 left-6 w-full h-full rounded-[2rem] border border-gray-200 bg-white opacity-60 z-0"></div>

          {/* Layer 1 (Middle) */}
          <div className="absolute top-3 left-3 w-full h-full rounded-[2rem] border border-gray-200 bg-white z-10"></div>

          {/* Main Card (Front) */}
          <div className="relative z-20 bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100">
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-gray-600 text-lg leading-relaxed mb-8">
              &ldquo; Working with several word themes and templates the last
              years only can say this is best in every level use it for my
              reviews that I have already are company and the reviews that I
              have already are all excellent. Not only the design but the code
              &quot;
            </blockquote>

            {/* User Profile & Quote Icon Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* User Image */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                    alt="Marvin McKinney"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* User Details */}
                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg">
                    Marvin McKinney
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    Product Manager
                  </p>
                </div>
              </div>

              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-blue-600 fill-blue-600 transform rotate-180 opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
