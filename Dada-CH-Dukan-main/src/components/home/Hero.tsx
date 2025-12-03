import React, { useEffect, useRef, useState } from "react";

type Slide = {
  id: string;
  src: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  { id: "i1", src: "/Hero/h5.png", title: "Lighting That Thinks With You", subtitle: "Create the perfect mood in every corner of your home." },
  { id: "i2", src: "/Hero/h4.jpg", title: "Live Smarter, Feel Better", subtitle: "Effortless control. Beautiful ambiance. Everyday comfort." },
  { id: "i3", src: "/Hero/h6.png", title: "Where Comfort Meets Intelligence", subtitle: "Lighting that adapts to your lifestyle automatically." },
  { id: "i4", src: "/Hero/h7.png", title: "Crafting The Perfect Atmosphere", subtitle: "Smarter illumination for modern living spaces." }
];

const AUTO = 9000;

// ==================================================
// CLEAN SMOOTH HACKER TEXT EFFECT
// ==================================================
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HackerText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 35 }) => {
  const [display, setDisplay] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setDisplay(text.replace(/./g, " "));

    const interval = window.setInterval(() => {
      const i = indexRef.current;

      if (i >= text.length) {
        clearInterval(interval);
        return;
      }

      setDisplay((prev) => {
        const chars = prev.split("");

        chars[i] = text[i];

        for (let j = i + 1; j < Math.min(i + 3, text.length); j++) {
          chars[j] = LETTERS[Math.floor(Math.random() * LETTERS.length)];
        }

        return chars.join("");
      });

      indexRef.current++;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-200 text-transparent bg-clip-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
      {display}
    </span>
  );
};

// ==================================================
// HERO COMPONENT
// ==================================================
const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [index]);

  const startTimer = () => {
    stopTimer();
    timer.current = window.setTimeout(() => nextSlide(), AUTO);
  };

  const stopTimer = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  const nextSlide = () => setIndex((p) => (p + 1) % slides.length);
  const prevSlide = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* SLIDES */}
      {slides.map((slide, i) => (
        <img
          key={slide.id}
          src={slide.src}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms]"
          style={{ opacity: index === i ? 1 : 0 }}
          draggable={false}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* TEXT */}
      <div className="absolute inset-0 z-20 flex items-center px-8 md:px-24">
        <div className="max-w-3xl">

          {/* UPDATED: HackerText applied + brighter */}
          <h3 className="mb-3 tracking-wide text-sm md:text-base">
  <span className="text-white/90">
    <HackerText 
      key={`static-${index}`} 
      text="Convenience Assured With" 
      speed={25} 
    />
  </span>
</h3>


          <h1 className="font-bold text-3xl md:text-6xl mb-4 leading-tight">
            <HackerText text={slides[index].title} speed={40} />
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl max-w-xl mb-8">
            <HackerText text={slides[index].subtitle} speed={30} />
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-full
              font-mono uppercase tracking-wider shadow-lg border border-white/20 hover:shadow-orange-500/20 transition"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40
        border border-white/20 items-center justify-center text-white z-30"
      >
        <svg width="20" height="20"><path d="M14 5L7 12L14 19" stroke="white" strokeWidth="2" /></svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40
        border border-white/20 items-center justify-center text-white z-30"
      >
        <svg width="20" height="20"><path d="M10 5L17 12L10 19" stroke="white" strokeWidth="2" /></svg>
      </button>

      {/* DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${index === i ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
