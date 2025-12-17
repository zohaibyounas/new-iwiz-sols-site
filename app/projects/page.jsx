import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Our Projects",
  description: "Check out our latest case studies and projects.",
};

const projects = [
  {
    id: 1,
    category: "Development, Marketing",
    title: "Marketing Agency Website",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "UI/UX Design",
    title: "Social Media App",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Web Development",
    title: "E-Commerce Platform",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Software",
    title: "SaaS Dashboard",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Finance",
    title: "Crypto Wallet App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Reusing for placeholder similarity to screenshot
  },
  {
    id: 6,
    category: "Consulting",
    title: "Business Analysis",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Branding",
    title: "Creative Studio",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "Mobile App",
    title: "Fitness Tracker",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    category: "Development",
    title: "Tech Blog",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <div className="font-sans text-gray-700 bg-white">
      {/* ========================
          1. HEADER SECTION 
         ======================== */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Projects</h1>

          {/* Breadcrumb: Home > About Us */}
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>

            <ChevronRight className="w-5 h-5 text-blue-500" />

            <span className="text-blue-400">Projects</span>
          </div>
        </div>
      </section>

      {/* ========================
          2. PROJECTS GRID 
         ======================== */}
      <div className="container mx-auto px-4 py-20 lg:py-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative w-full h-[450px] rounded-[40px] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                //   fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay on Hover (Optional, for better text contrast if needed) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

              {/* 
                 HOVER CARD CONTENT 
                 (Visible on hover, positioned at bottom)
              */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                {/* Floating Blue Arrow Button (Sits on top border of white card) */}
                <div className="absolute -top-6 right-8 z-20">
                  <button className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* White Info Box */}
                <div className="bg-white rounded-[20px] p-6 pt-8 shadow-xl relative">
                  <h3 className="text-lg font-extrabold text-[#1A1A1A] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================
            3. PAGINATION 
           ======================== */}
        <div className="flex items-center justify-center gap-3">
          {/* Active Page (1) */}
          <button className="w-12 h-12 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors">
            1
          </button>

          {/* Inactive Page (2) */}
          <button className="w-12 h-12 rounded-lg bg-[#F3F4F6] text-gray-600 font-bold flex items-center justify-center hover:bg-gray-200 transition-colors">
            2
          </button>

          {/* Inactive Page (3) */}
          <button className="w-12 h-12 rounded-lg bg-[#F3F4F6] text-gray-600 font-bold flex items-center justify-center hover:bg-gray-200 transition-colors">
            3
          </button>

          {/* Next Button (>) */}
          <button className="w-12 h-12 rounded-lg bg-[#F3F4F6] text-gray-600 font-bold flex items-center justify-center hover:bg-gray-200 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
