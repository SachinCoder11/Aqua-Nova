import React from "react";
import Footer from "../layout/Footer";
import ContactForm from "../sections/ContactForm";

import {
  IconBulb,
  IconBulbFilled,
  IconStar,
  IconBrightnessUp,
  IconBolt,
  IconAdjustments,
} from "@tabler/icons-react";

export const COB: React.FC = () => {
  const cobTypes = [
    {
      title: "Fixed COB Lights",
      desc: "Standard COB lights with a focused, powerful beam for clean downward illumination.",
      image: "/src/images/Light Photo/1.png",
    },
    {
      title: "Adjustable / Tiltable COB",
      desc: "Provides directional lighting ideal for highlighting walls, decor, or focus objects.",
      image: "/src/images/Light Photo/2.png",
    },
    {
      title: "Deep Recessed COB",
      desc: "Reduces glare while offering a soft, premium lighting output used in luxury interiors.",
      image: "/src/images/Light Photo/3.jpg",
    },
    {
      title: "Anti-Glare COB",
      desc: "Designed with advanced anti-glare optics for comfort lighting in homes and offices.",
      image: "https://nirvanalighting.in/wp-content/uploads/2025/01/d-Signo-Adjustable-1447-1.jpg",
    },
    {
      title: "Wall-Washer COB",
      desc: "Engineered for uniform wall illumination ideal for galleries and showrooms.",
      image: "https://nirvanalighting.in/wp-content/uploads/2025/01/d-Sigo-Adjustable-NL-1445A-1.jpg",
    },
    {
      title: "Smart Dimmable COB",
      desc: "Compatible with automation systems for full dimming + scene control.",
      image: "https://nirvanalighting.in/wp-content/uploads/2025/01/d-Signo-Adjustable-1448-S1-1.jpg",
    },
  ];

  const features = [
    {
      icon: IconStar,
      title: "Premium Illumination",
      desc: "COB LEDs deliver high CRI lighting with consistent color and superior brightness.",
    },
    {
      icon: IconBrightnessUp,
      title: "Low Heat Output",
      desc: "Advanced heat sinks ensure long lifespan and minimal thermal radiation.",
    },
    {
      icon: IconBolt,
      title: "Energy Efficient",
      desc: "Up to 80% lower energy consumption compared to normal halogen spotlights.",
    },
    {
      icon: IconAdjustments,
      title: "Smart Dimming Support",
      desc: "Compatible with automation dimmers for warm/cool scenes.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative h-[70vh] w-full flex items-center justify-center bg-black overflow-hidden">
        <img
          src="/src/images/Light Photo/ChatGPT Image Nov 30, 2025, 08_56_12 PM.png"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 "></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Premium <span className="text-orange-400">COB Lighting</span>
          </h1>

          <p className="text-white/90 mt-4 text-lg">
            High-quality illumination designed for modern architectural lighting.
          </p>

          <button className="mt-6 bg-orange-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Explore COB Lights
          </button>
        </div>
      </section>

      {/* =========================================================
          SECTION: FEATURES
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">
          Why Choose <span className="text-orange-500">COB Lighting?</span>
        </h2>

        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          COB (Chip on Board) provides uniform, powerful, and high-efficiency illumination.
        </p>

        <div className="grid md:grid-cols-4 gap-10 mt-14">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <item.icon size={40} className="text-orange-500" />

              <h3 className="text-xl font-bold mt-4 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION: TYPES OF COB LIGHTING
      ========================================================= */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Types of <span className="text-orange-500">COB Lights</span>
          </h2>

          <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
            Multiple COB designs suited for every interior aesthetic and purpose.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {cobTypes.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />

                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>

                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION: BENEFIT BANNER
      ========================================================= */}
      <section className="w-full py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Perfect for Homes, Offices & Commercial Spaces
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto">
          COB lighting adds sophistication, depth, and visual identity to any interior.
        </p>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}
      <ContactForm />

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />

    </div>
  );
};

export default COB;
