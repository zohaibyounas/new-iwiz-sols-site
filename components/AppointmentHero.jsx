import React from "react";
import Image from "next/image";
import { User, Mail, ChevronDown, MessageSquare, Play } from "lucide-react";

const AppointmentHero = () => {
  return (
    <div className="relative w-full min-h-[700px] bg-white">
      {/* 
        1. BACKGROUND IMAGE SECTION 
        We use a relative container with overflow-hidden to contain the image.
      */}
      <div className="absolute inset-0 h-[600px] w-full overflow-hidden">
        {/* Placeholder image representing the office group in your screenshot */}
        <div className="relative w-full h-full bg-gray-200">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Office Team"
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Optional overlay to match the slight fade/contrast if needed */}
          <div className="absolute inset-0 bg-black/5" />
        </div>
      </div>

      {/* 
        2. MAIN CONTENT CONTAINER
        Centers the content max-width and handles grid/flex layout 
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-20 lg:pt-32 pb-20 gap-10 lg:gap-0">
          {/* LEFT SIDE: Play Button Area */}
          <div className="flex-1 flex justify-center lg:justify-start lg:pl-20">
            <button className="group relative flex items-center justify-center">
              {/* Outer Translucent Ring */}
              <div className="absolute w-24 h-24 bg-white/30 rounded-full animate-pulse md:w-28 md:h-28"></div>
              {/* Inner White Ring/Border */}
              <div className="absolute w-20 h-20 border-4 border-white/60 rounded-full md:w-24 md:h-24"></div>
              {/* Blue Circle Button */}
              <div className="relative w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-110 md:w-20 md:h-20">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </button>
          </div>

          {/* RIGHT SIDE: The Form Card */}
          <div className="w-full max-w-[450px] lg:mr-10">
            <div className="bg-white rounded-[30px] shadow-2xl overflow-hidden">
              {/* Form Content Padding */}
              <div className="p-8 md:p-10">
                {/* Header */}
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2 font-sans">
                  Make an Appointment
                </h2>
                <p className="text-xs text-gray-500 mb-8 font-medium">
                  Feel free to contact with us, we don&lsquo;t spam your email
                </p>

                {/* Form Fields */}
                <form className="space-y-4">
                  {/* Name Input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="First Name *"
                      className="w-full bg-[#F3F5F7] text-gray-700 text-sm rounded-lg py-4 px-5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-500 font-medium transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Here *"
                      className="w-full bg-[#F3F5F7] text-gray-700 text-sm rounded-lg py-4 px-5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-500 font-medium transition-colors"
                    />
                  </div>

                  {/* Select Dropdown */}
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      className="w-full bg-[#F3F5F7] text-gray-500 text-sm rounded-lg py-4 px-5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100 font-medium appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Subjects *
                      </option>
                      <option value="consultation">Consultation</option>
                      <option value="support">Support</option>
                      <option value="inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Text Area */}
                  <div className="relative">
                    <div className="absolute top-4 right-0 pr-4 flex pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      rows={4}
                      placeholder="Your Comment *"
                      className="w-full bg-[#F3F5F7] text-gray-700 text-sm rounded-lg py-4 px-5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-gray-500 font-medium resize-none"
                    ></textarea>
                  </div>
                </form>
              </div>

              {/* Form Footer (Blue Section) */}
              <div className="bg-[#3b82f6] p-4 md:p-2 rounded-br-xl">
                {/* 
                    Note: In the image, the blue section wraps the bottom. 
                    The button is white with dark text.
                 */}
                <button className="bg-white text-gray-900 text-sm font-bold py-3 px-8 rounded shadow-md hover:bg-gray-50 transition-colors rounded-tl-xl rounded-br-xl ml-6">
                  Submit Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
