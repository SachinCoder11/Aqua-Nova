import React from "react";
import { Lock, Fingerprint, ShieldCheck, Key, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import ContactForm from "../sections/ContactForm";

const SmartDoorlocks: React.FC = () => {
  const features = [
    {
      icon: <Fingerprint className="w-8 h-8 text-orange-500" />,
      title: "Biometric Unlock",
      desc: "Ultra-fast fingerprint recognition with 360° accuracy.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      title: "Anti-Theft Protection",
      desc: "Tamper alerts, intrusion detection, and auto-lock.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: "Mobile App Control",
      desc: "Unlock remotely, check logs, and manage access.",
    },
    {
      icon: <Key className="w-8 h-8 text-orange-500" />,
      title: "Multiple Access Modes",
      desc: "PIN, RFID, NFC, OTP, and more for flexible access.",
    },
  ];

  const products = [
    {
      title: "Fingerprint Door Lock",
      text: "Fast biometric unlocking with premium metal finish.",
      img: "/images/Doorlock/people-interacting-with-ai-their-daily-lives.jpg",
    },
    {
      title: "Video Smart Lock",
      text: "Built-in HD camera, two-way talk, and mobile unlock.",
      img: "/images/Doorlock/smart-lock-with-digital-interface-futuristic-design.jpg",
    },
    {
      title: "Rim Smart Lock",
      text: "Compact, stylish, and secure with all access modes.",
      img: "/Public/images/Doorlock/drlk1.jpeg",
    },
    {
      title: "Premium Metal Lock",
      text: "High-grade metal body designed for modern homes.",
      img: "/images/Doorlock/drlk2.jpg",
    },
  ];

  return (
    <div className="w-full bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <video
          src="/images/Gate/stock-footage-opening-automatic-property-gate-with-remote-controller.webm"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            Smart <span className="text-orange-500">Door Locks</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Keyless entry designed for security, convenience, and control.
          </p>

          <Link to="/products/smart-doorlocks/all">
            <button className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 transition rounded-xl font-semibold shadow-lg">
              See All Products
            </button>
          </Link>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Designed For Modern Living
        </h2>
        <p className="text-gray-300 mt-5 text-lg leading-relaxed max-w-3xl mx-auto">
          Smart locks combining elegant aesthetics with advanced security.
        </p>
      </section>

      {/* FEATURES */}
      <section className="bg-[#111] py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 px-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-[#1a1a1a] border border-orange-500/20 hover:border-orange-500/40 transition shadow-lg"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CARDS PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Featured Locks
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
          {products.slice(0, 3).map((p, i) => (
            <div
              key={i}
              className="bg-[#111] rounded-3xl shadow-xl border border-orange-500/20 hover:border-orange-500/40 p-6 transition group"
            >
              <img
                src={p.img}
                className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition"
              />

              <h3 className="text-xl font-bold mt-5">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.text}</p>

              <div className="mt-4 h-[3px] w-16 bg-orange-500 group-hover:w-24 transition rounded-full" />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/products/smart-doorlocks/all">
            <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 transition rounded-xl font-semibold shadow-lg">
              Browse Full Catalog
            </button>
          </Link>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default SmartDoorlocks;
