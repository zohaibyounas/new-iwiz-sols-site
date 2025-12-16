import Link from "next/link";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import HomeService from "../components/Homeservices";
import OurProcess from "../components/OurProcess";
import OurProject from "../components/OurProject";
import AppointmentHero from "../components/AppointmentHero";
import Testimonial from "../components/Testimonial";
import BlogsHero from "../components/BlogsHero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-sm font-semibold tracking-widest text-blue-400 uppercase">
              Best IT Company
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Best IT Solution <br />
              Agency For Your <br />
              Business
            </h1>

            <p className="text-slate-300 max-w-xl">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches bring table survival.
            </p>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-tl-xl rounded-br-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all "
            >
              Let’s Talk With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Feature/Service Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Column - Text with Icons */}
            <div className="space-y-6">
              <span className="text-[#028ADA] font-medium text-sm uppercase">
                About Your Company
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
                We Execute Ideas From <br /> Start to Finish
              </h2>

              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4">
                  <img
                    src="/icon.png"
                    alt="Mission Icon"
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Our Mission</h3>
                    <p className="text-slate-600 text-sm">
                      Our mission is to push boundaries, engage audiences, and
                      drive innovation through.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src="/icon1.png"
                    alt="Vision Icon"
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Our Vision</h3>
                    <p className="text-slate-600 text-sm">
                      Our vision is to inspire creativity and deliver remarkable
                      digital experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src="/icon2.png"
                    alt="Awards Icon"
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="font-bold text-lg">Our Awards</h3>
                    <p className="text-slate-600 text-sm">
                      Recognized for excellence and innovation across multiple
                      domains.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - US Image */}
            <div className="flex flex-col justify-center">
              <img
                src="/us.png"
                alt="Company Icon"
                className="w-3/2 h-auto object-contain"
              />
              <p className="text-slate-600 text-sm mt-3">
                Repellendus autem ruibusdam et aut officiis debitis aut re
                necessitatibus saepe eveniet ut et repudianda sint et molestiae
                non recusandae.{" "}
              </p>
            </div>

            {/* Right Column - Why Us Image */}
            <div className="flex justify-center">
              <img
                src="/whyus.png"
                alt="Why Us"
                className="rounded-2xl w-full object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <HomeService />
      <OurProcess />
      <OurProject />
      <AppointmentHero />
      <Testimonial />
      <BlogsHero />
    </div>
  );
}
