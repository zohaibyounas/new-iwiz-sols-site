import React from "react";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  ArrowLeft,
  ArrowRight,
  Minus,
  Mail,
} from "lucide-react";

const TeamMember = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-[#3B82F6] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans ">
      {/* Background Circuit Pattern (Subtle Overlay) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 ">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10 h80 v80 h-80 Z"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            <circle cx="10" cy="10" r="2" fill="white" />
            <circle cx="90" cy="90" r="2" fill="white" />
            <path d="M50 10 v80 M10 50 h80" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2  items-stretch gap-8 ">
        {/* LEFT COLUMN: Featured Member Card */}
        <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col justify-end h-full min-h-[500px] lg:min-h-auto group lg:w-[80%] ">
          {/* Main Image */}
          <div className="absolute inset-0 lg:w-[100%] h-full">
            <img
              src="/Irtaz-Madad-Naqvii.jpg"
              alt="Irtaza Madad Naqvi"
              // fill
              className="object-cover object-top"
            />
          </div>

          {/* Social Media Sidebar (Floating Right) */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {/* Facebook */}
            {/* <button className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-blue-600 shadow-md hover:bg-gray-50 transition-colors">
              <Facebook className="w-5 h-5 fill-current" />
            </button> */}
            {/* LinkedIn (Blue Background) */}
            <a
              href="https://www.linkedin.com/in/irtaza-madad-naqvi-798b5715a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white shadow-md hover:bg-blue-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
            {/* Twitter */}
            {/* <button className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-blue-400 shadow-md hover:bg-gray-50 transition-colors">
              <Twitter className="w-5 h-5 fill-current" />
            </button> */}
            {/* Instagram */}
            <a
              href="mailto:irtaza.madad@iwizsols.com"
              className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-blue-600 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Send Email to irtaza.madad@iwizsols.com"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Floating Info Card (Bottom Left) */}
          <div className="relative m-6 mb-8 bg-white rounded-2xl p-5 shadow-lg flex items-center justify-between max-w-[85%]">
            <div>
              <h3 className="text-xl font-bold text-blue-600">
                Irtaza Madad Naqvi
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                Managing Director
              </p>
            </div>
            <button className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors">
              <Minus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Content & Carousel */}
        <div className="bg-[#1746A2] rounded-[40px] p-8 md:p-12 text-white relative shadow-2xl flex flex-col justify-between">
          {/* Top Header Section */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-blue-200 text-sm font-medium tracking-wide">
                Our Team Members
              </span>

              {/* Navigation Arrows */}
              {/* <div className="flex gap-3">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 shadow-lg hover:bg-gray-100 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-blue-500/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:bg-blue-500 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div> */}
            </div>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Our Team is Ready <br /> To Help.
            </h2>

            <p className="text-blue-100 text-sm leading-relaxed max-w-md mb-10">
              A dedicated team of IT professionals, developers, and innovators
              working together to deliver exceptional solutions for your
              business challenges.
            </p>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Thumb 1 (Active) */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white cursor-pointer transition-transform hover:scale-105">
              <img
                src="/aqib.JPG"
                alt="Member 1"
                // fill
                className="object-cover"
              />
            </div>

            {/* Thumb 2 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition-all hover:scale-105">
              <img
                src="/younas.JPG"
                alt="Member 2"
                //  fill
                className="object-cover"
              />
            </div>

            {/* Thumb 3 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer opacity-80 hover:opacity-100 transition-all hover:scale-105">
              <img
                src="/munsif.JPG "
                alt="Member 3"
                // fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
