import React from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const AboutTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Brenda Gregory",
      role: "Ceo & Owner",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      text: "Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already are company and the reviews already",
      active: false,
    },
    {
      id: 2,
      name: "Brenda Gregory",
      role: "Ceo & Owner",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      text: "Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already are company and the reviews already",
      active: true, // This card has the blue background
    },
    {
      id: 3,
      name: "Brenda Gregory",
      role: "Ceo & Owner",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      text: "Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already are company and the reviews already",
      active: false,
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-blue-500 font-semibold text-sm tracking-wide uppercase">
              Testimonial
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
              What Our Clients Ask <br /> About Solvix
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors duration-300">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`
                relative p-8 md:p-10 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[10px] rounded-br-[10px] transition-all duration-300
                ${
                  item.active
                    ? "bg-[#3B82F6] text-white shadow-xl translate-y-[-10px]"
                    : "bg-[#F8F9FC] text-[#0F172A] hover:shadow-md"
                }
              `}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 fill-current ${
                      item.active ? "text-white" : "text-[#3B82F6]"
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p
                className={`text-base leading-relaxed mb-8 ${
                  item.active ? "text-blue-50" : "text-gray-500"
                }`}
              >
                “ {item.text} ”
              </p>

              {/* Footer: Profile & Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                    <img
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-fit"
                    />
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-lg ${
                        item.active ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <span
                      className={`text-sm ${
                        item.active ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Quote Icon Bubble */}
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    item.active
                      ? "bg-white/20 text-white"
                      : "bg-[#3B82F6] text-white"
                  }
                `}
                >
                  <Quote className="w-5 h-5 fill-current transform rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonial;
