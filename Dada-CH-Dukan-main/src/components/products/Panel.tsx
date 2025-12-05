import React, { useState } from "react";
import {
  Square,
  Circle,
  Layers,
  Sun,
  Zap,
  Lightbulb,
  ShieldCheck,
  Settings,
} from "lucide-react";

import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const Panel = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ======================================
                HERO SECTION
      ======================================= */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/Panel/Herodaphoto.png"
          className="absolute inset-0 w-full h-full object-cover "
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
            Premium <span className="text-orange-400">Panel Lighting</span>
          </h1>

          <p className="text-white/80 mt-4 max-w-2xl mx-auto text-lg">
            Sleek design, uniform brightness, and energy-efficient illumination
            for any space.
          </p>
        </div>
      </section>

      {/* ======================================
              INTRO SECTION
      ======================================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Modern <span className="text-orange-500">Panel Light</span> Solutions
          </h2>

          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Panel lights provide soft, diffused illumination with a clean modern
            design. Ideal for homes, offices, retail stores, and commercial
            environments.
          </p>

          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            With superior energy efficiency and uniform brightness, panel lights
            create a visually comfortable atmosphere.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src="/Public/images/Panel/pro.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ======================================
        TYPES OF PANEL LIGHTS (WITH ICONS)
      ======================================= */}
      <section className="bg-gray-50 py-20">
        <h2 className="text-center text-3xl font-bold">
          Types of <span className="text-orange-500">Panel Lights</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
          Choose from a wide variety of modern panel light designs.
        </p>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mt-12">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition p-5">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/Public/images/Panel/sqr.png"
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Square className="w-6 h-6 text-orange-500" />
              <p className="font-semibold text-lg">Square Panel Lights</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition p-5">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/Public/images/Panel/circle.png"
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Circle className="w-6 h-6 text-orange-500" />
              <p className="font-semibold text-lg">Round Panel Lights</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition p-5">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/Public/images/Panel/office.png"
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Layers className="w-6 h-6 text-orange-500" />
              <p className="font-semibold text-lg">Slim Edge Panel Lights</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
                FEATURES SECTION
      ======================================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center">
          Why Choose <span className="text-orange-500">Panel Lights</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {[
            { text: "Soft, uniform illumination", icon: Sun },
            { text: "Low power consumption", icon: Zap },
            { text: "Long life & low heat", icon: ShieldCheck },
            { text: "Multiple shapes & wattages", icon: Layers },
            { text: "Zero-glare lighting experience", icon: Lightbulb },
            { text: "Automation & dimmer compatible", icon: Settings },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl shadow-sm bg-white hover:shadow-lg transition flex items-start gap-4"
            >
              <item.icon className="w-8 h-8 text-orange-500" />
              <h3 className="font-medium text-gray-800 text-lg">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT + FOOTER */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Panel;
