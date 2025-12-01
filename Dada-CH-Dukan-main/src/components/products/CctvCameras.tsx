import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

/* Gradient Check Icon */
const GradientCheck = () => (
  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-md">
    <svg
      width="18"
      height="18"
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

const CctvCameras: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ==============================
          HERO
      =============================== */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

        <video
          src="/src/Videos/CCtv/CCtv1.webm"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

        {/* Soft glow */}
        <div className="absolute w-80 h-80 bg-orange-400/20 blur-[150px] rounded-full top-20 left-20"></div>
        <div className="absolute w-96 h-96 bg-orange-300/20 blur-[180px] rounded-full bottom-10 right-24"></div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl">
            Smart CCTV Surveillance
          </h1>
          <p className="mt-4 text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
            Advanced AI monitoring with crisp clarity, motion detection & secure remote access.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-32 bg-gradient-to-b from-white to-orange-50/30"></div>

      {/* ==============================
        SECTION 1 — SOLAR CAMERAS (Left image)
      =============================== */}
      <section className="py-24 bg-gradient-to-br from-orange-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE LEFT */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>

            <img
              src="https://swarjyaenterprises.com/wp-content/uploads/2025/03/Solar-Powered-Products-landingpage_image02.jpg"
              className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />
          </motion.div>

          {/* CONTENT RIGHT */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-black text-white rounded-full text-sm mb-4">
              Solar CCTV
            </span>

            <h2 className="text-4xl font-bold text-gray-900">
              Solar-Powered Smart Cameras
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Wireless, weatherproof, and built for areas without electricity.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "PTZ, Varifocal & Wide-Angle Models",
                "4G + WiFi Hybrid Connectivity",
                "Built-In SSD / eMMC Storage",
                "All-Weather Industrial Design"
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <GradientCheck />
                  <p className="text-gray-700">{f}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-28 bg-gradient-to-b from-white to-orange-50/20"></div>

      {/* ==============================
        SECTION 2 — INDOOR/OUTDOOR (Right image)
      =============================== */}
      <section className="py-24 bg-gradient-to-tl from-orange-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">

          {/* IMAGE RIGHT */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-200/20 to-yellow-300/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>

            <img
              src="/src/images/CCTV/cctv2.jpg"
              className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />
          </motion.div>

          {/* CONTENT LEFT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-black text-white rounded-full text-sm mb-4">
              Indoor & Outdoor
            </span>

            <h2 className="text-4xl font-bold text-gray-900">
              Indoor & Outdoor Cameras
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              HD clarity and smart alerts built for every location.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Smart IR Night Vision",
                "IP-Rated Waterproof Bodies",
                "Compact Dome Options",
                "Cloud + DVR/NVR Support",
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <GradientCheck />
                  <p className="text-gray-700">{f}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Divider */}
      <div className="h-28 bg-gradient-to-b from-white to-orange-50/20"></div>

      {/* ==============================
        PRODUCT GRID
      =============================== */}
      <section className="py-24 bg-gradient-to-br from-orange-50/20 to-white">
        <h2 className="text-4xl font-bold text-center">CCTV Camera Categories</h2>
        <p className="text-center text-gray-600 mt-4 max-w-xl mx-auto">
          A camera for every environment and surveillance need.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 mt-12">

          {[
            {
              title: "Indoor Dome Camera",
              img: "/src/images/CCTV/surveillance-camera-built-into-stone-wall-building.jpg",
              desc: "Smart panoramic indoor coverage."
            },
            {
              title: "Outdoor Bullet Camera",
              img: "/src/images/CCTV/view-round-modern-webcam-with-copy-space.jpg",
              desc: "Long-range outdoor protection."
            },
            {
              title: "360° PTZ Camera",
              img: "/src/images/CCTV/Untitled.jpg",
              desc: "Full movement with zoom & tracking."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg border border-orange-300/20 transition h-[420px]"
            >
              <img
                src={card.img}
                className="w-[180px] h-[180px] object-cover rounded-xl shadow-md"
              />

              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                {card.title}
              </h3>

              <p className="mt-2 text-gray-600 text-center">
                {card.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Divider */}
      <div className="h-20 bg-gradient-to-b from-orange-50/20 to-white"></div>

      {/* ==============================
          CONTACT FORM
      =============================== */}
      <section className="px-6 pb-32 pt-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white shadow-lg border border-orange-400/20 p-12">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mb-10" />
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CctvCameras;
