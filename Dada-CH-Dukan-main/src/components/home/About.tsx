import { Building2, MapPin, Clock, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    { icon: Sparkles, title: "Adaptive Living", desc: "Your home responds intelligently to your lifestyle." },
    { icon: ShieldCheck, title: "Trusted Security", desc: "Advanced monitoring that keeps your space protected 24×7." },
    { icon: Clock, title: "Effortless Automation", desc: "Comfort, convenience, and control—always within reach." }
  ];

  const stats = [
    { icon: Building2, value: "20,000+", label: "Homes Automated" },
    { icon: MapPin, value: "50+", label: "Cities Active" },
    { icon: Heart, value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section className="bg-white py-24 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP STRIPE SECTION */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-center gap-10 mb-24">

          {/* TEXT */}
          <div className="flex-1 space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Smart Automation{" "}
              <span className="text-orange-400"> Made Invisible.</span>
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              True luxury is when your home adapts to you — silently, seamlessly, and intelligently.
              That’s the soul of Smart Life Solutions.
            </p>

            {/* INLINE STATS */}
            <div className="flex gap-8 mt-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl font-semibold">{s.value}</p>
                  <p className="text-gray-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* VIDEO */}
          <div className="flex-1 w-full">
            <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-black">
              <video
                className="w-full h-full max-h-80 object-cover"
                src="/videos/Light/autovid.mp4"
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
                // poster="/vidhero/fallback.jpg" // optional poster
              >
                {/* Fallback text */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-gray-200 rounded-xl p-8 hover:border-black transition bg-white"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-500 text-white flex items-center justify-center mb-4">
                <f.icon size={22} />
              </div>

              <h4 className="text-lg font-semibold text-black mb-2">{f.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
