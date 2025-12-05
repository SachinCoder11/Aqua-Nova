import React from "react";
import { motion } from "framer-motion";

// Lucide minimal icons
import {
  Sparkles,
  Smartphone,
  BatteryCharging,
  ShieldCheck,
  Puzzle,
  Timer,
} from "lucide-react";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/layout/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const features = [
  { title: "Enhanced Convenience", icon: <Sparkles size={26} className="text-orange-600" /> },
  { title: "Remote Access", icon: <Smartphone size={26} className="text-orange-600" /> },
  { title: "Improved Energy Efficiency", icon: <BatteryCharging size={26} className="text-orange-600" /> },
  { title: "Increased Security", icon: <ShieldCheck size={26} className="text-orange-600" /> },
  { title: "Seamless Integration", icon: <Puzzle size={26} className="text-orange-600" /> },
  { title: "Automation Saves Time", icon: <Timer size={26} className="text-orange-600" /> },
];
const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HomeAutomation = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <header className="relative w-full h-[84vh]">
        <img
          src="/images/Outdoor/Home autohero.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
              Your Dream Home, Powered By
            </h1>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 drop-shadow-lg underline decoration-orange-400/30 underline-offset-8">
              Smart Automation
            </h2>
          </motion.div>
        </div>
      </header>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left IMG */}
          <motion.div {...fadeUp} className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[560px]">
              <div className="absolute -left-10 -top-6 w-28 h-28 rounded-full border-2 border-orange-100 opacity-30"></div>
              <img
                src="/images/Indoor/home1transparent.png"
                alt="Home Model"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right TEXT */}
          <motion.div {...fadeUp} className="space-y-6">
            <p className="text-sm text-orange-600 font-medium">Make Your Smart Living Simple with</p>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              The Best Home Automation System in{" "}
              <span className="text-orange-600">India</span>
            </h3>

            <p className="text-gray-600 max-w-xl">
              We provide customized automation solutions as per your needs. Stay seamlessly connected to your
              home environment with intelligent mood-based lighting, tunable lights, effortless scenes and
              app-based control.
            </p>

          <button
  onClick={handleContactClick}
  className="px-6 py-3 inline-block bg-black text-white rounded-xl hover:bg-orange-600 transition-colors"
>
  Contact Us
</button>

          </motion.div>
        </div>
      </section>

      {/* ================= BENEFITS CARD ================= */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Text Block */}
            <div>
              <div className="text-xs text-orange-600 font-medium mb-3">With Smart Life Solution</div>
              <h4 className="text-2xl md:text-3xl font-bold leading-snug">
                Unlock the Benefits of <span className="text-orange-600">Home Automation</span> in India
              </h4>

              <p className="text-gray-600 mt-4">
                From scene-based lighting to app control, our smart home solutions fit seamlessly into your lifestyle.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Smart scheduling</li>
                <li>• Seamless integration</li>
                <li>• Mood-based lighting</li>
                <li>• Personalized scenes</li>
                <li>• Energy efficiency</li>
                <li>• Enhanced security</li>
              </ul>

           <button
  onClick={handleContactClick}
  className="px-6 py-3 inline-block bg-black text-white rounded-xl hover:bg-orange-600 transition-colors"
>
  Contact Us
</button>

            </div>

            {/* Image Card */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-black rounded-2xl p-6 relative shadow-xl">
                <div className="absolute -top-6 -right-6 w-10 h-10 rounded-full bg-orange-500/20"></div>
                <p className="text-white text-sm mb-4">Effortless Living, Smarter Home.</p>
                <img
                  src="/images/Indoor/Home2transparent.png"
                  alt="3D Home"
                  className="w-[320px] h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h5 className="text-sm text-orange-600 font-medium">Why Choose Smart Life Solution For</h5>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Home Automation?</h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            As a leading Indian smart home provider, we deliver innovation, reliability, and seamless control.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-orange-50">
                  {f.icon}
                </div>

                <div>
                  <div className="font-semibold text-sm">{f.title}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Brief description that matches the example layout.
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Ready to make your home smarter?</h3>
            <p className="text-gray-600 mt-1">Get a free consultation and demo from our team.</p>
          </div>

          <div className="flex gap-4">
       <button
  onClick={handleContactClick}
  className="px-6 py-3 inline-block bg-black text-white rounded-xl hover:bg-orange-600 transition-colors"
>
  Contact Us
</button>

            <button className="px-6 py-3 border border-orange-300 text-orange-700 rounded-xl hover:bg-orange-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
<ContactForm/>
<Footer/>
    </div>
  );
};

export default HomeAutomation;
