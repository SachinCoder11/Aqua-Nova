import React from "react";
import { motion } from "framer-motion";

// ICONS
import { AiOutlineEye } from "react-icons/ai";
import { CiStethoscope } from "react-icons/ci";
import { PiShieldCheckLight } from "react-icons/pi";
import { LuBrain, LuHeartPulse, LuActivity } from "react-icons/lu";

import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/layout/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HospitalAutomation = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[85vh] flex items-center justify-center">
        <img
          src="/HOspitalAuto/HOspital.png"
          alt="Hospital Automation Hero"
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
            Elevate Patient Care With Smart
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            <span className="text-orange-400">Hospital Automation</span>
          </h1>
        </motion.div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT IMAGE */}
        <motion.div {...fadeUp} className="flex justify-center">
          <img
            src="/HOspitalAuto/Hospital1.png"
            alt="Smart Hospital Tower"
            className="w-[500px] h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div {...fadeUp} className="space-y-6">
          <p className="text-sm text-orange-600 font-medium">
            Smarter Healthcare Begins With
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            Our <span className="text-orange-600 underline">Hospital Automation</span> System
          </h2>

          <p className="text-gray-600">
            Transform clinical environments with human-centric lighting, automated workflows,
            and centralized control that improves patient recovery, staff performance, and operational efficiency.
          </p>

          <p className="text-gray-600">
            Smart hospital automation enhances precision in medical tasks, optimizes energy,
            improves safety, and ensures staff can focus more on patient care.
          </p>

       <button
  onClick={handleContactClick}
  className="px-6 py-3 inline-block bg-black text-white rounded-xl hover:bg-orange-600 transition-colors">

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
            <p className="text-sm text-orange-700 font-medium">Redefining Recovery</p>

            <h2 className="text-4xl font-bold">
              Smart <span className="text-orange-600 underline">Hospital Automation</span> System
            </h2>

            <p className="text-gray-600 max-w-xl">
              Deliver higher-quality healthcare with AI-driven monitoring, automated lighting,
              energy optimization, emergency systems, and integrated safety workflows.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Enhanced patient comfort</li>
              <li>• Improved staff efficiency</li>
              <li>• Real-time monitoring</li>
              <li>• Energy optimized</li>
              <li>• Better safety & control</li>
              <li>• Personalised patient experience</li>
              <li>• Seamless device integration</li>
            </ul>

        <button
  onClick={handleContactClick}
  className="px-6 py-3 inline-block bg-black text-white rounded-xl hover:bg-orange-600 transition-colors"
>
  Contact Us
</button>

          </div>

          {/* IMAGE RIGHT */}
          <div className="flex justify-center">
            <div className="rounded-3xl p-6">
              <p className="text-white text-lg font-medium mb-4">
                Your Hospital, Smarter Every Day
              </p>

              <img
                src="/HOspitalAuto/hospital2.png"
                alt="Smart Hospital Model"
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
          <span className="text-orange-600 underline">Hospital Automation?</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Deliver modern, intelligent, and patient-centric healthcare with automation that improves safety,
          accuracy, recovery, monitoring, and operational excellence.
        </p>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* 1 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
          >
            <AiOutlineEye size={30} className="text-orange-600" />
            <p className="font-semibold">Patient-Centric Lighting</p>
            <p className="text-gray-600 text-sm text-center">
              Supports biological rhythms for comfort and faster healing.
            </p>
          </motion.div>

          {/* 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
          >
            <LuHeartPulse size={30} className="text-orange-600" />
            <p className="font-semibold">Energy Efficiency</p>
            <p className="text-gray-600 text-sm text-center">
              Automated lighting & HVAC reduce consumption and operational costs.
            </p>
          </motion.div>

          {/* 3 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
          >
            <PiShieldCheckLight size={30} className="text-orange-600" />
            <p className="font-semibold">Improved Accuracy</p>
            <p className="text-gray-600 text-sm text-center">
              Minimizes human errors in medication, surgery prep, and patient workflows.
            </p>
          </motion.div>

          {/* 4 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
          >
            <CiStethoscope size={34} className="text-orange-600" />
            <p className="font-semibold">Remote Monitoring</p>
            <p className="text-gray-600 text-sm text-center">
              Real-time vitals, smart dashboards, and automated alerts.
            </p>
          </motion.div>

          {/* 5 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
          >
            <LuBrain size={30} className="text-orange-600" />
            <p className="font-semibold">AI-Driven Care</p>
            <p className="text-gray-600 text-sm text-center">
              Intelligent automation improves staff performance and patient outcomes.
            </p>
          </motion.div>

          {/* 6 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
          >
            <LuActivity size={30} className="text-orange-600" />
            <p className="font-semibold">Workflow Automation</p>
            <p className="text-gray-600 text-sm text-center">
              Streamlined tasks let staff focus more on attentive patient care.
            </p>
          </motion.div>

        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default HospitalAutomation;
