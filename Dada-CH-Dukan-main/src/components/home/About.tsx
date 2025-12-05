import { Building2, MapPin, Clock, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    { icon: Sparkles, title: "Adaptive Living", desc: "Your home responds intelligently to your lifestyle." },
    { icon: ShieldCheck, title: "Trusted Security", desc: "Advanced monitoring that keeps your space protected 24×7." },
    { icon: Clock, title: "Effortless Automation", desc: "Comfort, convenience, and control—always within reach." }
  ];

  const stats = [
    { icon: Building2, value: "200+", label: "Homes Automated" },
    { icon: MapPin, value: "50+", label: "Cities Active" },
    { icon: Heart, value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section className="bg-white py-24 font-[Nasalization] tracking-wide text-gray-900 antialiased">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP STRIPE SECTION */}
        <div className="bg-black rounded-2xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-center gap-10 mb-24">

          {/* TEXT */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug tracking-wider">
              Smart Automation <span className="text-orange-400">Made Invisible.</span>
            </h2>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-md tracking-wide">
              True luxury is when your home adapts silently, seamlessly, and intelligently.
              That’s the soul of Smart Life Solutions.
            </p>

            {/* INLINE STATS */}
            <div className="flex gap-10 mt-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl md:text-2xl font-bold tracking-widest">{s.value}</p>
                  <p className="text-gray-400 text-xs md:text-sm tracking-wide">{s.label}</p>
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
              >
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
              className="
                rounded-2xl p-8 transition
                bg-white
                border border-gray-200/60
                shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]
                hover:-translate-y-1
                hover:border-gray-300
              "
            >

              {/* ICON */}
              <div
                className="
                  w-14 h-14 rounded-xl
                  bg-gradient-to-br from-orange-500 to-orange-600
                  text-white flex items-center justify-center
                  shadow-md shadow-orange-500/25
                  ring-1 ring-orange-300/30
                  mb-5
                "
              >
                <f.icon size={26} strokeWidth={1.6} />
              </div>

              <h4 className="text-lg font-bold text-black mb-2 tracking-wider">{f.title}</h4>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed tracking-wide">{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
