import Link from "next/link";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import HomeService from "../components/Homeservices";
import OurProcess from "../components/OurProcess";
import OurProject from "../components/OurProject";
import AppointmentHero from "../components/AppointmentHero";
import Testimonial from "../components/Testimonial";
import BlogsHero from "../components/BlogsHero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] md:min-h-[90vh] flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-1 relative z-10">
          {/* Added responsive margins and max-width */}
          <div className="max-w-3xl space-y-6 lg:ml-10 xl:ml-20">
            <span className="inline-block text-sm font-semibold tracking-widest text-blue-400 uppercase">
              Best IT Company
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Best IT Solution <br />
              Agency For Your <br />
              Business
            </h1>

            <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches bring table survival.
            </p>

            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-tl-xl rounded-br-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Let’s Talk With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Feature/Service Highlight */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          {/* 
            Grid Responsiveness: 
            - Mobile: 1 Column
            - Tablet: 2 Columns
            - Desktop: 3 Columns
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 items-center">
            {/* Left Column - Text with Icons */}
            <div className="space-y-8 md:space-y-6 lg:pl-14">
              <span className="text-[#028ADA] font-medium text-sm uppercase tracking-wider">
                About Your Company
              </span>

              {/* Fixed font size scaling */}
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-black">
                We Execute Ideas From <br /> Start to Finish
              </h2>

              <div className="space-y-6 mt-6">
                {/* Mission */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/homeicon.png"
                      alt="Mission Icon"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">
                      Our Mission
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Our mission is to push boundaries, engage audiences, and
                      drive innovation through.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/homeicon1.png"
                      alt="Vision Icon"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">
                      Our Vision
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Our vision is to inspire creativity and deliver remarkable
                      digital experiences.
                    </p>
                  </div>
                </div>

                {/* Awards */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/homeicon2.png"
                      alt="Awards Icon"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">
                      Our Awards
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Recognized for excellence and innovation across multiple
                      domains.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - US Image */}
            <div className="flex flex-col justify-center items-center md:items-start order-last md:order-none">
              {/* Changed w-3/2 (invalid) to w-full for responsiveness */}
              <div className="relative w-full max-w-md mx-auto md:max-w-full">
                <img
                  src="/us.png"
                  alt="Company Icon"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-slate-600 text-sm mt-6 leading-relaxed text-center md:text-left">
                Repellendus autem ruibusdam et aut officiis debitis aut re
                necessitatibus saepe eveniet ut et repudianda sint et molestiae
                non recusandae.
              </p>
            </div>

            {/* Right Column - Why Us Image */}
            <div className="flex justify-center h-full">
              <div className="w-full max-w-md mx-auto md:max-w-full h-[200px] md:h-[300px] relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/whyus.png"
                  alt="Why Us"
                  className="w-full h-full lg:h-[300px] object-cover mt-14"
                />
              </div>
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
