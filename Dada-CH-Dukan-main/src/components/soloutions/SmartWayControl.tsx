import React from "react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";
import { Fan, Lamp, Tv, Coffee, Refrigerator, Thermometer, Mic, WashingMachine } from "lucide-react";

const SmartWayControl = () => {
  const applianceIcons = [
    { icon: <Fan size={32} />, label: "Fan" },
    { icon: <Lamp size={32} />, label: "Lamp" },
    { icon: <Tv size={32} />, label: "TV" },
    { icon: <Coffee size={32} />, label: "Coffee Maker" },
    { icon: <Refrigerator size={32} />, label: "Refrigerator" },
    { icon: <Thermometer size={32} />, label: "A.C" },
    { icon: <Mic size={32} />, label: "Voice Control" },
    { icon: <WashingMachine size={32} />, label: "Washing Machine" },
  ];

  const productCards = [
    {
      title: "Scene Switch Controller",
      img: "https://smartnode.in/wp-content/uploads/2025/08/Smart-Way-Control-1.png.webp",
      desc: "Trigger multiple actions with a single tap. Easy and intuitive scene control.",
    },
    {
      title: "NFC Tags",
      img: "https://smartnode.in/wp-content/uploads/2025/09/10.png.webp",
      desc: "Trigger smart scenes instantly using NFC-enabled phones or Smart Tags.",
    },
    {
      title: "Premium Keypads",
      img: "https://smartnode.in/wp-content/uploads/2025/09/3-1.png.webp",
      desc: "Modern & sleek multi-zone smart keypads for effortless room control.",
    },
    {
      title: "Smart Screens",
      img: "https://smartnode.in/wp-content/uploads/2025/09/11.png.webp",
      desc: "Central hub for your home. Control everything from one intuitive screen.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] w-full bg-black text-white overflow-hidden flex items-center">
        <div className="w-1/2 pl-16 z-20">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Smart <span className="text-orange-500">Way Control</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-md text-lg">
            Control your entire home through a sleek, futuristic interface.  
            Smart living that feels magical.
          </p>
        </div>

        {/* LEFT DEVICE IMAGE */}
        <img
          src="https://smartnode.in/wp-content/uploads/2025/08/Smart-Way-Control-1.png.webp"
          className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[420px] z-10"
        />

        {/* BLURRED MODEL BACKGROUND */}
        <img
          src="https://smartnode.in/wp-content/uploads/2025/09/10.png.webp"
          className="absolute right-0 top-0 h-full object-cover opacity-40 blur-sm"
        />
      </section>

      {/* ================= PRODUCT CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center">
          Smart Way <span className="text-orange-500">Devices</span>
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Built for effortless, connected living.
        </p>

        <div className="grid md:grid-cols-4 gap-10 mt-14">
          {productCards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white shadow-xl hover:shadow-2xl transition p-6 text-center"
            >
              <img src={card.img} className="w-32 h-32 object-contain mx-auto" />
              <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{card.desc}</p>

              <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg hover:bg-orange-500 transition">
                View More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ICON GRID ================= */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center">
          Turn Any Appliance Into  
          <span className="text-green-600"> Smart Appliance</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14 max-w-4xl mx-auto px-4">
          {applianceIcons.map((a, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl shadow bg-white flex flex-col items-center hover:shadow-lg transition"
            >
              <div className="text-orange-500">{a.icon}</div>
              <p className="mt-3 font-medium">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AUTOMATION SECTION ================= */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-black">
              Automate Your  
              <span className="text-orange-500"> Entire Home</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Set scenes like “Good Morning,” “Party Mode,” “Movie Time,”  
              or fully custom triggers with sensors, timers, motion, and more.
            </p>
          </div>

          <img
            src="/src/images/Security/Admi.png"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default SmartWayControl;
