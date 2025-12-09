import React from "react";
import {
  Lamp,
  LightBulb,
  WashingMachine,
  CoffeeCup,
  SnowFlake,
  SoundHigh,
  Fridge,
} from "iconoir-react";

import {
  IconMicrowaveOff as IconMicrowave,
  IconBread as IconToaster,
  IconWind,
  IconDeviceTv,
} from "@tabler/icons-react";

import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const LightingAutomation: React.FC = () => {
  const goToContact = () => {
    const el = document.getElementById("contact-form-anchor");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const applianceIcons: any = {
    "Ceiling Fan": IconWind,
    Lamp: Lamp,
    "Desk Lamp": LightBulb,
    "Night Lamp": Lamp,
    Refrigerator: Fridge,
    "Washing Machine": WashingMachine,
    "Coffee Maker": CoffeeCup,
    "Air Conditioner": SnowFlake,
    Speaker: SoundHigh,
    Television: IconDeviceTv,
    Microwave: IconMicrowave,
    Toaster: IconToaster,
  };

  const deviceImages = [
    "/images/Light Photo/smartswitch.png",
    "/images/Light Photo/remote.png",
    "/images/Light Photo/dlai.png",
  ];

  return (
    <div className="w-full bg-white text-gray-900">

      {/* =========================================================
          HERO SECTION — FULL-WIDTH VIDEO, NO CROPPING
      ========================================================= */}
      <section className="relative w-full mt-6">
        <div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl">

          <video
            src="/Hero/lah.mp4"
            className="w-full h-auto rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 rounded-3xl"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <img
              src="/images/Outdoor/logofinal.png"
              alt="icon"
              className="w-16 mb-4 opacity-90"
            />

            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow">
              Smart Space<span className="text-orange-400"> Lighting Automation</span>
            </h1>

            <p className="text-white/90 mt-4 text-lg">
              Lighting that adapts to your lifestyle with intelligence and elegance.
            </p>

            <button
              onClick={goToContact}
              className="mt-6 bg-orange-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — TEXT + PROPER VIDEO (FULL WIDTH)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-slideUp">
          <span className="flex items-center gap-2 text-orange-500 font-medium">
            <img src="/images/new logo2.png" className="w-5" />
            Smarter Lighting
          </span>

          <h2 className="text-3xl font-bold mt-3 leading-snug">
            Advanced Automation
            <span className="text-orange-500"> Designed</span> for Modern Living
          </h2>

          <p className="mt-4 text-gray-600">
            Lighting automation enhances comfort, reduces power bills,
            and gives you complete control.
          </p>

          <p className="mt-4 text-gray-600">
            Integrates perfectly with switches, apps, scenes and smart home systems.
          </p>

          <button
            onClick={goToContact}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Contact Us
          </button>
        </div>

       <div className="w-full h-full">
  <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
    <video
      src="/videos/Light/Untitled video - Made with Clipchamp.mp4"
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
</div>

      </section>

      {/* =========================================================
          SECTION 3 — APPLIANCE ICONS
      ========================================================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Upgrade Any Appliance with
            <span className="text-orange-500"> Smart Control</span>
          </h2>

          <p className="text-gray-500 text-center mt-3 text-lg max-w-2xl mx-auto">
            Intelligent automation that blends power, design and efficiency.
          </p>

          <div className="w-full h-px bg-gray-200 mt-10 mb-14"></div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">
            {Object.keys(applianceIcons).map((label, index) => {
              const Icon = applianceIcons[label];
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm
                             hover:shadow-lg transition-all duration-300 flex flex-col
                             items-center justify-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-50">
                    <Icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-gray-700">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4 — FIXED PRODUCT CARD SIZING (NO PHOTO FRAME LOOK)
      ========================================================= */}
     <section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-bold text-center">
    Lighting <span className="text-orange-500">Automation Devices</span>
  </h2>

  <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
    Discover intelligent lighting controls designed to enhance your comfort.
  </p>

  <div className="grid md:grid-cols-3 gap-10 mt-12">
    {[1, 2, 3].map((_, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl border border-gray-200 shadow-sm 
                   overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
      >
        {/* IMAGE — FULL CARD TOP, CLEAN, EQUAL */}
        <div className="w-full h-64 bg-gray-100">
          <img
            src={deviceImages[idx]}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* TEXT */}
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-900">
            {idx === 0 && <>Smart <span className="text-orange-500">Device</span></>}
            {idx === 1 && <>Remote <span className="text-orange-500">Device</span></>}
            {idx === 2 && <>DALI <span className="text-orange-500">Controller</span></>}
          </h3>

          <p className="mt-2 text-gray-600">
            {idx === 0 && "Convert your existing switches into smart modules."}
            {idx === 1 && "Works even without Wi-Fi or internet."}
            {idx === 2 && "Professional-grade lighting control."}
          </p>
        </div>

        {/* BUTTON */}
        <div className="px-6 pb-6">
          <button
            onClick={goToContact}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg w-full hover:bg-orange-600 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* =========================================================
          CONTACT FORM + FOOTER
      ========================================================= */}
      <div id="contact-form-anchor">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default LightingAutomation;
