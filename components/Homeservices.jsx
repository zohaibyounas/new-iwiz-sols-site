import React from "react";
import Link from "next/link";
import { FaCloud, FaShieldAlt, FaRobot, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Product Design & Prototyping",
    description:
      "Transforming concepts into tested, production-ready products.",
    icon: FaServer,
    url: "/services/ManagedITServices",
  },
  {
    title: "Embedded Systems Security",
    description:
      "Securing firmware, hardware, and data against evolving threats.",
    icon: FaCloud,
    url: "/services/CloudServices",
  },
  {
    title: "IoT Solutions",
    description:
      "Building connected systems with real-time monitoring and control.",
    icon: FaRobot,
    url: "/services/MachineLearning", // No specific URL provided, using #
  },
  {
    title: "Mobile & Desktop Application Development",
    description: "Crafting high-quality apps for Android and iOS platforms.",
    icon: FaShieldAlt,
    url: "/services/DataSecurity",
  },
  {
    title: "Cloud Software Solutions",
    description: "Scalable cloud platforms for modern digital experiences.",
    icon: FaServer,
    url: "/services/ManagedITServices",
  },
  {
    title: "POS & Retail Automation",
    description:
      "Smart POS systems designed for retail and enterprise operations.",
    icon: FaRobot,
    url: "#", // No specific URL provided, using #
  },
  {
    title: "Maintenance & Support",
    description:
      "End-to-end technical support to keep your systems running smoothly.",
    icon: FaShieldAlt,
    url: "/services/DataSecurity",
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
              <Link
                href={service.url}
                className="text-[#387DF3] font-medium text-sm hover:underline inline-flex items-center transition-colors"
              >
                Read More <span className="ml-1">→</span>
              </Link>
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
              <Link
                href={service.url}
                className="text-[#387DF3] font-medium text-sm hover:underline inline-flex items-center transition-colors"
              >
                Read More <span className="ml-1">→</span>
              </Link>
            </div>
          );
        })}
      </div>

      <p className="text-center text-gray-600 mt-14 text-sm">
        You can also find our Consultant Service to{" "}
        <Link href="/contact" className="text-[#387DF3] hover:underline">
          Contact
        </Link>{" "}
        for the consulting
      </p>
    </section>
  );
};

export default Homeservices;
