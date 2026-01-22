import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Search,
  Calendar,
  Folder,
  MessageSquare,
  Quote,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Reply,
  User,
} from "lucide-react";

export const metadata = {
  title: "Benefits of Retail Automation for Modern Businesses | IWIZ Solutions",
  description:
    "Learn how retail automation improves efficiency, customer experience, inventory management, and business scalability.",
};

export default function BlogDetailsPage() {
  return (
    <div className="font-sans text-gray-600 bg-white">
      {/* ========================
          1. HEADER SECTION 
         ======================== */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/Retail-Automation-02.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/70"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Blogs Details
          </h1>

          {/* Breadcrumb: Home > About Us */}
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Blogs
            </Link>

            <ChevronRight className="w-5 h-5 text-blue-500" />

            <span className="text-blue-400">Blogs Details</span>
          </div>
        </div>
      </section>

      {/* ========================
          2. MAIN CONTENT 
         ======================== */}
      <div className="container mx-auto px-4 py-20 lg:py-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:mx-24">
          {/* --- LEFT COLUMN: ARTICLE (Span 8) --- */}
          <div className="lg:col-span-8">
            {/* Featured Image */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-[30px] overflow-hidden mb-8">
              <img
                src="/Retail-Automation-02.webp"
                alt="Typing on laptop"
                // fill
                className="object-cover"
              />
            </div>

            {/* Meta Data */}
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>30 Dec 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Folder className="w-4 h-4 text-blue-600" />
                <span>Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>3 Comments</span>
              </div>
            </div>

            {/* Main Text Content */}
            <h1 className="text-5xl md:text-5xl font-extrabold mb-6 text-black">
              Benefits of retail automation for modern businesses{" "}
            </h1>

            <div className="space-y-6 text-[15px] leading-relaxed mb-10">
              <p>
                Retail automation is transforming how businesses operate. From
                inventory management to checkout processes, automation
                streamlines operations. Modern retailers gain efficiency,
                accuracy, and cost savings.
              </p>
              <p>
                Automated inventory tracking reduces stockouts and overstock
                situations. Point-of-sale systems integrated with AI analytics
                provide real-time insights into customer behavior. Self-checkout
                and smart kiosks enhance the shopping experience while reducing
                wait times.
              </p>
            </div>

            {/* Two Images Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="relative h-[200px] rounded-[20px] overflow-hidden">
                <img
                  src="/ai2.jpg"
                  alt="Team meeting"
                  //   fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] rounded-[20px] overflow-hidden">
                <img
                  src="/blog8.jpeG"
                  alt="Consultation"
                  //   fill
                  className="object-cover h-[200px] "
                />
              </div>
            </div>

            <p className="text-[15px] leading-relaxed mb-10">
              Data-driven automation enables personalized marketing and loyalty
              programs. Predictive analytics help retailers forecast demand and
              optimize pricing strategies. Employees are freed from repetitive
              tasks to focus on higher-value activities. Automation ensures
              consistent operations, reduces human error, and increases
              profitability.
            </p>

            {/* Blockquote */}
            <div className="bg-[#F3F5F7] p-8 md:p-10 rounded-[20px] mb-10 flex gap-4 md:gap-6 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm flex-shrink-0">
                <Quote className="w-6 h-6 text-blue-600 fill-blue-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900 italic leading-relaxed">
                  &quot;Retail automation empowers businesses to work smarter,
                  not harder&quot;
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[15px] leading-relaxed mb-12">
              <p>
                From small stores to large chains, automation boosts efficiency
                and scalability. It ensures faster service and a more satisfying
                customer experience
              </p>
              <p>
                By embracing retail automation, businesses improve operational
                efficiency and reduce costs. Enhanced analytics and smarter
                workflows drive growth and innovation. Modern retailers
                leveraging automation gain a competitive edge in a fast-paced
                market.
              </p>
            </div>

            {/* Tags & Share Footer */}
            {/* <div className="border-t border-b border-gray-100 py-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-900">Tags:</span>
                <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-medium text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">
                  Security
                </span>
                <span className="bg-blue-600 border border-blue-600 px-4 py-1.5 rounded-full text-xs font-medium text-white cursor-pointer">
                  UI/UX Design
                </span>
                <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-medium text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">
                  Digital
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">Share:</span>
                <div className="flex gap-3 text-gray-400">
                  <Facebook className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                  <Twitter className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                  <Linkedin className="w-4 h-4 hover:text-blue-700 cursor-pointer transition-colors" />
                  <Youtube className="w-4 h-4 hover:text-red-600 cursor-pointer transition-colors" />
                </div>
              </div>
            </div> */}

            {/* Comments Section */}
            {/* <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                2 Comments
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4 md:gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                      alt="Ralph Edwards"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          Ralph Edwards
                        </h4>
                        <span className="text-xs text-gray-400 font-medium">
                          Jun 28, 2024
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Neque porro est qui dolorem ipsum quia quand inventore
                      veritatis et quasi architecto var sed efficitur turpis
                      gilla sed sit amet finibus eros. Lorem ipsum nt simply
                      dummy.
                    </p>
                    <button className="flex items-center gap-1 text-blue-600 text-xs font-bold hover:underline">
                      <Reply className="w-3 h-3" /> Reply
                    </button>
                  </div>
                </div>

              
                <div className="flex gap-4 md:gap-6 md:ml-12 border-t border-gray-50 pt-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
                      alt="Leslie Alexander"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          Leslie Alexander
                        </h4>
                        <span className="text-xs text-gray-400 font-medium">
                          Jan 28, 2024
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Neque porro est qui dolorem ipsum quia quand inventore
                      veritatis et quasi architecto var sed efficitur turpis
                      gilla sed sit amet finibus eros.
                    </p>
                    <button className="flex items-center gap-1 text-blue-600 text-xs font-bold hover:underline">
                      <Reply className="w-3 h-3" /> Reply
                    </button>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Leave a Comment Form */}
            {/* <div className="bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Leave A Comment
              </h3>
              <p className="text-xs text-gray-500 mb-8">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[#F8F9FA] rounded px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-blue-600"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-[#F8F9FA] rounded px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Select subject"
                  className="w-full bg-[#F8F9FA] rounded px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-blue-600"
                />
                <textarea
                  rows={5}
                  placeholder="Type your message"
                  className="w-full bg-[#F8F9FA] rounded px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-blue-600 resize-none"
                ></textarea>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded shadow-lg transition-colors text-sm">
                  Post Comment
                </button>
              </form>
            </div> */}
          </div>

          {/* --- RIGHT COLUMN: SIDEBAR (Span 4) --- */}
          <div className="lg:col-span-4 space-y-10">
            {/* Search Widget */}
            <div className="bg-[#F8F9FA] p-8 rounded-[20px]">
              <h4 className="font-bold text-gray-900 mb-6 text-lg">
                Search Here
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white rounded py-3.5 px-5 pr-12 text-sm outline-none shadow-sm text-gray-600"
                />
                <button className="absolute right-1 top-1 bottom-1 w-10 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-[#F8F9FA] p-8 rounded-[20px]">
              <h4 className="font-bold text-gray-900 mb-6 text-lg">
                Services{" "}
              </h4>
              <ul className="space-y-3">
                <Link href="/services/Product-Design-&-Prototyping">
                  <li className="flex justify-between items-center bg-white p-3 rounded text-sm text-gray-600 hover:bg-white/80 cursor-pointer">
                    <span>Product Design & Prototyping</span>
                    {/* <span>(03)</span> */}
                  </li>
                </Link>

                <Link href="/services/Embedded-Systems-Security">
                  <li className="flex justify-between items-center bg-blue-600 text-white p-3 rounded text-sm shadow-md cursor-pointer">
                    <span>Embedded Systems Security</span>
                    {/* <span>(07)</span> */}
                  </li>
                </Link>

                <Link href="/services/IoT-Solutions">
                  <li className="flex justify-between items-center bg-white p-3 rounded text-sm text-gray-600 hover:bg-white/80 cursor-pointer">
                    <span>IoT Solutions</span>
                    {/* <span>(05)</span> */}
                  </li>
                </Link>

                <Link href="/services/Mobile-&-Desktop-Application-Development">
                  <li className="flex justify-between items-center bg-white p-3 rounded text-sm text-gray-600 hover:bg-white/80 cursor-pointer">
                    <span>Mobile & Desktop Application Development</span>
                    {/* <span>(02)</span> */}
                  </li>
                </Link>

                <Link href="/services/Cloud-Software-Solutions">
                  <li className="flex justify-between items-center bg-white p-3 rounded text-sm text-gray-600 hover:bg-white/80 cursor-pointer">
                    <span>Cloud Software Solutions</span>
                    {/* <span>(04)</span> */}
                  </li>
                </Link>

                <Link href="/services/POS-&-Retail-Automation">
                  <li className="flex justify-between items-center bg-white p-3 rounded text-sm text-gray-600 hover:bg-white/80 cursor-pointer">
                    <span>POS & Retail Automation</span>
                    {/* <span>(04)</span> */}
                  </li>
                </Link>

                <Link href="/services/Maintenance-&-Support">
                  <li className="flex justify-between items-center bg-white p-3 rounded text-sm text-gray-600 hover:bg-white/80 cursor-pointer">
                    <span>Maintenance & Support</span>
                    {/* <span>(04)</span> */}
                  </li>
                </Link>
              </ul>
            </div>

            {/* Recent Post Widget */}
            <div className="bg-[#F8F9FA] p-8 rounded-[20px]">
              <h4 className="font-bold text-gray-900 mb-6 text-lg">
                Recent Post
              </h4>
              <div className="space-y-6">
                {/* Post 1 */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-16 h-16 bg-gray-300 rounded overflow-hidden relative flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                      alt="Thumb"
                      // fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link href="/blog/from-idea-to-prototype-step-by-step-product-development-process">
                      <h5 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors mb-1">
                        From idea to prototype: step-by-step product development
                        process{" "}
                      </h5>
                    </Link>
                    <span className="text-[11px] text-gray-400">
                      30 Dec 2025
                    </span>
                  </div>
                </div>
                {/* Post 2 */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-16 h-16 bg-gray-300 rounded overflow-hidden relative flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                      alt="Thumb"
                      //  fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link href="/blog/best-practices-for-securing-firmware-and-hardware">
                      <h5 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors mb-1">
                        Best practices for securing firmware and hardware.
                      </h5>
                    </Link>
                    <span className="text-[11px] text-gray-400">
                      30 Dec 2025{" "}
                    </span>
                  </div>
                </div>
                {/* Post 3 */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-16 h-16 bg-gray-300 rounded overflow-hidden relative flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                      alt="Thumb"
                      //  fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link href="/blog/embedded-security-for-automotive-medical-and-industrial-devices">
                      <h5 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors mb-1">
                        Embedded security for automotive, medical, and
                        industrial devices.
                      </h5>
                    </Link>
                    <span className="text-[11px] text-gray-400">
                      30 Dec 2025{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tag Cloud Widget */}
            {/* <div className="bg-[#F8F9FA] p-8 rounded-[20px]">
              <h4 className="font-bold text-gray-900 mb-6 text-lg">
                Tag Cloud
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[11px] font-medium text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer transition-colors">
                  Brand
                </span>
                <span className="bg-blue-600 border border-blue-600 px-3 py-1.5 rounded-full text-[11px] font-medium text-white cursor-pointer">
                  Business
                </span>
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[11px] font-medium text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer transition-colors">
                  Development
                </span>
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[11px] font-medium text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer transition-colors">
                  Marketing
                </span>
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[11px] font-medium text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer transition-colors">
                  SaaS
                </span>
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[11px] font-medium text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer transition-colors">
                  Technology
                </span>
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[11px] font-medium text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer transition-colors">
                  Startup
                </span>
                <span className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[11px] font-medium text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer transition-colors">
                  Services
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
