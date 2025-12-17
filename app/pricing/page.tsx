"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, Plus, Minus } from "lucide-react";

export default function PricingPage() {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pricingPlans = [
    {
      title: "Basic plan",
      price: "49",
      features: [
        "Advanced Analytics",
        "Unlimited Projects",
        "Priority Support",
        "Customizable Branding",
        "All API Access",
      ],
      active: false,
    },
    {
      title: "Standard plan",
      price: "79",
      features: [
        "Advanced Analytics",
        "Unlimited Projects",
        "Priority Support",
        "Customizable Branding",
        "All API Access",
      ],
      active: true, // Highlights the middle card
    },
    {
      title: "Enterprise",
      price: "99",
      features: [
        "Advanced Analytics",
        "Unlimited Projects",
        "Priority Support",
        "Customizable Branding",
        "All API Access",
      ],
      active: false,
    },
  ];

  const faqs = [
    {
      question: "Q1. What Is The Design Process For Branding?",
      answer:
        "If you ask our clients what it’s like working 36, they’ll about how much we care about their success. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Q2. How Much Does Logo Design Services Cost?",
      answer:
        "The cost depends on the complexity and requirements of the project. Contact us for a custom quote tailored to your needs.",
    },
    {
      question: "Q3. How Long Will It Take To Complete My Project?",
      answer:
        "Typically projects take between 2-4 weeks depending on the scope. We work efficiently to deliver high-quality results on time.",
    },
  ];

  return (
    <div className="font-sans text-slate-600 bg-white">
      {/* ========================
          1. HEADER SECTION 
         ======================== */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Pricing Plan
          </h1>

          {/* Breadcrumb: Home > About Us */}
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>

            <ChevronRight className="w-5 h-5 text-blue-500" />

            <span className="text-blue-400">Pricing Plan</span>
          </div>
        </div>
      </section>

      {/* ========================
          2. PRICING CARDS 
         ======================== */}
      <div className="container mx-auto px-4 py-20 lg:py-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative p-8 md:p-10 rounded-[30px] transition-transform duration-300 hover:scale-[1.02] flex flex-col
                ${
                  plan.active
                    ? "bg-[#3B82F6] text-white shadow-2xl scale-[1.02] lg:scale-105 z-10"
                    : "bg-[#F8F9FA] text-gray-900"
                }
              `}
            >
              {/* Popular Badge for Active Card */}
              {plan.active && (
                <div className="absolute top-8 right-8 bg-white text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  Popular
                </div>
              )}

              {/* Title & Price */}
              <div className="mb-8">
                <h3
                  className={`text-sm font-bold mb-4 ${
                    plan.active ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {plan.title}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    ${plan.price}
                  </span>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      plan.active ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    /month
                  </span>
                </div>
              </div>

              {/* Divider Line */}
              <div
                className={`w-full h-px mb-8 ${
                  plan.active ? "bg-blue-400" : "bg-gray-200"
                }`}
              />

              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      className={`w-4 h-4 ${
                        plan.active ? "text-white" : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        plan.active ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`
                  w-full py-4 px-6 rounded-xl font-bold text-sm transition-colors shadow-lg
                  ${
                    plan.active
                      ? "bg-white text-[#1A1A1A] hover:bg-gray-100"
                      : "bg-[#1A1A1A] text-white hover:bg-black"
                  }
                `}
              >
                Select This Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ========================
          3. FAQ SECTION 
         ======================== */}
      <div className="bg-[#F8F9FA] w-full py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* --- LEFT: FAQ ACCORDION --- */}
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-2 block">
                Question
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4 leading-tight">
                Frequently asked asked <br /> question
              </h2>
              <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elita floral
                psum dolor sit amet,consectetur amet consecteture.
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className="overflow-hidden rounded-xl">
                      <button
                        onClick={() => toggleFaq(index)}
                        className={`
                          w-full flex items-center justify-between px-6 py-4 text-left transition-all duration-300
                          ${
                            isOpen
                              ? "bg-[#3B82F6] text-white shadow-md"
                              : "bg-white text-[#1A1A1A] hover:bg-gray-50"
                          }
                        `}
                      >
                        <span className="font-bold text-sm md:text-[15px] pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <Minus className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 flex-shrink-0" />
                        )}
                      </button>

                      <div
                        className={`
                           transition-all duration-300 ease-in-out bg-[#F8F9FA] px-6
                           ${
                             isOpen
                               ? "max-h-40 py-4 opacity-100"
                               : "max-h-0 py-0 opacity-0"
                           }
                        `}
                      >
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* --- RIGHT: IMAGE --- */}
            <div className="relative h-[400px] md:h-[300px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Office Team"
                //  fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
