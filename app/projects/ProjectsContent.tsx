import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Our Projects",
  description: "Explore our hardware, IoT, and embedded system projects.",
};

/* =========================
   ALL HARDWARE PROJECTS
========================= */
const projects = [
  {
    image: "/nfc-dynamic-tag.png",
    title: "NFC Dynamic Tag",
    category: "Embedded / NFC",
    content:
      "STM32G030 + ST25DV64K based NFC tag with read/write firmware, LED and alarm for fire extinguisher maintenance safety.",
  },
  {
    image: "/inverter-chip-scope.png",
    title: "Inverter Chip Scope",
    category: "Embedded / Debugging",
    content:
      "STM32F765 based chip scope with UART logging, real-time variable capture and performance graph generation.",
  },
  {
    image: "/sleep-tracking-system.png",
    title: "Sleep Tracking System",
    category: "IoT / Healthcare",
    content:
      "Raspberry Pi 5 sleep tracking system using oxygen, pressure, temperature and audio sensors with app sync.",
  },
  {
    image: "/ble-controlled-shoe.png",
    title: "BLE Controlled Shoe Soles",
    category: "Wearables / BLE",
    content:
      "ESP32-C3 powered heated shoe soles with OTA updates, sensors, rechargeable battery and mobile app control.",
  },
  {
    image: "/smart-parking-system.png",
    title: "Smart Parking System",
    category: "IoT / LoRaWAN",
    content:
      "STM32WL55 + LoRaWAN smart parking with app-based slot booking and OTA updates for large venues.",
  },
  {
    image: "/ble-controlled-heatable.png",
    title: "BLE Heatable Gloves",
    category: "Wearables / IoT",
    content:
      "ESP32-C3 based heatable gloves with adjustable heating, battery monitoring, sleep mode and OTA updates.",
  },
  {
    image: "/battery-management-system.png",
    title: "Battery Management System",
    category: "Power Electronics",
    content:
      "ATmega328P BMS with hall sensors, relay control, charge balancing and TFT SOC display.",
  },
  {
    image: "/ecoshower-monitor.png",
    title: "EcoShower Monitor",
    category: "IoT / AI",
    content:
      "STM32WB5MMG based water monitoring system using AI audio analysis and BLE for hotel water conservation.",
  },
  {
    image: "/askona-sleeping-matress.png",
    title: "Askona Sleeping Mattress",
    category: "Smart Furniture",
    content:
      "ESP32-C3 BLE controlled heated mattress with side-based control, OTA updates and battery monitoring.",
  },
  {
    image: "/heatable-vest.png",
    title: "Heatable Vest",
    category: "Wearables",
    content:
      "ESP32-C3 powered heatable vest with manual + BLE control, OTA updates and mobile monitoring.",
  },
  {
    image: "/highPluse.avif",
    title: "High Precision Pulse Monitor",
    category: "Medical Electronics",
    content:
      "STM32H723ZG based pulse monitor capturing data every 100 microseconds for ultra-precise analysis.",
  },
  {
    image: "/pic16f268a-based-lock.png",
    title: "PIC16F268A Lock System",
    category: "Security Systems",
    content:
      "Password-based electronic lock using PIC16F268A and 7-segment display with live password update.",
  },
  {
    image: "/dro-and-deliver.png",
    title: "DRO & Divider System",
    category: "Industrial Automation",
    content:
      "CNC DRO system using RLC2IC encoder and RLS magnetic scales for precise measurements.",
  },
  {
    image: "/x-nucleo-gfx01m2.png",
    title: "X-NUCLEO Display GUI",
    category: "Embedded GUI",
    content:
      "Custom GUI development for X-NUCLEO-GFX01M2 using NUCLEO-G431RB board.",
  },
  {
    image: "/photo-time-lapse.png",
    title: "Photo Time-Lapse System",
    category: "Embedded Systems",
    content:
      "STM32F103C8T6 based RTC-controlled photo time-lapse capture system.",
  },
  {
    image: "/vending-machine-interface.png",
    title: "Vending Machine Interface",
    category: "Embedded UI",
    content:
      "4x16 LCD based vending machine interface with button control and PC communication.",
  },
  // {
  //   image: "/dino-google-game.png",
  //   title: "Dino Google Game",
  //   category: "Embedded Game",
  //   content:
  //     "Embedded implementation of the Google Dino game using LCD and button inputs.",
  // },
  {
    image: "/pir-sensor-based.png",
    title: "PIR Burglar Alarm",
    category: "Security / IoT",
    content:
      "ATtiny13A based PIR motion detection alarm system with loud speaker alerts.",
  },
  {
    image: "/autogate-pro.png",
    title: "AutoGate Pro",
    category: "IoT / Automation",
    content:
      "ESP32-WROOM garage automation using ESP-NOW for secure remote access control.",
  },
];

export default function ProjectsContent() {
  return (
    <div className="bg-white text-gray-700">
      {/* ================= HEADER ================= */}
      <section
        className="relative h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Projects</h1>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <ChevronRight className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400">Projects</span>
          </div>
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[420px] rounded-[36px] overflow-hidden"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* ✅ ALWAYS VISIBLE PROJECT TITLE */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-300 font-medium">
                  {project.category}
                </p>
              </div>

              {/* Hover Card */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-[140%] group-hover:translate-y-0 transition-transform duration-500 z-20">
                <div className="absolute -top-6 right-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="text-white w-6 h-6" />
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 pt-8 shadow-xl">
                  <h3 className="text-lg font-extrabold text-black mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-2">
                    {project.category}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {project.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
