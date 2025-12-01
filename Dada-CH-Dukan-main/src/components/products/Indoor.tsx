import React from "react";
import {
  Lightbulb,
  Layers,
  Sparkles,
  Sun,
  Zap,
  LampWallDown,
  Lamp,
  Settings,
} from "lucide-react";

import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const Indoor = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* =====================================================
                        HERO SECTION
      ====================================================== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/src/images/Indoor/Hero.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
            Elegant <span className="text-orange-400">Indoor Lighting</span>
          </h1>
          <p className="text-white/85 mt-4 max-w-2xl mx-auto text-lg">
            Enhance aesthetics and comfort with atmosphere-perfect indoor lighting solutions.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[80px] bg-gradient-to-b from-white to-gray-50"></div>

      {/* =====================================================
                        INTRO SECTION
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold leading-tight">
            Lighting That <span className="text-orange-500">Transforms</span> Your Space
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our indoor lighting solutions focus on ambience, visual comfort, luxury styling and modern design.
            Perfect for living rooms, bedrooms, kitchens and high-end interiors.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            With elegant profiles and advanced LED technology, our lighting seamlessly blends
            aesthetics with functionality.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-square rounded-2xl border shadow-xl overflow-hidden">
            <img
              src="/src/images/Indoor/Herokenechey.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 my-10"></div>

      {/* =====================================================
                CATEGORIES SECTION (WITH ICONS)
      ====================================================== */}
      <section className="bg-gray-50 py-24">
        <h2 className="text-3xl font-bold text-center">
          Indoor Lighting <span className="text-orange-500">Categories</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
          Explore premium lighting options designed to elevate your interior look.
        </p>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mt-12">
          {/* CARD 1 */}
          <div className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition p-5">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/src/images/Indoor/Celling.png"
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Lamp className="w-6 h-6 text-orange-500" />
              <p className="font-semibold text-lg">False Ceiling Lights</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition p-5">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/src/images/Indoor/Srip.png"
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Sparkles className="w-6 h-6 text-orange-500" />
              <p className="font-semibold text-lg">Strip LED & Mood Lighting</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl shadow-md border hover:shadow-xl transition p-5">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/src/images/Indoor/cob.png"
                className="w-full h-[300px] object-cover"
              />
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Lightbulb className="w-6 h-6 text-orange-500" />
              <p className="font-semibold text-lg">COB & Spot Lights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[80px] bg-gradient-to-b from-gray-50 to-white"></div>

      {/* =====================================================
                        FEATURES SECTION
      ====================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-3xl font-bold">
          Why Our <span className="text-orange-500">Indoor Lighting</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {[
            { text: "Warm & cool ambience options", icon: Sun },
            { text: "Supports automation dimming", icon: Settings },
            { text: "Elegant modern finish", icon: Layers },
            { text: "Energy saving LEDs", icon: Zap },
            { text: "Perfect for any decor", icon: LampWallDown },
            { text: "Soft visual comfort lighting", icon: Lightbulb },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-2xl shadow-sm bg-white hover:shadow-lg transition flex gap-4 items-start"
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

export default Indoor;
