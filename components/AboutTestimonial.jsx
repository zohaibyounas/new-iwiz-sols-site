import React, { useState, useRef } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const AboutTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(2); // Default middle card
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Raza Abbas",
      role: "C.E.O Mira Elektronikentwicklung",
      text: "Impressed by the innovative approach of iWizSolutions. Their IoT-based smart car parking solution has been a game-changer for our facility. Streamlined parking and easy access in one efficient package.",
      image: "/raza.jpeg",
    },
    {
      id: 2,
      name: "Fritz Conroy",
      role: "C.E.O AFCO Inc.",
      text: "iWizSolutions' IoT-based garage gate system redefined control. I can now manage my garage from anywhere with a single tap. This is modern convenience at its best.",
      image: "/Fritz2.jpg",
    },
    {
      id: 3,
      name: "Ben David",
      role: "C.T.O at MetaTech",
      text: "A rare team that combines creativity, reliability, and strong communication. They helped us with a challenging project and delivered excellence at every level.",
      image: "/Ben David.jpeg",
    },
    {
      id: 4,
      name: "Abdul Habib",
      role: "C.E.O IQRA Foundation",
      text: "iWizSolutions transformed our security infrastructure with their IP-based CCTV and email casting services. A seamless and brilliant solution.",
      image: "/Abdul.jpeg",
    },
    {
      id: 5,
      name: "Abbas Naqvi",
      role: "CTO at Iraq Duty Free",
      text: "The IWIZ team expertly upgraded our POS systems and credit card machines. Leadership and execution were top-notch.",
      image: "/clientupdata.jpeg",
    },
    {
      id: 6,
      name: "Muhammad Ali",
      role: "Director at Inno IT Pvt Ltd",
      text: "An excellent experience working with Team IWIZ. Their POS solution integrated smoothly with SAP and exceeded expectations.",
      image: "/client6.jpeg",
    },
  ];

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstChild.offsetWidth + 32; // width + gap
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft < maxScroll) {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      } else {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setActiveCard((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstChild.offsetWidth + 32; // width + gap

      if (container.scrollLeft > 0) {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      } else {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      }
    }
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setActiveCard(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstChild.offsetWidth + 32;
      container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    }
    setCurrentIndex(index);
    setActiveCard(index);
  };

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
              What Our Clients Say <br /> About IWIZ Solutions
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CARDS CONTAINER WITH HORIZONTAL SCROLL */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`
                flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21px)] 
                p-8 md:p-10 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[10px] rounded-br-[10px] 
                transition-all duration-300 snap-center cursor-pointer
                ${
                  activeCard === index
                    ? "bg-[#3B82F6] text-white shadow-xl transform scale-105"
                    : "bg-[#F8F9FC] text-[#0F172A] hover:shadow-md"
                }
              `}
              onClick={() => scrollToCard(index)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      activeCard === index
                        ? "text-white fill-white"
                        : "text-[#3B82F6] fill-[#3B82F6]"
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p
                className={`text-base leading-relaxed mb-8 ${
                  activeCard === index ? "text-blue-50" : "text-gray-700"
                }`}
              >
                &quot;{item.text}&quot;
              </p>

              {/* Footer: Profile & Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder-avatar.png";
                      }}
                    />
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-lg ${
                        activeCard === index ? "text-white" : "text-[#0F172A]"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <span
                      className={`text-sm ${
                        activeCard === index ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Quote Icon Bubble */}
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                  ${
                    activeCard === index
                      ? "bg-white/20 text-white"
                      : "bg-[#3B82F6] text-white"
                  }
                `}
                >
                  <Quote className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Instructions */}
        <p className="text-center text-gray-500 text-sm mt-6 md:hidden">
          ← Swipe left/right or tap to view more testimonials →
        </p>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default AboutTestimonial;
