import React from "react";
import {
  ArrowRight,
  Fan,
  Lamp,
  Tv,
  Waves,
  Thermometer,
  Refrigerator,
  Coffee,
  WashingMachine,
  Mic
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const applianceIcons = [
  { icon: <Fan size={32} />, label: "Fan" },
  { icon: <Lamp size={32} />, label: "Lamp" },
  { icon: <Waves size={32} />, label: "Cooler" },
  { icon: <WashingMachine size={32} />, label: "Washing" },
  { icon: <Lamp size={32} />, label: "Light" },
  { icon: <Refrigerator size={32} />, label: "Fridge" },
  { icon: <Coffee size={32} />, label: "Coffee" },
  { icon: <Thermometer size={32} />, label: "AC" },
  { icon: <Tv size={32} />, label: "TV" },
  { icon: <Mic size={32} />, label: "Microwave" }
];

const AudioVideoSection: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] w-full flex items-center justify-center">
        <img
          src="https://smartnode.in/wp-content/uploads/2025/08/HVAC-banner.png.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-white">
          <span className="text-orange-500">Audio</span>-Video Automation
        </h1>
      </section>

      {/* ================= TEXT + IMAGE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <p className="text-orange-500 font-medium mb-2">Control at Your Fingertips</p>

          <h2 className="text-4xl font-extrabold leading-snug">
            Smarter <span className="text-orange-500 underline">Audio-Video</span>
            <br /> For Modern Living
          </h2>

          <p className="text-gray-700 mt-6 leading-relaxed">
            Take control of your entertainment effortlessly. Automate your TVs,
            speakers, home theatre, and media devices using a single smart system
            that blends luxury with convenience.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            Enjoy responsive controls, routines, voice commands and rich integration
            with your lifestyle.
          </p>

          <button className="mt-8 px-7 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>

        {/* RIGHT IMAGE (video removed but image intact) */}
        <div className="flex justify-center">
          <div className="w-[380px] h-[380px] rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,123,0,0.35)] border-4 border-orange-500">

            {/* STATIC IMAGE (kept EXACT path) */}
            <img
              src="/src/images/Audio/ChatGPT Image Dec 1, 2025, 01_38_10 AM.png"
              alt="Audio Video Automation"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

      </section>

      {/* ================= ICON GRID ================= */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Turn Any Device Into a
          <br />
          <span className="text-orange-500 underline">Smart Appliance</span>
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-5 gap-10 mt-16">
          {applianceIcons.map((item, i) => (
            <div
              key={i}
              className="w-24 h-24 bg-white border border-gray-200 rounded-2xl shadow-sm 
              hover:shadow-lg hover:border-orange-500 transition-all flex flex-col 
              items-center justify-center gap-1"
            >
              <div className="text-gray-700 group-hover:text-orange-500">
                {item.icon}
              </div>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCT CARDS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* IR EMITTER */}
        <div className="p-10 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition">
          <h3 className="text-3xl font-bold text-gray-900">
            IR <span className="text-orange-500">Emitter</span>
          </h3>

          <p className="text-gray-700 mt-4 leading-relaxed">
            Make traditional IR devices smart. Control TVs, ACs and media devices
            through automation, apps and voice commands.
          </p>

          <img
            src="/src/images/Audio/IR-Emitter.png.png"
            className="w-64 mx-auto mt-10"
          />

          <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg w-full hover:bg-orange-600 flex items-center justify-center gap-2 transition">
            View More <ArrowRight size={18} />
          </button>
        </div>

        {/* IR BLASTER */}
        <div className="p-10 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition">
          <h3 className="text-3xl font-bold text-gray-900">
            IR <span className="text-orange-500">Blaster</span>
          </h3>

          <p className="text-gray-700 mt-4 leading-relaxed">
            Replace all your remotes with one powerful smart controller. Automate
            AC, TV, home theatre and more.
          </p>

          <img
            src="/src/images/Audio/IR-Blaster.png.png"
            className="w-64 mx-auto mt-10"
          />

          <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg w-full hover:bg-orange-600 flex items-center justify-center gap-2 transition">
            View More <ArrowRight size={18} />
          </button>
        </div>

      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default AudioVideoSection;
