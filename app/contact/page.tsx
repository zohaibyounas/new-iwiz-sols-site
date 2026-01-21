"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { ChevronRight, ThumbsUp, Users } from "lucide-react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.target as HTMLFormElement;

    const data = {
      user_name: (form.elements.namedItem("user_name") as HTMLInputElement)
        .value,
      user_email: (form.elements.namedItem("user_email") as HTMLInputElement)
        .value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      time: new Date().toLocaleString(),
    };

    console.log("Data being sent to EmailJS:", data);

    emailjs
      .send("service_ep30h7d", "template_l8iw8z6", data, "8HTZqfLnJeapXCmjB")
      .then(
        (response) => {
          console.log("EmailJS response:", response);
          toast.success("Email sent successfully!");
          form.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS error details:", error);
          toast.error("Failed to send email. Try again!");
          setIsSending(false);
        },
      );
  };

  return (
    <div className="font-sans text-slate-600 bg-white">
      <Toaster position="top-right" />

      {/* HEADER SECTION */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <Image
          src="/contactimg.jpg"
          alt="Contact img"
          fill
          priority
          quality={70}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-3 text-lg font-medium">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-5 h-5 text-blue-500" />
            <span className="text-blue-400">Contact Us</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CARD */}
      <div className="container mx-auto px-4 py-20 lg:py-24 max-w-7xl">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-3 block">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
              Let&apos;s Build an Awesome <br /> Project Together
            </h2>
            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-10 max-w-lg">
              Each demo built with Teba will look different. You can customize
              almost anything in the appearance of your website with only a few
              clicks. Each demo built with Teba will look different.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-[#3B82F6] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                  <ThumbsUp className="w-8 h-8 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-1">
                    350+ Projects Done
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    From banking and insurance to wealth management and security
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-[#3B82F6] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                  <Users className="w-8 h-8 text-white stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-1">
                    500+ Happy Clients
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    From banking and insurance to wealth management and security
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="p-4 md:p-8 lg:py-12 lg:pr-12 h-full">
            <div className="bg-[#3B82F6] w-full h-full rounded-tl-[60px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[30px] lg:rounded-tr-[5px] lg:rounded-bl-[5px] lg:rounded-br-[30px] p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Make an Appointment
              </h3>
              <p className="text-blue-100 text-xs md:text-sm mb-8 font-medium">
                Feel free to contact with us, we don&apos;t spam your email
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="First Name *"
                  className="w-full bg-[#F8F9FA] text-gray-800 rounded-md px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-white/50"
                  required
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Here *"
                  className="w-full bg-[#F8F9FA] text-gray-800 rounded-md px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-white/50"
                  required
                />

                <select
                  name="service"
                  className="w-full bg-[#F8F9FA] text-gray-500 rounded-md px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select Service *</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Consulting">Consulting</option>
                </select>

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your Comment *"
                  className="w-full bg-[#F8F9FA] text-gray-800 rounded-md px-5 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  required
                ></textarea>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-[#1A1A1A] hover:bg-black text-white text-sm font-bold py-4 px-8 rounded shadow-lg transition-colors disabled:opacity-50"
                  >
                    {isSending ? "Sending..." : "Submit Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
