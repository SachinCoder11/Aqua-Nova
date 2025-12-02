import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const Founders = () => {
  const founder = {
    name: "Sagar Bhise",
    title: "Founder & Head of Innovation",
    description:
      "Driving Smart Life Solutions with a vision for intuitive, human-centered automation that blends intelligence with daily living.",
    quote:
      "“Technology should disappear into the background, allowing people to live more beautifully, more comfortably, and more freely.”",

    // IMPORTANT: DO NOT USE INSTAGRAM LINKS (they expire)
    // Put your real image inside /public/images/ folder
    image: "/Malik/Malik ka photo.jpg"
  };

  return (
    <section className="py-24 bg-[#faf7f3] bg-gradient-to-b from-[#fff7f0] to-[#f5f2ef] font-[Poppins]">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-orange-600">Founder</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The visionary leading Smart Life Solutions into a future of intelligent and effortless living.
          </p>
        </div>

        {/* FOUNDER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="
            max-w-3xl mx-auto p-12 rounded-3xl
            bg-[#f0ece7]/80 backdrop-blur-md
            border border-[#dcd5cc]
            shadow-[0_8px_28px_rgba(0,0,0,0.10)]
            hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
            transition-all duration-300
          "
        >
          {/* PHOTO */}
          <div className="w-40 h-40 rounded-2xl overflow-hidden mx-auto mb-8 shadow-md bg-[#eee]">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* NAME */}
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-1">
            {founder.name}
          </h3>

          {/* TITLE */}
          <p className="text-orange-600 text-center font-medium mb-6">
            {founder.title}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-700 leading-relaxed text-center mb-10 px-4">
            {founder.description}
          </p>

          {/* QUOTE BOX - warm themed */}
          <div
            className="
              bg-[#ece7e1] border border-[#ded7cf]
              rounded-2xl p-6 text-center shadow-sm
              mb-10
            "
          >
            <p className="text-gray-800 italic leading-relaxed">
              {founder.quote}
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center space-x-5">
            <a
              href="#"
              className="
                p-3 rounded-xl bg-white/70 backdrop-blur-sm
                border border-gray-300
                hover:bg-orange-100 hover:border-orange-300
                transition-all
                shadow-sm
              "
            >
              <Linkedin size={20} className="text-gray-700" />
            </a>

            <a
              href="#"
              className="
                p-3 rounded-xl bg-white/70 backdrop-blur-sm
                border border-gray-300
                hover:bg-orange-100 hover:border-orange-300
                transition-all
                shadow-sm
              "
            >
              <Mail size={20} className="text-gray-700" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Founders;
