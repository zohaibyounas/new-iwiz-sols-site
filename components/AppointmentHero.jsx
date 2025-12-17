"use client";
import React, { useState } from "react";
import { User, Mail, ChevronDown, MessageSquare, Play } from "lucide-react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";

const AppointmentHero = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.target;

    const data = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      service: form.service.value,
      message: form.message.value,
      time: new Date().toLocaleString(),
    };

    console.log("Sending data:", data);

    emailjs
      .send("service_ep30h7d", "template_l8iw8z6", data, "8HTZqfLnJeapXCmjB")
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Appointment request sent successfully!");
          form.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("Email sending failed:", error);
          toast.error("Failed to send appointment request. Please try again!");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="relative w-full min-h-[700px] bg-white">
      <Toaster position="top-right" />

      {/* BACKGROUND IMAGE SECTION */}
      <div className="absolute inset-0 h-[600px] w-full overflow-hidden">
        <div className="relative w-full h-full bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Office Team"
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-20 lg:pt-32 pb-20 gap-10 lg:gap-0">
          {/* LEFT SIDE: Play Button Area */}
          <div className="flex-1 flex justify-center lg:justify-start lg:pl-20">
            <button className="group relative flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-white/30 rounded-full animate-pulse md:w-28 md:h-28"></div>
              <div className="absolute w-20 h-20 border-4 border-white/60 rounded-full md:w-24 md:h-24"></div>
              <div className="relative w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-110 md:w-20 md:h-20">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </button>
          </div>

          {/* RIGHT SIDE: The Form Card */}
          <div className="w-full max-w-[450px] lg:mr-10">
            <div className="bg-white rounded-[30px] shadow-2xl overflow-hidden">
              {/* Form Content Padding */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-2 font-sans">
                    Make an Appointment
                  </h2>
                  <p className="text-xs text-gray-500 mb-8 font-medium">
                    Feel free to contact with us, we don&lsquo;t spam your email
                  </p>

                  {/* Name Input */}
                  <div className="relative group mb-4">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="First Name *"
                      className="w-full bg-[#F3F5F7] text-gray-700 text-sm rounded-lg py-4 px-5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-500 font-medium transition-colors"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email Here *"
                      className="w-full bg-[#F3F5F7] text-gray-700 text-sm rounded-lg py-4 px-5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-500 font-medium transition-colors"
                      required
                    />
                  </div>

                  {/* Select Dropdown */}
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      name="service"
                      className="w-full bg-[#F3F5F7] text-gray-500 text-sm rounded-lg py-4 px-5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100 font-medium appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>
                        Select Service *
                      </option>
                      <option value="Consultation">Consultation</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Support">Support</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Text Area */}
                  <div className="relative mb-4">
                    <div className="absolute top-4 right-0 pr-4 flex pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your Comment *"
                      className="w-full bg-[#F3F5F7] text-gray-700 text-sm rounded-lg py-4 px-5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-500 font-medium resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Form Footer (Blue Section) - Now INSIDE the form */}
                <div className="bg-[#3b82f6] p-4 md:p-2 rounded-br-xl">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-white text-gray-900 text-sm font-bold py-3 px-8 rounded shadow-md hover:bg-gray-50 transition-colors rounded-tl-xl rounded-br-xl ml-6 disabled:opacity-70 disabled:cursor-not-allowed"
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
};

export default AppointmentHero;
