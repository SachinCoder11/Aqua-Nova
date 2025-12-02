import React from "react";
import {
  TreePine,
  ShieldCheck,
  Sun,
  Zap,
  LampWallDown,
  Waves,
  Settings,
} from "lucide-react";

import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const Outdoor = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* =====================================================
                          HERO SECTION
      ====================================================== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/Outdoor/Hero.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
            Durable <span className="text-orange-400">Outdoor Lighting</span>
          </h1>
          <p className="text-white/85 mt-4 max-w-2xl mx-auto text-lg">
            Weather-resistant outdoor lighting solutions for gardens, facades, pathways and landscapes.
          </p>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="h-20 bg-gradient-to-b from-white to-gray-50"></div>

      {/* =====================================================
                          INTRO SECTION
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight">
            Built for <span className="text-orange-500">Performance</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Outdoor lighting must be tough, weather-proof and bright.  
            Our outdoor fixtures are engineered for durability while keeping premium aesthetics intact.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Whether it's pathways, gardens, terraces or building facades — we’ve got solutions that last.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-square rounded-2xl shadow-xl border overflow-hidden">
            <img
              src="/images/Outdoor/heroke nechay.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="border-t border-gray-200 my-10"></div>

      {/* =====================================================
                      CATEGORIES SECTION
      ====================================================== */}
      <section className="bg-gray-50 py-24">
        <h2 className="text-3xl font-bold text-center">
          Outdoor Lighting <span className="text-orange-500">Categories</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
          Explore rugged and modern outdoor lighting for every type of exterior.
        </p>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mt-12">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition p-5">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Outdoor/SPike.png"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <TreePine className="w-6 h-6 text-orange-500" />
              <p className="font-semibold text-lg">Garden Spike Lights</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition p-5">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Outdoor/Wallwasher.png"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Waves className="w-6 h-6 text-orange-500" />
              <p className="font-semibold text-lg">Wall Washers</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition p-5">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/Outdoor/FASCADE.png"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <LampWallDown className="w-6 h-6 text-orange-500" />
              <p className="font-semibold text-lg">Facade & Path Lights</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="h-20 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* =====================================================
                        FEATURES SECTION
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-3xl font-bold">
          Why Choose Our <span className="text-orange-500">Outdoor Lights</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {[
            { text: "Waterproof & weatherproof", icon: ShieldCheck },
            { text: "High-brightness LEDs", icon: Sun },
            { text: "Long-life outdoor performance", icon: Zap },
            { text: "Rust-free aluminum body", icon: LampWallDown },
            { text: "Perfect for landscape architecture", icon: TreePine },
            { text: "Automation compatible", icon: Settings },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl shadow-sm bg-white hover:shadow-lg transition flex gap-4 items-start"
            >
              <item.icon className="w-8 h-8 text-orange-500" />
              <h3 className="font-medium text-gray-800 text-lg">{item.text}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
                      CONTACT + FOOTER
      ====================================================== */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Outdoor;
