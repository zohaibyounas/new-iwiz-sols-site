"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, ChevronRight } from "lucide-react";
import WhyUs from "../../components/WhyUs";
import TeamMember from "../../components/TeamMember";
import AboutTestimonial from "../../components/AboutTestimonial";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Head from "next/head";

export default function AboutContent() {
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
    []
  );
  return (
    <>
      <Head>
        <title>About Us - IWIZ Solutions</title>
        <meta
          name="description"
          content="Learn about IWIZ Solutions, our expert team, and how we provide end-to-end software and hardware solutions for your business."
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* 
        HERO / PAGE HEADER SECTION 
        - Height reduced to h-[400px] for a standard page header feel
        - Content centered
        - Text changed to "About Us" with Breadcrumb
      */}
        <section
          className="relative h-[600px] flex items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://www.inflexion.com/media/2ylj5ili/jason-goodman-oalh2mojuuk-unsplash.jpg?width=1730&height=794&v=133845406422870000&format=webp')",
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
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              About Us
            </h1>

            {/* Breadcrumb: Home > About Us */}
            <div className="flex items-center justify-center gap-3 text-lg font-medium">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>

              <ChevronRight className="w-5 h-5 text-blue-500" />

              <span className="text-blue-400">About Us</span>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white overflow-hidden lg">
          <div className="container mx-auto px-4 md:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center mx-12">
              {/* Left Column - Text with Icons */}
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[#028ADA] font-medium text-sm uppercase tracking-wider">
                      About Your Company
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-black mt-2">
                      Everything You Need to Know
                    </h2>
                  </div>
                </div>

                <div className="space-y-6 mt-6">
                  <p className="text-slate-600 text-base md:text-base leading-relaxed max-w-2xl">
                    At IWIZ Solutions, we&apos;re a team of experts dedicated to
                    solving your toughest challenges, from production issues to
                    team struggles, and product design. We offer tailored
                    end-to-end software and hardware solutions, taking full
                    responsibility for your project&apos;s success. With us,
                    you&apos;re not just getting a service provider—you&apos;re
                    gaining a committed partner.
                  </p>
                  <p className="text-slate-600 text-base md:text-base leading-relaxed max-w-2xl">
                    In just one and a half years, IWIZ Solutions has grown from
                    a small team of 4 to a dynamic company with over 30 skilled
                    professionals. We&apos;ve completed over 100 projects,
                    dedicating more than 50,000 hours to delivering exceptional
                    services.
                  </p>
                  <p className="text-slate-600 text-base md:text-base leading-relaxed max-w-2xl">
                    Our expertise spans both software and hardware, enabling us
                    to provide comprehensive solutions for your unique needs. We
                    offer a free 30-minute support call to help you tackle your
                    challenges and get on the right path.
                  </p>

                  {/* Calendly Booking Button */}
                  <div className="">
                    <a
                      href="https://calendly.com/irtaza-madad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-tl-xl rounded-br-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 4.238V5H4v2.238l8 4.882 8-4.882zM4 11.762V19h16v-7.238l-8 4.882-8-4.882z" />
                      </svg>
                      Book a Free 30-Minute Consultation
                    </a>
                    <p className="text-slate-500 text-sm mt-2">
                      Schedule a call with Irtaza Madad to discuss your project
                      needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - US Image */}
              <div className="flex flex-col justify-center items-center lg:mb-32">
                <div className="relative w-full max-w-xl mx-auto ">
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
        <WhyUs />
        <TeamMember />
        <AboutTestimonial />
      </div>
    </>
  );
}
