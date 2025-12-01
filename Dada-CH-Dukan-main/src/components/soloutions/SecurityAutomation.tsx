import React from "react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const SecurityAutomation = () => {
  return (
    <div className="w-full bg-black text-white">

      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src="/src/images/Security/hero.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 "></div>

        <div className="relative text-center z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Intelligent <span className="text-orange-400">Security Automation</span>
          </h1>
          <p className="text-white/80 mt-4 text-lg">
            Protect your home or office with AI-powered security, real-time alerts, and integrated surveillance.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          AI-Driven Security <span className="text-orange-500">Features</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Smart Door Sensors & Motion Detection",
            "Face Recognition Access Control",
            "24×7 Live Camera Streaming",
            "Real-Time Intrusion Alerts",
            "Automation-Linked Lockdown Mode",
            "Smart Sirens & Emergency Lighting"
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:bg-white/20 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-white/70 text-sm">
                Advanced smart tech ensuring unbeatable protection.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEM OVERVIEW */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          <img
            src="/src/images/Security/Security.png"
            className="rounded-xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Fully Connected <span className="text-orange-500">Security Network</span>
            </h2>
            <p className="text-white/70 leading-relaxed">
              All sensors, locks, cameras, and alarms talk to each other—using encrypted automation protocols.
              Get instant alerts, remote access, geofencing, and auto-arm/shutdown actions.
            </p>

            <ul className="mt-6 space-y-3 text-white/80">
              <li>• Automatic locks integration</li>
              <li>• CCTV + AI behavior detection</li>
              <li>• Smart Fire & Gas Alarms</li>
              <li>• Mobile + Voice Assistant Control</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default SecurityAutomation;
