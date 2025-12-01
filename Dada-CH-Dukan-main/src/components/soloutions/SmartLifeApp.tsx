import React from "react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";
import {
  Smartphone,
  Info,
  Bell,
  BarChart3,
  Share2,
  Settings,
  Sparkles,
  Cpu,
} from "lucide-react";

const SmartLifeApp = () => {
  const featureCards = [
    { icon: <Smartphone size={32} />, title: "Live Device Status" },
    { icon: <Bell size={32} />, title: "Instant Alerts" },
    { icon: <Sparkles size={32} />, title: "Automation Scenes" },
    { icon: <Share2 size={32} />, title: "Home Sharing" },
    { icon: <BarChart3 size={32} />, title: "Energy Analytics" },
    { icon: <Cpu size={32} />, title: "Voice Assistant Support" },
  ];

  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO */}
      <section className="grid md:grid-cols-2 max-w-7xl mx-auto px-6 py-24 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Smart Life <span className="text-orange-500">App</span>
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Control every smart device from one powerful, elegant, and lightning-fast app.
            The future experience is being crafted.
          </p>

          <p className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-xl text-sm font-medium">
            Coming Soon
          </p>
        </div>

        {/* MOCKED APP UI */}
        <div className="flex justify-center">
          <div className="bg-black rounded-3xl p-6 w-[330px] h-[650px] shadow-2xl relative">
            {/* Fake Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-800 w-40 h-5 rounded-full" />

            {/* Fake App UI */}
            <div className="mt-14 text-center text-white">
              <h2 className="text-xl font-semibold">Smart Life</h2>
              <p className="text-gray-400 text-sm mt-2">Your Home, Smarter</p>

              <div className="grid grid-cols-3 gap-6 mt-10 px-4">
                {[
                  { icon: <Settings size={30} />, label: "Controls" },
                  { icon: <Cpu size={30} />, label: "Automation" },
                  { icon: <Bell size={30} />, label: "Alerts" },
                  { icon: <Share2 size={30} />, label: "Sharing" },
                  { icon: <BarChart3 size={30} />, label: "Energy" },
                  { icon: <Info size={30} />, label: "More" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-gray-900/40 p-4 rounded-2xl"
                  >
                    <div className="text-orange-400">{item.icon}</div>
                    <p className="text-xs mt-2 text-gray-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-20">
        <h2 className="text-center text-3xl font-bold">
          App <span className="text-orange-500">Features</span>
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mt-12">
          {featureCards.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-orange-500 mb-4">{f.icon}</div>
              <h3 className="font-semibold text-xl">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Seamless and intuitive control experience.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
        <img
          src="/src/images/Light Photo/Apppreview.png"
          className="rounded-2xl shadow-xl"
        />

        <div>
          <h2 className="text-3xl font-bold">
            Unified Control, <span className="text-orange-500">One App</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Every device, every automation, every alert.  
            All in one unified interface designed for speed and simplicity.
          </p>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default SmartLifeApp;
