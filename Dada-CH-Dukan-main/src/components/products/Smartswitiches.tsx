import React, { useState } from "react";
import { motion } from "framer-motion";

// ICONS for top 3 feature cards
import { MdDesignServices } from "react-icons/md";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { HiOutlineCpuChip } from "react-icons/hi2";

const categories = [
  {
    id: "touch",
    name: "Smart Touch Plates",
    img: "https://bizimages.withfloats.com/actual/a9f1d28f8afc4f77863c65183e0bfcdd.jpg",
    desc: "Premium glass touch panels designed for modern homes.",
  },
  {
    id: "retro",
    name: "Retro Fit Smart Switches",
    img: "https://bizimages.withfloats.com/actual/9845fc0fa91743b4a2b59d4ca8534df2.jpg",
    desc: "Install without rewiring. Perfect for upgrades and renovations.",
  },
  {
    id: "scene",
    name: "Scene Switches",
    img: "https://productimages.withfloats.com/serviceimages/tile/641c321f472ae5787103e7efTouchCurtainSwitch-Black",
    desc: "Trigger lighting, curtains and ambiance with a single tap.",
  },
  {
    id: "knx",
    name: "KNX Switches",
    img: "/images/Switches/knx.png",
    desc: "Industry-standard KNX smart control for enterprise automation.",
  },
  {
    id: "zigbee",
    name: "Zigbee Switches",
    img: "/images/Switches/2.png",
    desc: "Wireless Zigbee switches compatible with major smart hubs.",
  },
  {
    id: "sensor",
    name: "Smart Sensors",
    img: "/images/Switches/laast.png",
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
    selected === "all" ? categories : categories.filter((c) => c.id === selected);

  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src="/Hero/sh.png"
          alt="Smart Switch Automation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-xl">
            Upgrade Your Space With
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            <span className="text-orange-500">Smart Switch Automation</span>
          </h1>
        </motion.div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            A New Standard in{" "}
            <span className="text-orange-600">Modern Switching</span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            From touch panels to KNX automation, smart switches bring elegance,
            convenience and control to homes, hotels and corporate spaces.
            Built for reliability, aesthetics and seamless integration.
          </p>
        </motion.div>

        {/* ICON-BASED FEATURE CARDS */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {[
            {
              label: "Elegant Design",
              icon: <MdDesignServices className="w-12 h-12 text-orange-600 mx-auto mb-4" />,
            },
            {
              label: "Seamless Integration",
              icon: (
                <IoExtensionPuzzleOutline className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              ),
            },
            {
              label: "Future-Proof Tech",
              icon: <HiOutlineCpuChip className="w-12 h-12 text-orange-600 mx-auto mb-4" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              className="p-6 rounded-xl border bg-white shadow hover:shadow-lg transition"
            >
              {item.icon}
              <p className="font-semibold text-lg text-gray-800 text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SWITCH CATALOGUE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold">
            Explore Our{" "}
            <span className="text-orange-600">Smart Switch Range</span>
          </h2>
          <p className="text-gray-600 mt-3">
            One unified catalogue. Multiple switch categories for homes, hotels,
            offices and premium interiors.
          </p>
        </motion.div>

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
    </div>
  );
};

export default SmartSwitches;
