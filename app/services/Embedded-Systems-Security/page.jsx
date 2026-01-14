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
      question: "What is embedded systems security?",
      answer:
        " Embedded systems security protects hardware, firmware, and communication from cyber threats and unauthorized access.",
    },
    {
      question: "Why is security important in embedded systems?",
      answer:
        " It prevents data breaches, device manipulation, and system failures in critical applications.",
    },
    {
      question: "What security measures are used in embedded systems?",
      answer:
        "Common measures include secure boot, encryption, authentication, and firmware protection.",
    },
    {
      question: " Which industries require embedded systems security?",
      answer:
        " Automotive, medical, industrial, IoT, and consumer electronics industries require strong embedded security.",
    },
    {
      question: "Can embedded system security be added to existing devices?",
      answer:
        " Yes, security can be enhanced through firmware updates, encryption, and secure communication protocols.",
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
          backgroundImage: "url('/security-img.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Embedded Systems Security
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

            <span className="text-blue-400">Embedded Systems Security</span>
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
            <div className="relative w-full h-[300px] md:h-[420px] mb-8 overflow-hidden ">
              <img
                src="/serviceser.png"
                alt="Data Security Technology"
                className="object-cover"
              />
            </div>

            {/* Main Title & Text */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Data Security
            </h2>
            <p className="text-gray-500 text-sm md:text-[15px] leading-7 mb-6">
              Protect your embedded devices with our robust embedded systems
              security solutions. We specialize in safeguarding firmware,
              hardware, and communication channels from cyber threats and
              vulnerabilities. Our approach ensures secure operation in critical
              environments like automotive, medical, and industrial sectors.
            </p>
            <p className="text-gray-500 text-sm md:text-[15px] leading-7 mb-8">
              Our experts implement advanced encryption, secure boot mechanisms,
              and tamper detection techniques to enhance device security. We
              also provide thorough penetration testing and compliance
              verification to prevent unauthorized access. Security is embedded
              at every layer of your device architecture.
            </p>

            {/* Checkmark List */}
            <div className="space-y-4 mb-10">
              {[
                "Firmware and hardware vulnerability assessments",
                "Secure communication and encryption protocols",
                "Compliance with industry security standards",
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
                  src="/s4.jpeg"
                  alt="Worker Laptop"
                  // fill
                  className="object-cover w-[380px] h-[300px] rounded-tl-[60px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[30px] lg:rounded-tr-[5px] lg:rounded-bl-[5px] lg:rounded-br-[30px]"
                />
              </div>
              <div className="relative h-[280px]  overflow-hidden ">
                <img
                  src="/images.jpg"
                  alt="Tech Visualization"
                  //  fill
                  className="object-cover object-cover w-[380px] h-[300px] rounded-tl-[60px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[30px] lg:rounded-tr-[5px] lg:rounded-bl-[5px] lg:rounded-br-[30px]"
                />
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-gray-500 text-sm md:text-[15px] leading-7 mb-12">
              Embedded systems security is essential for protecting sensitive
              data and maintaining trust in connected devices. Our solutions
              help prevent costly breaches and system failures. We focus on
              delivering scalable security that adapts as your technology
              evolves. Partner with us to build resilient, cyber-secure embedded
              systems.
            </p>

            {/* FAQ Section */}
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">
              Frequently Asked Questions – Embedded Systems Security
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
