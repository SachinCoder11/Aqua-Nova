import React, { useRef, useState } from "react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const GradientCheck: React.FC = () => (
  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-md">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13L9 17L19 7" />
    </svg>
  </div>
);

type SectionType = {
  num: string;
  tag: string;
  title: string;
  desc: string;
  video: string;
  features: string[];
};

const CurtainAutomation: React.FC = () => {
  const sections: SectionType[] = [
    {
      num: "01",
      tag: "Motorized Curtains",
      title: "Smart Motorized Curtain Motors",
      desc:
        "Smooth, silent and powerful curtain motors designed for modern homes and premium interiors.",
      video: "/curtainvid/c1.mp4",
      features: [
        "Ultra-Silent Motor Technology",
        "Remote, App & Voice Control",
        "Automated Scheduling",
      ],
    },
    {
      num: "02",
      tag: "Track Systems",
      title: "Heavy Duty Smart Curtain Tracks",
      desc:
        "Durable and flexible track systems available in various sizes for single or double curtain setups.",
      video: "/curtainvid/c2.mp4",
      features: [
        "Supports Heavy Fabric Curtains",
        "Smooth Gliding Design",
        "Custom Track Length Options",
      ],
    },
    {
      num: "03",
      tag: "Blinds Automation",
      title: "Auto Roller & Zebra Blinds",
      desc:
        "Modern automated blinds with precision and elegance for all window types.",
      video: "/curtainvid/c4.mp4",
      features: [
        "High Precision Motor Control",
        "Sunlight Automation",
        "Perfect for Homes & Offices",
      ],
    }
  ];

  /* SCROLL TO CONTACT FORM */
  const scrollToContact = () => {
    const el = document.getElementById("contact-form-anchor");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="/public/Hero/cauto.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl">
            Curtain <span className="text-orange-300 underline">Automation</span>
          </h1>
          <p className="text-white/90 mt-5 text-lg md:text-xl">
            Transform your windows with intelligent motorized curtains and blinds
            that move with your lifestyle.
          </p>
        </div>
      </section>

      {/* PRODUCT SECTIONS */}
      {sections.map((item, idx) => (
        <React.Fragment key={idx}>
          <VideoSection item={item} idx={idx} scrollToContact={scrollToContact} />
          <div className="w-full h-[2px] bg-gradient-to-r from-orange-500 via-black to-orange-500" />
        </React.Fragment>
      ))}

      {/* CONTACT FORM ANCHOR */}
      <div id="contact-form-anchor">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default CurtainAutomation;

/* VIDEO SECTION WITH MUTE / UNMUTE */

const VideoSection = ({ item, idx, scrollToContact }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full py-32 overflow-hidden bg-white">
      {/* BACKGLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px]
          bg-gradient-to-br from-orange-200/30 to-white/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[280px] h-[280px]
          bg-gradient-to-tl from-black/5 to-orange-100/20 blur-[120px] rounded-full" />
      </div>

      <div
        className={`max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center relative
        ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
      >
        {/* VIDEO BLOCK */}
        <div className="relative group w-full">
          <div className="absolute -inset-6 bg-gradient-to-br from-orange-300/20 to-black/10 
            rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]
            border border-black/5 transition-all duration-500 group-hover:scale-[1.03]">

            <video
              ref={videoRef}
              src={item.video}
              className="w-full h-[450px] object-cover transition-transform duration-[900ms]
              group-hover:scale-[1.07]"
              autoPlay
              loop
              muted
            />

            {/* MUTE / UNMUTE BUTTON */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded-full
              backdrop-blur-md text-sm shadow-lg hover:bg-black/80 transition"
            >
              {muted ? "🔇 Mute" : "🔊 Sound"}
            </button>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="relative max-w-xl">
          <span className="inline-block px-4 py-1 mb-4 rounded-full text-sm bg-black text-white shadow-md">
            {item.tag}
          </span>

          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
            {item.title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {item.desc}
          </p>

          <div className="space-y-4 mb-8">
            {item.features.map((f: string, i: number) => (
              <div className="flex items-center gap-3" key={i}>
                <GradientCheck />
                <p className="text-gray-800 font-medium">{f}</p>
              </div>
            ))}
          </div>

          {/* UPDATED BUTTON SCROLLS TO CONTACT FORM */}
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};
