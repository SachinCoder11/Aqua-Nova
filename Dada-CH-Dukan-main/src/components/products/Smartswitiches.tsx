import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdDesignServices } from "react-icons/md";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { HiOutlineCpuChip } from "react-icons/hi2";

// ================== PRODUCT CATEGORIES ==================
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

const SmartSwitches: React.FC = () => {
  const [selected, setSelected] = useState<string>("all");
  const [roomOn, setRoomOn] = useState<boolean>(false);
  const navigate = useNavigate();

  const filtered =
    selected === "all"
      ? categories
      : categories.filter((c) => c.id === selected);

  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src="/Hero/sh.png"
          alt="Smart Switch Automation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-xl">
            Upgrade Your Space With
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            <span className="text-orange-500">
              Smart Switch Automation
            </span>
          </h1>
        </div>
      </section>

      {/* ================= MINI DEMO ================= */}
      <section className="w-full bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Live Smart Lighting Control
          </h2>

          <p className="text-gray-400 mb-10">
            Tap the wall-mounted switch to control the entire room
          </p>

          <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="/DoorLocks/liteon.png"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                roomOn ? "opacity-0" : "opacity-100"
              }`}
            />

            <img
              src="/DoorLocks/liteofff.png"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                roomOn ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              onClick={() => setRoomOn(!roomOn)}
              className="absolute bottom-6 right-6 w-[180px] h-[70px] rounded-xl 
              bg-gradient-to-b from-neutral-900 to-black border border-neutral-700 
              shadow-2xl flex items-center justify-center cursor-pointer select-none"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-4 h-4 rounded-full ${
                    roomOn ? "bg-blue-400" : "bg-gray-700"
                  }`}
                />
                <span className="text-white text-sm">
                  {roomOn ? "POWER ON" : "POWER OFF"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          A New Standard in{" "}
          <span className="text-orange-600">
            Modern Switching
          </span>
        </h2>

        <p className="text-gray-600 mt-5 text-lg">
          From touch panels to KNX automation, smart switches bring
          elegance, convenience and control to homes and hotels.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {[ 
            { label: "Elegant Design", icon: <MdDesignServices className="w-12 h-12 text-orange-600 mx-auto mb-4" /> },
            { label: "Seamless Integration", icon: <IoExtensionPuzzleOutline className="w-12 h-12 text-orange-600 mx-auto mb-4" /> },
            { label: "Future-Proof Tech", icon: <HiOutlineCpuChip className="w-12 h-12 text-orange-600 mx-auto mb-4" /> },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl border shadow bg-white">
              {item.icon}
              <p className="font-semibold text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATALOGUE ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Explore Our{" "}
            <span className="text-orange-600">
              Smart Switch Range
            </span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button onClick={() => setSelected("all")} className="px-5 py-2 rounded-full border">
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelected(cat.id)}
              className="px-5 py-2 rounded-full border"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ✅ CLICKABLE PRODUCTS GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/smart-switches/${item.id}`)}
              className="bg-white rounded-2xl border shadow p-4 cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={item.img}
                className="w-full h-[220px] object-cover rounded-xl"
                alt={item.name}
              />
              <h3 className="text-xl font-semibold mt-4">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SmartSwitches;
