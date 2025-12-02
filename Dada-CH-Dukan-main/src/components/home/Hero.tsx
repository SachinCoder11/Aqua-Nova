import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

type Slide = {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    id: "v1",
    type: "video",
    src: "/videos/Light/Dada Chi Light.mp4",
    title: "Lighting That Thinks With You",
    subtitle: "Create the perfect mood in every corner of your home."
  },
  {
    id: "v2",
    type: "video",
    src:"/videos/Light/lightaotimation.webm",
    title: "Live Smarter, Feel Better",
    subtitle: "Effortless control. Beautiful ambiance. Everyday comfort."
  },
  {
    id: "u1",
    type: "video",
    src: "/videos/Sensor/svid.webm",
    title: "Where Comfort Meets Intelligence",
    subtitle: "Lighting that adapts to your lifestyle automatically."
  },
  {
    id: "u2",
    type: "image",
    src: "/images/Indoor/Celling.png",
    title: "Crafting The Perfect Atmosphere",
    subtitle: "Smarter illumination for modern living spaces."
  }
];

const AUTO = 6000;

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [index]);

  function startTimer() {
    stopTimer();
    timer.current = window.setTimeout(() => {
      nextSlide();
    }, AUTO);
  }

  function stopTimer() {
    if (timer.current) clearTimeout(timer.current);
  }

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* SLIDES */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity duration-[1200ms]"
          style={{ opacity: index === i ? 1 : 0 }}
        >
          {slide.type === "image" ? (
            <img
              src={slide.src}
              className="w-full h-full object-cover"
              draggable="false"
            />
          ) : (
            <video
              src={slide.src}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </div>
      ))}

      {/* TEXT */}
      <div className="absolute inset-0 z-30 flex items-center px-8 md:px-24">
        <div className="max-w-3xl">

          <h3 className="text-white/70 mb-3 tracking-wide text-sm md:text-base">
            Convenience Assured With
          </h3>

          {/* TITLE WITH GRADIENT TEXT */}
          <h1
            key={slides[index].title}
            className="
              font-bold 
              text-3xl md:text-6xl 
              mb-4 leading-tight
              bg-gradient-to-r from-orange-500 to-yellow-300 
              bg-clip-text text-transparent
            "
          >
            {slides[index].title}
          </h1>

          {/* SUBTITLE WITH GRADIENT TEXT */}
          <p
            key={slides[index].subtitle}
            className="
              text-base md:text-xl max-w-xl mb-8
              bg-gradient-to-r from-orange-400 to-orange-200 
              bg-clip-text text-transparent
            "
          >
            {slides[index].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-md w-full sm:w-auto">
                Contact Us
              </button>
            </Link>

            <button className="px-6 py-3 border border-white/40 text-white rounded-full flex items-center gap-2 backdrop-blur-md w-full sm:w-auto">
              <Play size={18} /> Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="
          hidden md:flex
          absolute left-6 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full bg-black/40 border border-white/20
          items-center justify-center text-white z-40
        "
      >
        <svg width="20" height="20">
          <path d="M14 5L7 12L14 19" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="
          hidden md:flex
          absolute right-6 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full bg-black/40 border border-white/20
          items-center justify-center text-white z-40
        "
      >
        <svg width="20" height="20">
          <path d="M10 5L17 12L10 19" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
