import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, ChevronRight } from "lucide-react";
import WhyUs from "../../components/WhyUs";
import TeamMember from "../../components/TeamMember";
import AboutTestimonial from "../../components/AboutTestimonial";
export default function About() {
  return (
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

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Us</h1>

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

      {/* Feature/Service Highlight (Kept exactly as requested) */}
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
      <WhyUs />
      <TeamMember />
      <AboutTestimonial />
    </div>
  );
}
