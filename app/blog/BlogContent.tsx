import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Blog",
  description: "Read our latest news and business solutions.",
};

const blogPosts = [
  {
    id: 1,
    slug: "how-rapid-prototyping-reduces-development-cost-and-risk",
    category: "Technology",
    date: "30 Dec, 2025",
    title: "How Rapid Prototyping Reduces Development Cost and Risk",
    image: "/rapid-prototyping.webp",
  },
  {
    id: 2,
    slug: "from-idea-to-prototype-step-by-step-product-development-process",
    category: "Product Development",
    date: "30 Dec, 2025",
    title: "From Idea to Prototype: Step-by-Step Product Development Process",
    image: "/risk.webp",
  },
  {
    id: 3,
    slug: "best-practices-for-securing-firmware-and-hardware",
    category: "Cyber Security",
    date: "30 Dec, 2025",
    title: "Best Practices for Securing Firmware and Hardware",
    image: "/best-practices.webp",
  },
  {
    id: 4,
    slug: "embedded-security-for-automotive-medical-and-industrial-devices",
    category: "Embedded Systems",
    date: "30 Dec, 2025",
    title: "Embedded Security for Automotive, Medical, and Industrial Devices",
    image: "/embedded.jpg",
  },
  {
    id: 5,
    slug: "iot-security-challenges-and-best-practices",
    category: "IoT",
    date: "30 Dec, 2025",
    title: "IoT Security Challenges and Best Practices",
    image: "/blog5.jpg",
  },
  {
    id: 6,
    slug: "cloud-plus-iot-building-scalable-connected-systems",
    category: "Cloud & IoT",
    date: "30 Dec, 2025",
    title: "Cloud + IoT: Building Scalable Connected Systems",
    image: "/blog6.webp",
  },
  {
    id: 7,
    slug: "ui-ux-trends-in-mobile-and-desktop-applications",
    category: "UI/UX Design",
    date: "30 Dec, 2025",
    title: "UI/UX Trends in Mobile and Desktop Applications",
    image: "/Top-UI-UX-Design-Trends-in-2025-To-Follow-1.jpg",
  },
  {
    id: 8,
    slug: "benefits-of-retail-automation-for-modern-businesses",
    category: "Retail Tech",
    date: "30 Dec, 2025",
    title: "Benefits of Retail Automation for Modern Businesses",
    image: "/Retail-Automation-02.webp",
  },
  {
    id: 9,
    slug: "sla-driven-support-what-businesses-should-expect",
    category: "Business Support",
    date: "30 Dec, 2025",
    title: "SLA-Driven Support: What Businesses Should Expect",
    image: "/blog9.png",
  },
];

export default function BlogContent() {
  return (
    <div className="font-sans text-gray-700 bg-white">
      {/* ========================
          1. PAGE HEADER SECTION 
         ======================== */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <Image
          src="/teamwork-making-an-online-blog-scaled.jpg"
          alt="Projects Hero Background"
          fill
          priority
          quality={70}
          className="object-cover"
        />

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Blogs</h1>

          {/* Breadcrumb: Home > About Us */}
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>

            <ChevronRight className="w-5 h-5 text-blue-500" />

            <span className="text-blue-400">Blogs</span>
          </div>
        </div>
      </section>
      {/* ========================
          2. BLOG GRID SECTION 
         ======================== */}
      <div className="container mx-auto px-4 py-20 lg:py-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:mx-12">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-[#F8F9FA] rounded-[30px] overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative w-full h-[240px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col h-full">
                {/* Meta Data */}
                <div className="flex items-center gap-2 text-xs md:text-[13px] text-gray-500 font-medium mb-3 uppercase tracking-wide">
                  <span>{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-[#1A1A1A] leading-snug mb-6 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Read More (visual only) */}
                <div className="mt-auto inline-flex items-center gap-1 text-blue-500 text-sm font-bold group-hover:text-blue-700">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ========================
            3. PAGINATION 
           ======================== */}
        <div className="flex items-center justify-center gap-3">
          {/* Active Page (1) */}
          <button className="w-12 h-12 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center shadow-md transition-colors hover:bg-blue-700">
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
