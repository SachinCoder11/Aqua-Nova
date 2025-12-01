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
    image: "/src/images/Light Photo/malik ka photo.jpg" // replace with actual image
  };

  return (
    <section className="py-24 bg-white font-[Poppins]">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-orange-600">Founder</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The visionary leading Smart Life Solutions into a future of intelligent and effortless living.
          </p>
        </div>

        {/* FOUNDER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="p-10 rounded-3xl bg-white border border-gray-200 shadow-sm 
                     hover:border-black transition-all duration-300 max-w-3xl mx-auto"
        >
          {/* PHOTO */}
          <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* NAME & TITLE */}
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-1">
            {founder.name}
          </h3>
          <p className="text-orange-600 font-medium text-center mb-4">
            {founder.title}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-center leading-relaxed mb-8 px-4">
            {founder.description}
          </p>

          {/* QUOTE */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center mb-8">
            <p className="text-gray-700 italic leading-relaxed">
              {founder.quote}
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center space-x-4">
            <button className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
              <Linkedin size={20} className="text-gray-700" />
            </button>
            <button className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
              <Mail size={20} className="text-gray-700" />
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Founders;
