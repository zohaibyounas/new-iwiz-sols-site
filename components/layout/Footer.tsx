import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0F1113] text-white pt-20 pb-10 overflow-hidden font-sans">
      {/* Background Grid Pattern (Optional subtle texture match) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- NEWSLETTER SECTION --- */}
        {/* Blue container with specific rounded corners */}
        <div
          className="bg-[#3B82F6] rounded-tl-3xl rounded-br-3xl 
  p-6 sm:p-8 md:p-12 lg:px-16 lg:py-14 
  flex flex-col md:flex-row 
  items-center justify-between 
  gap-6 md:gap-10 
  mb-20 shadow-2xl"
        >
          {/* Text */}
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-white">
              Subscribe to Our <br className="hidden sm:block" /> Newsletter
            </h2>
          </div>

          {/* Form */}
          <div className="w-full max-w-md">
            <div
              className="
      bg-white rounded-lg p-2 
      flex flex-col sm:flex-row 
      items-stretch sm:items-center 
      gap-2 shadow-lg
    "
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                className="
          flex-1 bg-transparent text-gray-700 
          px-4 py-3 outline-none 
          placeholder-gray-400 
          text-sm sm:text-base
        "
              />

              <button
                className="
        bg-[#3B82F6] hover:bg-blue-700 
        text-white font-medium 
        px-6 py-3 
        rounded-md transition-colors 
        text-sm sm:text-base 
        w-full sm:w-auto
      "
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>

        {/* --- MAIN LINKS SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 border-b border-gray-800 pb-12">
          {/* Column 1: Brand & Contact (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block relative w-40 h-12 mb-2">
              {/* Ensure public/logo.png exists */}
              <Image
                src="/logo.png"
                alt="Wiwiz Solutions"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed pr-6">
              Each demo built with Teba will look different. You can customize
              almost anythin appearance of your website with only a few.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="flex items-center justify-center w-5 h-5">
                  <Phone className="w-4 h-4 text-white group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                  +92 314 5372506
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="flex items-center justify-center w-5 h-5">
                  <Mail className="w-4 h-4 text-white group-hover:text-blue-500 transition-colors" />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                  irtaza.madad@iwizsols.com
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2 md:pl-4">
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-blue-500 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-blue-500 transition-colors"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-500 transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (Spans 3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link
                  href="/ui-ux"
                  className="hover:text-blue-500 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/app-dev"
                  className="hover:text-blue-500 transition-colors"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing"
                  className="hover:text-blue-500 transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/web-dev"
                  className="hover:text-blue-500 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="hover:text-blue-500 transition-colors"
                >
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Information (Spans 3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Information</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link
                  href="/process"
                  className="hover:text-blue-500 transition-colors"
                >
                  Working Process
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-blue-500 transition-colors"
                >
                  Faqs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- FOOTER BOTTOM --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright © {new Date().getFullYear()} Hurraytheme. All rights
            reserved.
          </p>

          <div className="flex items-center gap-3">
            {/* Facebook (White Box, Dark Icon) */}
            <Link
              href="https://www.facebook.com/profile.php?id=61551482918436&_rdc=1&_rdr#"
              className="w-9 h-9 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors group"
            >
              <Facebook className="w-4 h-4 text-[#0F1113] group-hover:scale-110 transition-transform" />
            </Link>

            {/* LinkedIn (Blue Box, White Icon - as per image) */}
            <Link
              href="https://www.linkedin.com/company/iwiz-solutions/"
              className="w-9 h-9 bg-[#3B82F6] rounded flex items-center justify-center hover:bg-blue-600 transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </Link>

            {/* Twitter (White Box, Dark Icon) */}
            <Link
              href="https://x.com/IWIZSOLUTI8328"
              className="w-9 h-9 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors group"
            >
              <Twitter className="w-4 h-4 text-[#0F1113] group-hover:scale-110 transition-transform" />
            </Link>

            {/* Instagram (White Box, Dark Icon) */}
            <Link
              href="https://www.instagram.com/iwizsol/"
              className="w-9 h-9 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors group"
            >
              <Instagram className="w-4 h-4 text-[#0F1113] group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
