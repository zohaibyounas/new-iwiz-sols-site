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
    category: "Business solution",
    date: "27 May, 2024",
    title: "Boost your startup business with our digital agency",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Business solution",
    date: "27 May, 2024",
    title: "Boost your Startup Business With our Digital Agency",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Business solution",
    date: "27 May, 2024",
    title: "Data Backup and Recovery Best Practices Small",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Business solution",
    date: "27 May, 2024",
    title: "Maximizing Productivity with IT Support Service",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Business solution",
    date: "27 May, 2024",
    title: "Leaves Should Be Shredded Before Used As Mulch",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Business solution",
    date: "27 May, 2024",
    title: "It's Time To Design Your Dream Outdoor Living Space",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Business solution",
    date: "27 May, 2024",
    title: "Distinctively revolutionary for chang the Seamlessly",
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "Business solution",
    date: "27 May, 2024",
    title: "Distinctively revolutionary for chang the Seamlessly",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    category: "Business solution",
    date: "27 May, 2024",
    title: "The website of your dream can be Built easily",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="font-sans text-gray-700 bg-white">
      {/* ========================
          1. PAGE HEADER SECTION 
         ======================== */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#F8F9FA] rounded-[30px] overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative w-full h-[240px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
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

                {/* Read More Link */}
                <div className="mt-auto">
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-blue-500 text-sm font-bold hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
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
