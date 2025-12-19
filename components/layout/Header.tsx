"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, Search } from "lucide-react";
import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing Plan", href: "/pricing" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="hidden md:flex justify-between items-center bg-white border-b px-6 h-10 text-sm text-slate-700">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> +92 314 5372506
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" /> irtaza.madad@iwizsols.com
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> eEarn Innovation hub,Chamanzar
            Colony,Rawalpindi,4600
          </span>
        </div>

        <div className="flex gap-3">
          <Link
            href="https://www.facebook.com/profile.php?id=61551482918436&_rdc=1&_rdr#"
            target="_blank"
            className="w-7 h-7 flex items-center justify-center rounded-full border text-slate-600 hover:text-blue-600 hover:border-blue-600 transition"
          >
            <FaFacebookF size={12} />
          </Link>

          <Link
            href="https://x.com/IWIZSOLUTI8328"
            target="_blank"
            className="w-7 h-7 flex items-center justify-center rounded-full border text-slate-600 hover:text-black hover:border-black transition"
          >
            <FaXTwitter size={12} />
          </Link>

          <Link
            href="https://www.linkedin.com/company/iwiz-solutions/"
            target="_blank"
            className="w-7 h-7 flex items-center justify-center rounded-full border text-slate-600 hover:text-blue-700 hover:border-blue-700 transition"
          >
            <FaLinkedinIn size={12} />
          </Link>

          <Link
            href="https://www.instagram.com/iwizsol/"
            target="_blank"
            className="w-7 h-7 flex items-center justify-center rounded-full border text-slate-600 hover:text-pink-600 hover:border-pink-600 transition"
          >
            <FaInstagram size={12} />
          </Link>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white">
        <div className="flex items-center justify-between max-w-7xl lg:max-w-[130rem] h-25 mx-1">
          {/* LOGO WITH CURVED BLACK BACKGROUND */}
          <Link href="/" className="relative">
            <div
              className="h-[66px] w-[260px]   flex items-center pl-6 bg-no-repeat bg-cover bg-center  "
              style={{ backgroundImage: "url('/bg.png')" }}
            >
              <Image
                src="/logo5.png"
                alt="IWIZ Solutions"
                width={160}
                height={40}
                //  fill
                priority
                className="object-contain mb-3 "
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-800 font-medium text-sm hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* SEARCH + CONTACT BUTTON */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Button */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full border text-slate-700 hover:bg-slate-100 transition">
              <Search size={18} />
            </button>

            {/* Contact Us Button - Custom Rounded Corners */}
            <Link
              href="/contact"
              className="px-8 py-3 rounded-tl-xl rounded-br-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Contact us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white border-t px-4 py-6 space-y-4 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-slate-800 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block text-center bg-blue-600 text-white py-2 rounded-full"
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
