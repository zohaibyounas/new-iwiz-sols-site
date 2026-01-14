"use client";

import React, { useEffect, useMemo, useState } from "react";
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
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine";

export default function ServiceDetailsPage() {
  // State to manage FAQ accordion (Index 0 is open by default as per image)
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const toggleFaq = (index: number) => {
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
      question: "What services are included in your main offerings?",
      answer:
        " Our main services include product design, prototyping, IoT, embedded security, app development, cloud solutions, retail automation, and maintenance.",
    },
    {
      question: "How can your services benefit my business?",
      answer:
        " They help businesses innovate, streamline operations, secure systems, and scale efficiently.",
    },
    {
      question: "Are your services suitable for all industries?",
      answer:
        " Yes, we provide solutions for startups, enterprises, and industries like automotive, healthcare, retail, and IoT.",
    },
    {
      question: " Do you offer end-to-end support for projects?",
      answer:
        " Yes, we handle everything from concept, development, and security to deployment and maintenance.",
    },
    {
      question: "Can services be customized according to business needs?",
      answer:
        " Yes, all services are fully tailored to meet specific business requirements and goals.",
    },
  ];

  const particlesOptions = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 140,
            links: {
              opacity: 1,
            },
          },
        },
      },

      particles: {
        color: { value: "#3b82f6" },
        links: {
          color: "#3b82f6",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          direction: "none", // ✅ now correctly typed
          outModes: {
            default: "bounce",
          },
          speed: 3,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 160,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },

      detectRetina: true,
    }),
    []
  );
  return (
    <div className="font-sans text-slate-600 bg-white">
      {/* ========================
          1. PAGE HEADER SECTION 
         ======================== */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/embedded-system-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
        {/* PARTICLES */}
        {init && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Particles
              id="tsparticles"
              options={particlesOptions}
              className="w-full h-full"
            />
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Services</h1>

          {/* Breadcrumb: Home > About Us */}
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>

            <ChevronRight className="w-5 h-5 text-blue-500" />

            <span className="text-blue-400">Services</span>
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
                // fill
                className="object-cover"
              />
            </div>

            {/* Main Title & Text */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Main Services
            </h2>
            <p className="text-gray-500 text-sm md:text-[15px] leading-7 mb-6">
              we provide comprehensive technology solutions to help businesses
              innovate, secure, and scale efficiently. From product design and
              prototyping to embedded systems security, IoT, mobile and desktop
              applications, cloud software, retail automation, and ongoing
              maintenance, we cover the full spectrum of digital transformation.
              Our expert team ensures every solution is reliable, scalable, and
              tailored to your business needs.
            </p>
            <p className="text-gray-500 text-sm md:text-[15px] leading-7 mb-8">
              We focus on delivering innovative, secure, and efficient solutions
              that drive measurable results. By integrating modern technologies
              with strategic insights, we help businesses reduce costs, enhance
              productivity, and stay ahead of the competition. Our end-to-end
              services are designed to support every stage of your growth
              journey.
            </p>

            {/* Checkmark List */}
            <div className="space-y-4 mb-10">
              {[
                "Product design, prototyping, IoT solutions, and mobile/desktop/cloud application development to bring your ideas to life.",
                "Embedded systems security, POS, and retail automation to safeguard operations and streamline workflows.",
                "Maintenance, technical support, system monitoring, and updates to ensure smooth, uninterrupted business performance.",
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
                  src="/embedded-main.jpg"
                  alt="Worker Laptop"
                  // fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[255px]  overflow-hidden ">
                <img
                  src="/s5.jpg"
                  alt="Tech Visualization"
                  //   fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-gray-500 text-sm md:text-[15px] leading-7 mb-12">
              Partner with us to transform your ideas into practical, secure,
              and future-ready solutions that drive innovation and growth.
            </p>

            {/* FAQ Section */}
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">
              Frequently Asked Questions – Main Services{" "}
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
