import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    id: "touch",
    name: "Smart Touch Plates",
    img: "/Products/switch-touch.png",
    desc: "Premium glass touch panels designed for modern homes.",
  },
  {
    id: "retro",
    name: "Retro Fit Smart Switches",
    img: "/Products/switch-retro.png",
    desc: "Install without rewiring. Perfect for upgrades and renovations.",
  },
  {
    id: "scene",
    name: "Scene Switches",
    img: "/Products/switch-scene.png",
    desc: "Trigger lighting, curtains and ambiance with a single tap.",
  },
  {
    id: "knx",
    name: "KNX Switches",
    img: "/Products/switch-knx.png",
    desc: "Industry-standard KNX smart control for enterprise automation.",
  },
  {
    id: "zigbee",
    name: "Zigbee Switches",
    img: "/Products/switch-zigbee.png",
    desc: "Wireless Zigbee switches compatible with major smart hubs.",
  },
  {
    id: "sensor",
    name: "Smart Sensors",
    img: "/Products/switch-sensor.png",
    desc: "Motion, presence, temperature and ambient sensors.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const SmartSwitches = () => {
  const [selected, setSelected] = useState("all");

  const filtered =
    selected === "all"
      ? categories
      : categories.filter((c) => c.id === selected);

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

      {/* TITLE */}
      <motion.div
        {...fadeUp}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold">
          Explore Our <span className="text-orange-600">Smart Switch Range</span>
        </h2>
        <p className="text-gray-600 mt-3">
          One unified catalogue. Multiple switch categories designed for modern homes,
          hotels, commercial spaces and luxury interiors.
        </p>
      </motion.div>

      {/* PDF CATALOGUE BUTTON */}
      <div className="flex justify-center mb-12">
        <a
          href="/catalogues/smart-switches.pdf"
          target="_blank"
          className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow hover:bg-orange-700 transition"
        >
          Download Full Switch Catalogue
        </a>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setSelected("all")}
          className={`px-5 py-2 rounded-full border text-sm ${
            selected === "all"
              ? "bg-orange-600 text-white border-orange-600"
              : "border-gray-300 text-gray-700"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelected(cat.id)}
            className={`px-5 py-2 rounded-full border text-sm ${
              selected === cat.id
                ? "bg-orange-600 text-white border-orange-600"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* CATEGORY GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {filtered.map((item, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            className="bg-white rounded-2xl border shadow hover:-translate-y-2 transition-all p-4"
          >
            <img
              src={item.img}
              className="w-full h-[220px] object-cover rounded-xl"
              alt={item.name}
            />
            <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};



export default SmartSwitches;
