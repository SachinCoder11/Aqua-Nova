import React, { useRef, useState } from "react";
import {
  Fan,
  Lamp,
  Tv,
  Waves,
  Thermometer,
  Refrigerator,
  Coffee,
  WashingMachine,
  Mic
} from "lucide-react";
// import { Link } from "react-router-dom";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const applianceIcons = [
  { icon: <Fan size={32} />, label: "Fan" },
  { icon: <Lamp size={32} />, label: "Lamp" },
  { icon: <Waves size={32} />, label: "Cooler" },
  { icon: <WashingMachine size={32} />, label: "Washing" },
  { icon: <Lamp size={32} />, label: "Light" },
  { icon: <Refrigerator size={32} />, label: "Fridge" },
  { icon: <Coffee size={32} />, label: "Coffee" },
  { icon: <Thermometer size={32} />, label: "AC" },
  { icon: <Tv size={32} />, label: "TV" },
  { icon: <Mic size={32} />, label: "Microwave" }
];
const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// Reusable Video Card Component
const VideoCard = ({ src, title }: any) => {
  const videoRef = useRef<any>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className="p-6 bg-white rounded-3xl shadow-lg border hover:shadow-2xl transition relative">

      {/* TITLE */}
      <h3 className="text-2xl font-bold mb-4 text-gray-800">
        {title}
      </h3>

      {/* VIDEO */}
     {/* VIDEO */}
<div className="rounded-2xl overflow-hidden shadow-md">
  <video
    ref={videoRef}
    src={src}
    autoPlay
    loop
    muted={muted}
    playsInline
    className="w-full h-[340px] object-cover"
  />
</div>


      {/* MUTE BUTTON */}
      <button
        onClick={toggleMute}
        className="absolute top-6 right-6 bg-black/60 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-black/80 transition"
      >
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
};

const AudioVideoSection: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] w-full flex items-center justify-center">
        <img
          src="https://smartnode.in/wp-content/uploads/2025/08/HVAC-banner.png.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-white">
          <span className="text-orange-500">Audio</span>-Video Automation
        </h1>
      </section>

      {/* ================= TEXT + IMAGE SECTION ================= */}
  {/* ================= TEXT + IMAGE SECTION ================= */}
<section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

  {/* LEFT TEXT */}
  <div>
    <p className="text-orange-500 font-medium mb-2">Control at Your Fingertips</p>

    <h2 className="text-4xl font-extrabold leading-snug">
      Smarter <span className="text-orange-500 underline">Audio-Video</span>
      <br /> For Modern Living
    </h2>

    <p className="text-gray-700 mt-6 leading-relaxed">
      Take control of your entertainment effortlessly. Automate your TVs,
      speakers, home theatre, and media devices using a single smart system
      that blends luxury with convenience.
    </p>

    <p className="text-gray-700 mt-4 leading-relaxed">
      Enjoy responsive controls, routines, voice commands and rich integration
      with your lifestyle.
    </p>

    {/* FIXED CONTACT BUTTON */}
    <button
  onClick={(e) => handleContactClick(e as any)}
  className="mt-8 px-7 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
>
  Contact Us
</button>

  </div>

  {/* RIGHT IMAGE — NOW RECTANGLE WITH BORDER RADIUS */}
  <div className="flex justify-center">
    <div className="w-[420px] h-[300px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,123,0,0.35)] border-4 border-orange-500">
      <img
        src="/images/Audio/ChatGPT Image Dec 1, 2025, 01_38_10 AM.png"
        alt="Audio Video Automation"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

</section>


      {/* ================= ICON GRID ================= */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Turn Any Device Into a
          <br />
          <span className="text-orange-500 underline">Smart Appliance</span>
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-5 gap-10 mt-16">
          {applianceIcons.map((item, i) => (
            <div
              key={i}
              className="w-24 h-24 bg-white border border-gray-200 rounded-2xl shadow-sm 
              hover:shadow-lg hover:border-orange-500 transition-all flex flex-col 
              items-center justify-center gap-1"
            >
              <div>{item.icon}</div>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEW — 3 PREMIUM VIDEO SECTIONS ================= */}
      {/* ================= UPDATED — 2 PREMIUM VIDEO SECTIONS ================= */}
<section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">

  <VideoCard
    title="Whole Home AV Integration"
    src="/videos/audio/A1.mp4"
  />

  <VideoCard
    title="Home Theatre Experience"
    src="/videos/audio/A2.mp4"
  />

</section>


      <ContactForm />
      <Footer />
    </div>
  );
};

export default AudioVideoSection;
