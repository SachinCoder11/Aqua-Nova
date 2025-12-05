import React from "react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const GradientCheck = () => (
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

const SmartLights: React.FC = () => {
  const sections = [
    {
      num: "01",
      tag: "LED Strip Controllers",
      title: "Premium RGB / RGBW Controllers",
      desc:
        "Advanced ambient lighting controllers with precision color control, automation, and scene customization.",
      img: "/Lightimages/Rgb.jpg",
      features: [
        "RGB / RGBW / CCT Smart Control",
        "Mobile App + Touch Panel Support",
        "Music Sync, Scenes, Scheduling",
      ],
    },
    {
      num: "02",
      tag: "Dimmable Modules",
      title: "Smooth Zero-Flicker Dimming",
      desc:
        "Advanced dimming modules designed for modern LED lighting, perfect for ambience and task lighting.",
      img: "/Lightimages/dimmer.jpg",
      features: [
        "Zero-Flicker Dim Technology",
        "Compatible With All LED & COB Lights",
        "App, Voice & Touch Panel Support",
      ],
    },
    {
      num: "03",
      tag: "Profile Patti Lights",
      title: "Architectural Linear Lighting",
      desc:
        "Customizable profile lighting built for walls, ceilings, halls, and modern interior design patterns.",
      img: "/Lightimages/archi.jpg",
      features: [
        "Premium Slimline Design",
        "Unlimited Layout Customization",
        "Perfect for Homes & Offices",
      ],
    },
    {
      num: "04",
      tag: "Magnetic Track Lights",
      title: "Modular Magnetic Spotlights",
      desc:
        "Effortlessly repositionable lighting system perfect for galleries, studios, and elegant living spaces.",
      img: "/Lightimages/spot.jpg",
      features: [
        "Fully Modular Magnetic Track System",
        "Focused + Ambient Lighting Options",
        "Tool-Free Adjustment",
      ],
    },
    {
      num: "05",
      tag: "Regular Architectural Lights",
      title: "High-Performance Ambient Lights",
      desc:
        "Powerful, efficient, and aesthetically clean architectural lights made for everyday use.",
      img: "/Lightimages/hi.jpg",
      features: [
        "Bright & Efficient Illumination",
        "Perfect for Daily Usage",
        "Clean Modern Aesthetic",
      ],
    },
  ];

  // Scroll to ContactForm
  const scrollToContact = () => {
    const el = document.getElementById("contact-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <video
          src="/videos/Light/Dada Chi Light.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Smart <span className="text-orange-400 underline">Lights</span>
          </h1>
          <p className="text-white/90 mt-5 text-lg md:text-xl">
            Intelligent lighting that adapts to your lifestyle, enhances ambience,
            and transforms your space beautifully.
          </p>
        </div>
      </section>

      {/* PRODUCT SECTIONS */}
      {sections.map((item, idx) => (
        <React.Fragment key={idx}>
          <section className="relative w-full py-32 overflow-hidden bg-white">
            {/* SOFT BACKGROUND EFFECTS */}
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

              {/* IMAGE */}
              <div className="relative group w-full">
                <div className="absolute -inset-6 bg-gradient-to-br from-orange-300/20 to-black/10 
                  rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]
                  border border-black/5 transition-all duration-500 group-hover:scale-[1.03]">
                  <img
                    src={item.img}
                    className="w-full h-[450px] object-cover transition-transform duration-[900ms]
                    group-hover:scale-[1.07]"
                  />
                </div>
              </div>

              {/* TEXT */}
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
                  {item.features.map((f, i) => (
                    <div className="flex items-center gap-3" key={i}>
                      <GradientCheck />
                      <p className="text-gray-800 font-medium">{f}</p>
                    </div>
                  ))}
                </div>

                {/* UPDATED BUTTON */}
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
                >
                  Know More
                </button>
              </div>
            </div>
          </section>

          <div className="w-full h-[2px] bg-gradient-to-r from-orange-500 via-black to-orange-500" />
        </React.Fragment>
      ))}

      {/* Contact Form anchor point */}
      <div id="contact-form-section">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
};

export default SmartLights;
