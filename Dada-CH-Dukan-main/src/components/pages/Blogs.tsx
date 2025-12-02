import React from "react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

// REAL APPLIANCE ICONS
import {
  Fan,
  LampDesk,
  AirVent,
  WashingMachine,
  Lightbulb,
  Refrigerator,
  Coffee,
  ThermometerSnowflake,
  Monitor,
  Microwave,
} from "lucide-react";

const applianceIcons = [
  { icon: <Fan size={28} />, label: "Fan" },
  { icon: <LampDesk size={28} />, label: "Lamp" },
  { icon: <AirVent size={28} />, label: "Cooler" },
  { icon: <WashingMachine size={28} />, label: "Washing" },
  { icon: <Lightbulb size={28} />, label: "Light" },
  { icon: <Refrigerator size={28} />, label: "Fridge" },
  { icon: <Coffee size={28} />, label: "Coffee" },
  { icon: <ThermometerSnowflake size={28} />, label: "AC" },
  { icon: <Monitor size={28} />, label: "TV" },
  { icon: <Microwave size={28} />, label: "Microwave" },
];

const Blogs = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">

        <video
          src="https://smartnode.in/wp-content/uploads/2025/07/fan-video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Smart Space <span className="text-orange-400">Lighting</span> Automation
          </h1>

          <p className="text-white/90 mt-4 text-lg max-w-2xl mx-auto">
            Experience seamless control with our intelligent automation designed
            for comfort, efficiency, and ambience at every step.
          </p>

          <button className="mt-6 bg-orange-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* ================= TEXT + IMAGE SECTION ================= */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <div>
            <p className="text-orange-500 font-semibold mb-2">Experience the Future of Home Lighting</p>

            <h2 className="text-4xl font-bold leading-snug">
              With the expertise of top{" "}
              <span className="text-orange-500 underline">Lighting Automation</span>{" "}
              companies in India
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Lighting automation transforms your home into an intuitive space
              that adapts effortlessly to your lifestyle. Imagine lights that
              switch on as you enter a room, dim to match your mood, or power down
              automatically when not in use.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Our advanced systems blend cutting-edge backend modules with sleek,
              modern touch panels—giving you full control via touch, app, voice, and schedules.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <img src="/images/new logo2.png" className="w-8" />
              <p className="text-gray-800 font-medium">
                Time to upgrade your home to a smarter, connected space.
              </p>
            </div>

            <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-orange-600 transition">
              Contact Us
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://smartnode.in/wp-content/uploads/2025/07/lighting-definition.png.webp"
              className="w-[420px] rounded-2xl shadow-xl object-contain"
              alt="Lighting Automation"
            />
          </div>
        </div>
      </section>

      {/* ================= ICON GRID ================= */}
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold">
          Turn any appliance into <br />
          <span className="text-orange-500 underline">Smart appliance</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mt-12">
          {applianceIcons.map((item, i) => (
            <div
              key={i}
              className="w-24 h-24 mx-auto bg-white border rounded-2xl shadow-md flex flex-col items-center justify-center gap-1"
            >
              <div className="text-gray-700">{item.icon}</div>
              <p className="text-xs text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCT CARDS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-14">

        <div className="p-10 rounded-3xl bg-white shadow-md border">
          <h3 className="text-2xl font-bold">Curtain <span className="text-orange-500">Automation</span></h3>
          <p className="text-gray-600 mt-4">
            Intelligent curtains that respond automatically to sunlight, time & preferences.
          </p>
          <img src="https://smartnode.in/wp-content/uploads/2025/09/4.png.webp" className="w-60 mx-auto mt-8" />
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg w-full hover:bg-orange-600">
            View More
          </button>
        </div>

        <div className="p-10 rounded-3xl bg-white shadow-md border">
          <h3 className="text-2xl font-bold">Touch <span className="text-orange-500">Panel</span></h3>
          <p className="text-gray-600 mt-4">
            Responsive, sleek, future-ready touch control panels.
          </p>
          <img src="https://smartnode.in/wp-content/uploads/2025/09/5.png.webp" className="w-60 mx-auto mt-8" />
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg w-full hover:bg-orange-600">
            View More
          </button>
        </div>

        <div className="p-10 rounded-3xl bg-white shadow-md border">
          <h3 className="text-2xl font-bold">RGBW <span className="text-orange-500">Controller</span></h3>
          <p className="text-gray-600 mt-4">
            Vibrant, personalised RGBW smart lighting control.
          </p>
          <img src="https://smartnode.in/wp-content/uploads/2025/09/6.png.webp" className="w-60 mx-auto mt-8" />
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg w-full hover:bg-orange-600">
            View More
          </button>
        </div>

      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Blogs;
