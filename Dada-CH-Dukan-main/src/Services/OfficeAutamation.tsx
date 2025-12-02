import React from "react";
import { motion } from "framer-motion";
import {
  Gauge,
  BatteryCharging,
  Smile,
  ShieldCheck,
  Puzzle,
  Presentation,
} from "lucide-react";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/layout/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const OfficeAutamation = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[85vh] flex items-center justify-center">
        <img
          src="/images/Indoor/Officeheroauto.png"
          alt="Office Automation Hero"
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
            Create A Connected Workspace That
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Meets <span className="text-orange-400">Smart Design</span>
          </h1>
        </motion.div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT IMAGE */}
        <motion.div {...fadeUp} className="flex justify-center">
          <img
            src="/images/Indoor/1.png"
            alt="Smart Office Building"
            className="w-[500px] h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div {...fadeUp} className="space-y-6">
          <p className="text-sm text-orange-600 font-medium">Enhance productivity & ambience</p>

          <h2 className="text-4xl font-bold leading-tight">
            With Our <span className="text-orange-600 underline">Smart Office</span> Automation
          </h2>

          <p className="text-gray-600">
            Stay in sync with your workspace using Smart Life Solution, where intelligent lighting adjusts to occupancy,
            dims when empty, and schedules itself for maximum comfort and energy savings.
          </p>

          <p className="text-gray-600">
            Our centralized smart office environment boosts efficiency, reduces operating costs, and empowers managers
            with real-time insights.
          </p>

          <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-orange-600 transition-all">
            Contact Us
          </button>
        </motion.div>
      </section>

      {/* ================= SECTION 2 (Rounded Card) ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 rounded-3xl shadow-sm p-10 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* TEXT */}
          <div className="space-y-6">
            <p className="text-sm text-orange-700 font-medium">Work Smarter, Not Harder</p>

            <h2 className="text-4xl font-bold">
              With Smart <span className="text-orange-600 underline">Office Automation</span> System
            </h2>

            <p className="text-gray-600 max-w-xl">
              Smart Life Solution redefines modern workspace automation by blending intelligence, efficiency,
              and sustainability into one connected ecosystem.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Enhanced energy efficiency</li>
              <li>• Improved employee comfort</li>
              <li>• Smarter workflows</li>
              <li>• Centralized control</li>
              <li>• Voice & App Integration</li>
              <li>• Workplace security</li>
            </ul>

            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-orange-600 transition-all mt-3">
              Contact Us
            </button>
          </div>

          {/* IMAGE RIGHT */}
          <div className="flex justify-center">
            <div className="bg-black rounded-3xl p-6 shadow-xl relative">
              <p className="text-white text-lg font-medium mb-4">
                Redefining Workflows<br />In A Smart Way
              </p>

              <img
                src="/images/Indoor/2.png"
                alt="Smart Office Tower"
                className="w-[380px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 py-20 text-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold">
          Why Choose Smart Life Solution For{" "}
          <span className="text-orange-600 underline">Office Automation?</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          We bring innovation, intelligence, efficiency, and sustainability to your workspace ecosystem,
          helping you create a connected, productive, and energy-efficient environment.
        </p>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Smart Productivity", desc: "Lighting + workflow tuning for high performance.", icon: <Gauge size={26} className="text-orange-600" /> },
            { title: "Intelligent Energy Efficiency", desc: "Smart lighting & HVAC reduce costs.", icon: <BatteryCharging size={26} className="text-orange-600" /> },
            { title: "Enhanced Employee Comfort", desc: "Adaptive lighting improves focus & wellbeing.", icon: <Smile size={26} className="text-orange-600" /> },
            { title: "Smarter Security", desc: "Smart locks & access control for your office.", icon: <ShieldCheck size={26} className="text-orange-600" /> },
            { title: "Seamless Integration", desc: "Works with existing infra without rewiring.", icon: <Puzzle size={26} className="text-orange-600" /> },
            { title: "Smart Meeting Spaces", desc: "Preset lighting & AV the moment you walk in.", icon: <Presentation size={26} className="text-orange-600" /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600 text-sm text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default OfficeAutamation;
