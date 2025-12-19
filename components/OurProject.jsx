import React from "react";
import Image from "next/image";
import Link from "next/link";

const hardwareProjects = [
  {
    image: "/nfc-dynamic-tag.png",
    title: "NFC Dynamic Tag",
    content:
      "The NFC Dynamic Tag project uses an STM32G030 and ST25DV64K. Custom firmware allows data read/write, with a red LED and alarm alerting for maintenance, enhancing safety for fire extinguishers.",
  },
  {
    image: "/inverter-chip-scope.png",
    title: "Inverter Chip Scope",
    content:
      "In the Inverter Chip Scope project, I upgraded an inverter board with STM32F765, adding chip scope functionality to log variable addresses, capture real-time data via UART, and generate performance graphs for monitoring.",
  },
  {
    image: "/ble-controlled-heatable.png",
    title: "BLE Controlled Heatable Gloves",
    content:
      "This project uses ESP32-C3, Arduino, and ESP-IDF to develop BLE-controlled heatable gloves. Features include adjustable heating, battery monitoring via app, temperature sensor, sleep mode, and OTA firmware updates.",
  },
  {
    image: "/vending-machine-interface.png",
    title: "Vending Machine Interface Panel",
    content:
      "This project features an interface panel for a vending machine using a 4x16 LCD and physical buttons. It displays the menu and settings and includes PC communication for data exchange and configuration.",
  },
];

const HardwareProjects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p className="text-blue-500 text-sm font-medium">Our Projects</p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 text-black">
          Hardware & Embedded <br className="hidden md:block" />
          Innovation Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {hardwareProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-tl-3xl rounded-br-3xl shadow-md hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl h-56 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button (NOT REMOVED) */}
        <Link href="/projects">
          <button className="mt-12 px-8 py-4 rounded-tl-xl rounded-br-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all">
            View Our All Works
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HardwareProjects;
