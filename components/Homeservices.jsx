import React from "react";
import { FaCloud, FaShieldAlt, FaRobot, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Managed IT Services",
    description:
      "It is a long established fact that reader will be distract readable content of a when looking.",
    icon: FaServer,
  },
  {
    title: "Cloud Services",
    description:
      "It is a long established fact that reader will be distract readable content of a when looking.",
    icon: FaCloud,
  },
  {
    title: "Machine Learning",
    description:
      "It is a long established fact that reader will be distract readable content of a when looking.",
    icon: FaRobot,
  },
  {
    title: "Data Security",
    description:
      "It is a long established fact that reader will be distract readable content of a when looking.",
    icon: FaShieldAlt,
  },
  {
    title: "Managed IT Services",
    description:
      "It is a long established fact that reader will be distract readable content of a when looking.",
    icon: FaServer,
  },
  {
    title: "Machine Learning",
    description:
      "It is a long established fact that reader will be distract readable content of a when looking.",
    icon: FaRobot,
  },
  {
    title: "Data Security",
    description:
      "It is a long established fact that reader will be distract readable content of a when looking.",
    icon: FaShieldAlt,
  },
];

const Homeservices = () => {
  return (
    <section className="bg-[#E8F1FF] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-blue-500 font-medium mb-2">Our Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Smart Solutions for a <br className="hidden sm:block" /> Digital World
        </h2>
      </div>

      {/* Row 1 - 4 cards */}
      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {services.slice(0, 4).map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-white p-8 rounded-tl-[28px] rounded-br-[28px] shadow-lg border border-transparent hover:border-[#387DF3] hover:shadow-xl transition-all duration-300 w-full max-w-[270px] text-left"
            >
              <div className="bg-gray-100 group-hover:bg-[#387DF3] w-12 h-12 flex items-center justify-center rounded-md mb-5 transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#387DF3] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[#1E1E1E] font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="text-[#387DF3] font-medium text-sm hover:underline inline-flex items-center"
              >
                Read More <span className="ml-1">→</span>
              </a>
            </div>
          );
        })}
      </div>

      {/* Row 2 - 3 centered cards */}
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.slice(4, 7).map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-white p-8 rounded-tl-[28px] rounded-br-[28px] shadow-lg border border-transparent hover:border-[#387DF3] hover:shadow-xl transition-all duration-300 w-full max-w-[270px] text-left"
            >
              <div className="bg-gray-100 group-hover:bg-[#387DF3] w-12 h-12 flex items-center justify-center rounded-md mb-5 transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#387DF3] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[#1E1E1E] font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="text-[#387DF3] font-medium text-sm hover:underline inline-flex items-center"
              >
                Read More <span className="ml-1">→</span>
              </a>
            </div>
          );
        })}
      </div>

      <p className="text-center text-gray-600 mt-14 text-sm">
        You can also find our Consultant Service to{" "}
        <a href="#" className="text-[#387DF3] hover:underline">
          Contact
        </a>{" "}
        for the consulting
      </p>
    </section>
  );
};

export default Homeservices;
