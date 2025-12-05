import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const SmartGates: React.FC = () => {
  const devices = [
    {
      title: "Sliding Gate Motor",
      text: "Heavy-duty automation with smooth lateral motion and high load handling—ideal for residential, villa and industrial gates.",
      video: "/gatevid/gatevideo.mp4",
      videoHeight: "h-[420px]"
    },
    {
      title: "Shutter & Garage Motor",
      text: "Reliable rolling shutter automation with overload safety, auto-locking, and whisper-quiet performance.",
      video: "/gatevid/shutter.mp4",
      videoHeight: "h-72"
    },
    {
      title: "Boom Barrier",
      text: "High-speed barrier designed for societies, commercial premises and access-controlled parking zones.",
      img: "https://swarjyaenterprises.com/wp-content/uploads/2025/03/bb476a0m.jpg",
      videoHeight: "h-72"
    },
    {
      title: "Cantilever Gate Motor",
      text: "Trackless sliding automation with zero ground obstruction—built for premium modern architecture.",
      video: "/gatevid/Untitled design.mp4",
      videoHeight: "h-72"
    }
  ];

  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
     <img  src="/Hero/gatehero.png" alt="" className="absolute inset-0 w-full h-full object-cover"/>

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/20"></div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl">
            Smart Gate Automation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Intelligent, secure and effortless entry systems for modern homes & commercial spaces.
          </p>
        </motion.div>
      </section>

      {/* SECTION TITLE */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Gate Automation Devices
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Engineered for precision, durability and everyday convenience.
        </motion.p>
      </section>

      {/* TIMELINE */}
      <section className="relative max-w-6xl mx-auto px-6 pb-40">

        <div className="absolute left-1/2 top-0 bottom-0 w-[6px] 
          bg-gradient-to-b from-black via-orange-500 to-black 
          rounded-full -translate-x-1/2 hidden md:block" />

        <div className="flex flex-col gap-32">
          {devices.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isYoutube = item.video && item.video.includes("youtube");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative"
              >

                {/* CENTER NODE */}
                <div className="hidden md:block absolute left-1/2 top-1/2 
                    -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-400/50 blur-xl rounded-full animate-ping" />
                    <div className="relative w-8 h-8 bg-orange-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                </div>

                {/* MEDIA */}
                <div className={`${isLeft ? "md:pr-10" : "md:order-2 md:pl-10"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl shadow-xl overflow-hidden border border-gray-200 bg-white hover:shadow-2xl"
                  >
                    {isYoutube ? (
                      <iframe
                        src={item.video}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={`w-full ${item.videoHeight} rounded-xl`}
                      />
                    ) : item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`w-full object-cover ${item.videoHeight}`}
                      />
                    ) : (
                      <img
                        src={item.img}
                        className={`w-full object-cover ${item.videoHeight}`}
                      />
                    )}
                  </motion.div>
                </div>

                {/* TEXT */}
                <div className={`${isLeft ? "md:pl-10" : "md:order-1 md:pr-10"}`}>
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">{item.text}</p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto p-[2px] rounded-3xl 
          bg-gradient-to-r from-black via-orange-600 to-black shadow-2xl">
          <div className="rounded-3xl bg-white p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartGates;
