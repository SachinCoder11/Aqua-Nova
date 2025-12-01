import React from "react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const ThirdPartyIntegration = () => {
  return (
    <div className="w-full bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] flex items-center px-10">

        {/* Background */}
        <img
          src="https://smartnode.in/wp-content/uploads/2025/09/3rd-party-banner.png.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Title */}
        <div className="relative z-20 max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-snug">
            Third-Party{" "}
            <span className="text-orange-400 underline decoration-orange-500/50">
              Integration
            </span>
          </h1>

          <p className="text-gray-200 mt-5 text-lg max-w-xl">
            Connect your smart home effortlessly with world-class automation platforms.
          </p>
        </div>
      </section>

      {/* ================= ECOSYSTEM SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Build A Smarter Ecosystem With  
            <br />
            <span className="text-orange-500 underline decoration-orange-400/40">
              Third-Party Integration
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Smart Node products are engineered for seamless compatibility with today’s
            most popular smart home platforms including Alexa, Google Home, and Apple HomeKit.
            Experience effortless automation designed around the way you live.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Enjoy unified, future-proof smart home control powered by robust APIs and smooth
            multi-platform connectivity.
          </p>

          {/* Logos */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-10">
              <img
                src="https://smartnode.in/wp-content/uploads/2025/07/amazon-alexa.png.webp"
                className="h-10 grayscale hover:grayscale-0 transition"
              />
              <img
                src="https://smartnode.in/wp-content/uploads/2025/07/apple-homekit.png.webp"
                className="h-10 grayscale hover:grayscale-0 transition"
              />
            </div>

            <img
              src="https://smartnode.in/wp-content/uploads/2025/07/google-assistant.png.webp"
              className="h-10 grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <img
            src="https://smartnode.in/wp-content/uploads/2025/07/third-party-integrates.png.webp"
            className="w-full max-w-lg object-contain drop-shadow-lg"
          />
        </div>
      </section>

      {/* ================= MEDIA CONTROLLER SECTION ================= */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Integrates With{" "}
            <span className="text-orange-400 underline decoration-orange-600/40">
              Media Controllers
            </span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Streamline your audio-visual ecosystem using powerful media automation systems.
          </p>

          {/* Logos Row */}
          <div className="flex justify-center items-center gap-20 mt-16">

            <img
              src="https://smartnode.in/wp-content/uploads/2025/07/nice-icon.png.webp"
              className="h-12 opacity-70 hover:opacity-100 transition"
            />

            <div className="h-12 w-px bg-gray-600" />

            <img
              src="https://smartnode.in/wp-content/uploads/2025/07/rti-icon.png.webp"
              className="h-10 opacity-70 hover:opacity-100 transition"
            />

            <div className="h-12 w-px bg-gray-600" />

            <img
              src="https://smartnode.in/wp-content/uploads/2025/07/control4-icon.png.webp"
              className="h-10 opacity-70 hover:opacity-100 transition"
            />

            <div className="h-12 w-px bg-gray-600" />

            <img
              src="https://smartnode.in/wp-content/uploads/2025/07/cue-icon.png.webp"
              className="h-10 opacity-70 hover:opacity-100 transition"
            />
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default ThirdPartyIntegration;
