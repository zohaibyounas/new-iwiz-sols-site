"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

// Component Imports
import HomeService from "../components/Homeservices";
import OurProcess from "../components/OurProcess";
import OurProject from "../components/OurProject";
import AppointmentHero from "../components/AppointmentHero";
import Testimonial from "../components/Testimonial";
import BlogsHero from "../components/BlogsHero";

export default function Home() {
  const [init, setInit] = useState(false);

  // Initialize the particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Configuration for the particles
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
    [],
  );

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/herobg.jpg"
          alt="Hero Background"
          fill
          priority
          quality={70}
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent z-0"></div>

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

        <div className="container mx-auto px-4 md:px-1 relative z-10">
          <div className="max-w-3xl space-y-6 lg:ml-10 xl:ml-20">
            <span className="inline-block text-sm font-semibold tracking-widest text-blue-400 uppercase">
              Best IT Company
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Powering Businesses with <br />
              Smart IT Products & <br />
              Solutions
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
              We specialize in smart IT products, embedded system solutions, and
              scalable technologies that help businesses innovate, optimize
              operations, and grow with confidence.”
            </p>

            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-tl-xl rounded-br-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Let&rsquo;s Talk With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Feature/Service Highlight */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left Column - Text with Icons */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[#028ADA] font-medium text-sm uppercase tracking-wider">
                    About Your Company
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black mt-2">
                    We Execute Ideas From Start to Finish
                  </h2>
                </div>

                {/* New Hero Image */}
              </div>

              <div className="space-y-6 mt-6">
                {/* Mission */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                  <div className="flex-shrink-0">
                    <Image
                      src="/homeicon.png"
                      alt="Mission Icon"
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-black mb-2">
                      Our Mission
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      Deliver smart IT products and scalable technology
                      solutions empowering businesses across Middle East and
                      worldwide.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                  <div className="flex-shrink-0">
                    <Image
                      src="/homeicon1.png"
                      alt="Vision Icon"
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-black mb-2">
                      Our Vision
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      To become a trusted IT products partner driving
                      innovation, digital transformation, and sustainable growth
                      worldwide.
                    </p>
                  </div>
                </div>

                {/* Awards */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all">
                  <div className="flex-shrink-0">
                    <Image
                      src="/homeicon2.png"
                      alt="Awards Icon"
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-black mb-2">
                      Our Awards
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      Our IT products stand as awards, successfully used by 100+
                      customers across different countries worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - US Image */}
            <div className="flex flex-col justify-center items-center">
              <div className="relative w-full max-w-xl mx-auto">
                <img
                  src="/newhero.png"
                  alt="Company Icon"
                  className="w-full h-auto object-contain rounded-2xl shadow-lg"
                />
              </div>
              <p className="text-slate-600 text-base md:text-lg mt-8 leading-relaxed text-center max-w-2xl">
                Every successful deployment and satisfied customer represents
                our commitment to quality, innovation, and delivering reliable
                IT products worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Components */}
      <HomeService />
      <OurProcess />
      <OurProject />
      <AppointmentHero />
      <Testimonial />
      <BlogsHero />
    </div>
  );
}
