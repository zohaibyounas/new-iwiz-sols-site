"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Plus,
  Minus,
} from "lucide-react";

export default function ServiceDetailsPage() {
  // State to manage FAQ accordion (Index 0 is open by default as per image)
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    { name: "Product-Design-&-Prototyping", active: false },
    { name: "Embedded-Systems-Security", active: false },
    { name: "IoT-Solutions", active: false },
    { name: "Mobile-&-Desktop-Application-Development", active: false }, // Highlighted Blue
    { name: "Cloud-Software-Solutions", active: false },
    { name: "POS-&-Retail-Automation", active: false },
    { name: "Maintenance-&-Support", active: false },
  ];

  const faqs = [
    {
      question: "What platforms do you develop applications for?",
      answer:
        " We develop apps for Android, iOS, Windows, and macOS platforms.",
    },
    {
      question: "Can you create both mobile and desktop applications?",
      answer:
        " Yes, we build high-performance apps for both mobile devices and desktop systems.",
    },
    {
      question: "Do you provide custom app development?",
      answer:
        " Yes, all applications are fully customized to meet specific business requirements.",
    },
    {
      question: "How long does it take to develop an application?",
      answer:
        " Development timelines vary by complexity, typically ranging from a few weeks to several months.",
    },
    {
      question: " Do you offer app maintenance and updates?",
      answer:
        " Yes, we provide ongoing support, updates, and performance optimization for all apps.",
    },
  ];

  return (
    <div className="font-sans text-slate-600 bg-white">
      {/* ========================
          1. PAGE HEADER SECTION 
         ======================== */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/mobile-hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Mobile & Desktop Application Development
          </h1>

          {/* Breadcrumb: Home > About Us */}
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <Link
              href="/services"
              className="hover:text-blue-400 transition-colors"
            >
              Services
            </Link>

            <ChevronRight className="w-5 h-5 text-blue-500" />

            <span className="text-blue-400">
              {" "}
              Mobile & Desktop Application Development{" "}
            </span>
          </div>
        </div>
      </section>

      {/* ========================
          2. MAIN CONTENT LAYOUT 
         ======================== */}
      <div className="container mx-auto px-4 py-20 lg:py-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* --- LEFT SIDEBAR (Span 4) --- */}
          <div className="lg:col-span-4 space-y-10 h-fit">
            {/* Services Navigation */}
            <div className="bg-[#F8F9FA] p-3 rounded-lg space-y-2">
              {services.map((item, index) => (
                <Link
                  key={index}
                  href={`/services/${item.name.replace(/\s+/g, "")}`}
                  className={`
      flex items-center justify-between px-6 py-4 rounded-md text-sm font-bold cursor-pointer transition-all duration-300
      ${
        item.active
          ? "bg-blue-600 text-white shadow-md"
          : "bg-white text-gray-500 hover:text-blue-600 hover:bg-white/80"
      }
    `}
                >
                  {item.name}
                  <ChevronRight
                    className={`w-4 h-4 ${
                      item.active ? "text-white" : "text-gray-400"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* "Need Any Help?" Box */}
            <div className="bg-[#F3F4F6] p-8 rounded-lg">
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                Need Any Help?
              </h3>
              <p className="text-xs text-gray-500 mb-8 font-medium">
                Need Any Help, Call Us 24/7 For Support
              </p>

              <div className="space-y-6">
                {/* Phone Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Call Us</p>
                    <p className="text-sm font-extrabold text-gray-900">
                      +92 314 5372506
                    </p>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Email</p>
                    <p className="text-sm font-extrabold text-gray-900">
                      irtaza.madad@iwizsols.com
                    </p>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Office Address
                    </p>
                    <p className="text-sm font-extrabold text-gray-900">
                      Hasan Chowk, Mureer, Murree Rd, Chamanzar Colony,
                      Rawalpindi, 46000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT (Span 8) --- */}
          <div className="lg:col-span-8">
            {/* Main Featured Image */}
            <div className="relative w-[700px] h-[300px] md:h-[420px] mb-8 overflow-hidden  rounded-tl-[60px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[30px] lg:rounded-tr-[5px] lg:rounded-bl-[5px] lg:rounded-br-[30px]">
              <img
                src="/mobile-app-development-1.jpg"
                alt="Data Security Technology"
                //   fill
                className="object-cover"
              />
            </div>

            {/* Main Title & Text */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Mobile & Desktop Application Development{" "}
            </h2>
            <p className="text-gray-500 text-sm md:text-[15px] leading-7 mb-6">
              Deliver engaging digital experiences with our mobile and desktop
              application development services. We build high-performance,
              user-friendly apps for Android, iOS, Windows, and macOS platforms.
              Our solutions enhance productivity and improve customer engagement
              through innovative technology.
            </p>
            <p className="text-gray-500 text-sm md:text-[15px] leading-7 mb-8">
              Our development process covers UI/UX design, responsive
              interfaces, and seamless integration with existing systems. We
              specialize in creating apps that are secure, scalable, and
              tailored to your business needs. Performance, reliability, and
              usability are at the core of our development approach.
            </p>

            {/* Checkmark List */}
            <div className="space-y-4 mb-10">
              {[
                "Custom app development for multiple platforms",
                "UI/UX design and performance optimization",
                "Integration with APIs and enterprise systems",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-100 flex-shrink-0" />
                  <span className="text-sm md:text-[15px] text-gray-600 font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Two Side-by-Side Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative h-[280px] overflow-hidden ">
                <img
                  src="/ui-ux.jpg"
                  alt="Worker Laptop"
                  //    fill
                  className="object-cover object-cover w-[380px] h-[300px] rounded-tl-[60px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[30px] lg:rounded-tr-[5px] lg:rounded-bl-[5px] lg:rounded-br-[30px]"
                />
              </div>
              <div className="relative h-[280px]  overflow-hidden ">
                <img
                  src="/app-dev-services.jpg"
                  alt="Tech Visualization"
                  //    fill
                  className="object-cover object-cover w-[380px] h-[300px] rounded-tl-[60px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[30px] lg:rounded-tr-[5px] lg:rounded-bl-[5px] lg:rounded-br-[30px]"
                />
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-gray-500 text-sm md:text-[15px] leading-7 mb-12">
              Our applications help businesses streamline operations, boost
              efficiency, and deliver superior digital experiences. We leverage
              modern frameworks and agile methodologies to deliver apps on time
              and within budget. Whether for enterprise or consumer use, our
              apps are crafted to drive engagement and results.
            </p>

            {/* FAQ Section */}
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">
              Frequently Asked Questions – Mobile & Desktop Application
              Development{" "}
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className={`
                        w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300
                        ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-[#F9FAFB] text-gray-800 hover:bg-gray-100"
                        }
                      `}
                    >
                      <span className="font-bold text-sm md:text-base">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </button>

                    <div
                      className={`
                        bg-blue-600 text-blue-50 px-6 transition-all duration-300 ease-in-out
                        ${
                          isOpen
                            ? "max-h-96 py-6 opacity-100"
                            : "max-h-0 py-0 opacity-0"
                        }
                      `}
                    >
                      <p className="text-sm leading-7">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
