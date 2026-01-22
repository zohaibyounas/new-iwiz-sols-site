import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogsHero = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-semibold text-sm tracking-wide uppercase">
              Our Blogs
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Recent Blog & Articles <br className="hidden md:block" />
              About Technology
            </h2>
          </div>
          <Link href="blog">
            <button className="px-8 py-4 rounded-tl-xl rounded-br-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all">
              View All Posts
            </button>
          </Link>
        </div>

        {/* BLOG GRID - Reduced gap from 8 to 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* LARGE FEATURED CARD (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 group cursor-pointer flex flex-col h-full">
            {/* Reduced mb-6 to mb-4 */}
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-[30px] mb-4">
              <Image
                src="/Cloud-IoT-building-scalable-connected-systems.png"
                alt="Business Specialist"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex items-center text-gray-500 text-sm font-medium mb-2">
                <span>Irtaza Madad</span>
                <span className="mx-2">•</span>
                <span>27 May, 2024</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                Cloud IoT building scalable connected systems{" "}
              </h3>
            </div>
          </div>

          {/* SMALL CARD 1 (Middle) */}
          <div className="lg:col-span-1 group cursor-pointer flex flex-col h-full">
            {/* Reduced mb-5 to mb-3 */}
            <div className="relative w-full h-[200px] overflow-hidden rounded-[30px] mb-3">
              <Image
                src="/Benefits-of-retail-automation-for-modern-businesses.png"
                alt="Startup Business Team"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex items-center text-gray-500 text-xs font-medium mb-2">
                <span>Bilal Rasool</span>
                <span className="mx-2">•</span>
                <span>27 May, 2024</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                Benefits of retail automation for modern businesses{" "}
              </h3>
            </div>
          </div>

          {/* SMALL CARD 2 (Right) */}
          <div className="lg:col-span-1 group cursor-pointer flex flex-col h-full">
            {/* Reduced mb-5 to mb-3 */}
            <div className="relative w-full h-[200px] overflow-hidden rounded-[30px] mb-3">
              <Image
                src="/Embedded-security-for-automotive-medical-and-industrial-devices.png"
                alt="Animation in Design"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex items-center text-gray-500 text-xs font-medium mb-2">
                <span>Muhammad Aqib</span>
                <span className="mx-2">•</span>
                <span>27 May, 2024</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                Embedded security for automotive, medical, and industrial
                device{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
