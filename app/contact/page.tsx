import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ThumbsUp, Users } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us to build your awesome project.",
};

export default function ContactPage() {
  return (
    <div className="font-sans text-slate-600 bg-white">
      {/* ========================
          1. HEADER SECTION 
         ======================== */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661763911173-f2f7becc70b0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Contact Us
          </h1>

          {/* Breadcrumb: Home > About Us */}
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>

            <ChevronRight className="w-5 h-5 text-blue-500" />

            <span className="text-blue-400">Contact Us</span>
          </div>
        </div>
      </section>

      {/* ========================
          2. MAIN CONTENT CARD 
         ======================== */}
      <div className="container mx-auto px-4 py-20 lg:py-24 max-w-7xl">
        {/* White Card Container */}
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* --- LEFT COLUMN: INFO & STATS --- */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            {/* Heading */}
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-3 block">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
              Let’s Build an Awesome <br /> Project Together
            </h2>
            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-10 max-w-lg">
              Each demo built with Teba will look different. You can customize
              almost anything in the appearance of your website with only a few
              clicks. Each demo built with Teba will look different.
            </p>

            {/* Stats / Features */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-[#3B82F6] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                  <ThumbsUp className="w-8 h-8 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-1">
                    350+ Projects Done
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    From banking and insurance to wealth the management and
                    security on there
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-[#3B82F6] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                  <Users className="w-8 h-8 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-1">
                    500+ Happy Clients
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    From banking and insurance to wealth the management and
                    security on there
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="p-4 md:p-8 lg:py-12 lg:pr-12 h-full">
            {/* 
                Blue Container with Special Corner Radius 
                (Rounded Top-Left, Standard Bottom-Right to fit card)
            */}
            <div className="bg-[#3B82F6] w-full h-full rounded-tl-[60px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[30px] lg:rounded-tr-[5px] lg:rounded-bl-[5px] lg:rounded-br-[30px] p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Make an Appointment
              </h3>
              <p className="text-blue-100 text-xs md:text-sm mb-8 font-medium">
                Feel free to contact with us, we don&apos;t spam your email
              </p>

              <form className="space-y-4">
                {/* Name */}
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full bg-[#F8F9FA] text-gray-800 rounded-md px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-white/50"
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email Here *"
                  className="w-full bg-[#F8F9FA] text-gray-800 rounded-md px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-white/50"
                />

                {/* Select Service */}
                <div className="relative">
                  <select className="w-full bg-[#F8F9FA] text-gray-500 rounded-md px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer">
                    <option>Select Service *</option>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Consulting</option>
                  </select>
                  {/* Custom Arrow for Select */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Comment */}
                <textarea
                  rows={3}
                  placeholder="Your Comment *"
                  className="w-full bg-[#F8F9FA] text-gray-800 rounded-md px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    className="bg-[#1A1A1A] hover:bg-black text-white text-sm font-bold py-4 px-8 rounded shadow-lg transition-colors"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
