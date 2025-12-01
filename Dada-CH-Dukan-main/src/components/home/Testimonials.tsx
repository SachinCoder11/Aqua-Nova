import { motion } from "framer-motion";
import { Star } from "lucide-react";

const LinearTestimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      text: "Smart Life automation made my home feel truly intelligent.",
      rating: 5,
    },
    {
      name: "Riya Patel",
      text: "Our hotel guest experience went to another level.",
      rating: 5,
    },
    {
      name: "Amit Verma",
      text: "Added massive value to my premium apartments.",
      rating: 5,
    },
    {
      name: "Sarah Lewis",
      text: "Hospital automation has been incredibly reliable.",
      rating: 5,
    },
    {
      name: "Vikram Soni",
      text: "The Smart Life App is smooth, fast, and intuitive.",
      rating: 5,
    }
  ];

  // Duplicate array for seamless loop
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          What People <span className="text-orange-600">Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Smooth, clean, and non-stop — just like the experience we deliver.
        </p>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity
          }}
        >
          {loopTestimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[350px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <div className="flex mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-base mb-4">
                “{t.text}”
              </p>

              <p className="text-gray-900 font-semibold">{t.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LinearTestimonials;
