import React, { useState } from "react";

import { MdDesignServices } from "react-icons/md";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { HiOutlineCpuChip } from "react-icons/hi2";

// ================== FILTER BUTTONS ==================
const categories = [
  { id: "all", name: "All" },
  { id: "touch", name: "Smart Touch Plates" },
  { id: "retro", name: "Retro Fit Smart Switches" },
  { id: "scene", name: "Scene Switches" },
  { id: "knx", name: "KNX Switches" },
  { id: "zigbee", name: "Zigbee Switches" },
  { id: "sensor", name: "Smart Sensors" },
];

// ================== ALL PRODUCTS (EDIT EVERYTHING HERE) ==================
const products = [
  {
    id: 1,
    category: "touch",
    name: "Glass Touch Switch",
    img: "https://bizimages.withfloats.com/actual/a9f1d28f8afc4f77863c65183e0bfcdd.jpg",
    desc: "Premium glass touch panels designed for modern homes.",
  },
  {
    id: 2,
    category: "retro",
    name: "Retro Fit Smart Switch",
    img: "https://bizimages.withfloats.com/actual/9845fc0fa91743b4a2b59d4ca8534df2.jpg",
    desc: "Install without rewiring. Perfect for upgrades.",
  },
  {
    id: 3,
    category: "scene",
    name: "Scene Switch",
    img: "https://productimages.withfloats.com/serviceimages/tile/641c321f472ae5787103e7efTouchCurtainSwitch-Black",
    desc: "Trigger lighting and curtains with one tap.",
  },
  {
    id: 4,
    category: "knx",
    name: "KNX Wall Switch",
    img: "/images/Switches/knx.png",
    desc: "Industry-grade enterprise automation.",
  },
  {
    id: 5,
    category: "zigbee",
    name: "Zigbee Smart Switch",
    img: "/images/Switches/2.png",
    desc: "Wireless switch compatible with smart hubs.",
  },
  {
    id: 6,
    category: "sensor",
    name: "Smart Motion Sensor",
    img: "/images/Switches/laast.png",
    desc: "Motion, temperature & presence detection.",
  },
];

const SmartSwitches: React.FC = () => {
  const [selected, setSelected] = useState<string>("all");
  const [roomOn, setRoomOn] = useState<boolean>(false);

  // ✅ MAIN FILTER LOGIC
  const filtered =
    selected === "all"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src="/Hero/sh.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl font-bold">Smart Switch Automation</h1>
        </div>
      </section>

      {/* ================= MINI DEMO ================= */}
      <section className="w-full bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Live Smart Lighting Control
          </h2>

          <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/DoorLocks/liteon.png"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
                roomOn ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src="/DoorLocks/liteofff.png"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
                roomOn ? "opacity-100" : "opacity-0"
              }`}
            />

            <div
              onClick={() => setRoomOn(!roomOn)}
              className="absolute bottom-6 right-6 w-[180px] h-[70px] rounded-xl bg-black border border-neutral-700 flex items-center justify-center cursor-pointer"
            >
              <span className="text-white text-sm">
                {roomOn ? "POWER ON" : "POWER OFF"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">
          A New Standard in <span className="text-orange-600">Modern Switching</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border shadow">
            <MdDesignServices className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            Elegant Design
          </div>
          <div className="p-6 rounded-xl border shadow">
            <IoExtensionPuzzleOutline className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            Seamless Integration
          </div>
          <div className="p-6 rounded-xl border shadow">
            <HiOutlineCpuChip className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            Future-Proof Tech
          </div>
        </div>
      </section>

      {/* ================= FILTER BAR ================= */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelected(cat.id)}
            className={`px-5 py-2 rounded-full border ${
              selected === cat.id ? "bg-orange-600 text-white" : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border shadow p-4 hover:shadow-xl transition"
            >
              <img
                src={item.img}
                className="w-full h-[220px] object-cover rounded-xl"
                alt={item.name}
              />
              <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ✅ KNX FEATURES ONLY WHEN KNX SELECTED */}
        {selected === "knx" && (
          <div className="mt-20 bg-gray-100 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-center mb-10">
              KNX Automation Features
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div>✔ Centralized Control</div>
              <div>✔ Lighting & HVAC Automation</div>
              <div>✔ Hotel Room Management</div>
              <div>✔ Scene Control</div>
              <div>✔ Energy Monitoring</div>
              <div>✔ Enterprise Security</div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SmartSwitches;
