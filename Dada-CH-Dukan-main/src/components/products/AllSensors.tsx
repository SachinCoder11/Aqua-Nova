import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AllSensors: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const sections = [
    {
      title: "Single Phase Control Panel",
   img:" /images/Sensor/Sensor1.jpg",
      features: [
        "Voltage: 230V/50Hz | Capacity: 1–24A",
        "High/Low voltage protection",
        "Dry run & overload protection",
        "Manual ON/OFF with reset button",
        "7-Segment digital display",
        "Forward/Reverse protection",
        "SS sensor, Carbon sensor, Float switch compatible",
      ],
    },
    {
      title: "Digital Water Level Controller",
      img: "/images/Sensor/sensor2.jpg",
      features: [
        "Input: 230V AC | Output: 230V",
        "High/Low voltage protection",
        "1–24A amp protection",
        "Dry run protection",
        "Auto/manual switch",
        "LED indicators for both tanks",
        "Supports overhead & underground tanks",
      ],
    },
    {
      title: "Step Sensor Controller",
      img: "/images/Sensor/sensor3.jpg",
      features: [
        "Controls up to 32 stair lights",
        "Adjustable 4-speed lighting levels",
        "Auto on/off on movement detection",
        "Anti-leakage & safe operation",
        "Perfect for homes, malls, shops",
      ],
    },
    {
      title: "Wardrobe Sensor (Double/Single Door)",
      img: "/images/Sensor/sensor4.jpg",
      features: [
        "Wider opening space support",
        "Elegant & grand appearance",
        "Suitable for entrances, conference rooms, patios",
        "Ideal for villas, malls, commercial buildings",
      ],
    },
    {
      title: "Microwave Motion Sensor",
      img: "/images/Sensor/s5.jpg",
      features: [
        "5.8GHz microwave detection",
        "360° coverage up to 10m",
        "Works through walls & doors",
        "IP65 waterproof",
        "Best for garages, outdoors",
      ],
    },
    {
      title: "Step Sensor",
      img: "/images/Sensor/S7.jpg",
      features: [
        "LUX adjustable",
        "Auto ON at <5 LUX",
        "Auto OFF at >50 LUX",
        "Energy-saving",
        "Day/Night automation",
      ],
    },
    {
      title: "Wall-Drop Microwave Sensor",
      img: "/images/Sensor/s9.png",
      features: [
        "High-precision dry-contact sensor",
        "360° detection | 2–10m range",
        "IP65 weatherproof",
        "Perfect for parking, industries",
      ],
    },
    {
      title: "Hidden Microwave Sensor",
      img: "/images/Sensor/S10.jpg",
      features: [
        "360° detection | up to 16m",
        "Adjustable sensitivity & delay",
        "Auto adapts to environment",
        "Ideal for corridors, stairs, parking",
      ],
    },
    {
      title: "Surface Motion Sensor",
      img: "/images/Sensor/S11.jpg",
      features: [
        "Smart 5.8GHz sensing",
        "Energy-saving control",
        "360° detection range",
        "Perfect for commercial & public spaces",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f7] text-gray-900">

      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center">
      <video
    src="/videos/Sensor/svid.webm"
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            Smart <span className="text-purple-400">Sensors</span>
          </h1>
          <p className="text-white/90 text-xl mt-4">
            Advanced sensors for lighting, automation, safety, and energy savings.
          </p>
        </div>
      </section>

      {/* SENSOR SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-28">

        {sections.map((item, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              className="flex justify-center"
            >
              <img
                src={item.img}
                className="w-[85%] rounded-3xl shadow-2xl object-contain bg-black p-6"
              />
            </div>

            {/* Text block */}
            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4">{item.title}</h2>

              <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                {item.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default AllSensors;
