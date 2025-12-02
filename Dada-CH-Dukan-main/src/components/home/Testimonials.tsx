import { motion } from "framer-motion";
import { Star } from "lucide-react";

const LinearTestimonials = () => {
  const testimonials = [
    { name: "Aarav Sharma", text: "Smart Life automation made my home feel truly intelligent.", rating: 5, w: "min-w-[330px]" },
    { name: "Riya Patel", text: "Our hotel guest experience went to another level.", rating: 5, w: "min-w-[360px]" },
    { name: "Amit Verma", text: "Added massive value to my premium apartments.", rating: 5, w: "min-w-[300px]" },
    { name: "Sarah Lewis", text: "Hospital automation has been incredibly reliable.", rating: 5, w: "min-w-[365px]" },
    { name: "Vikram Soni", text: "The Smart Life App is smooth, fast, and intuitive.", rating: 5, w: "min-w-[330px]" }
  ];

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-r from-[#fff9f3] via-[#fdf4eb] to-[#fff9f3] relative overflow-hidden">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          What People <span className="text-orange-600">Say</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-3">
          Smooth, warm, and premium — just like the experience we deliver.
        </p>
      </div>

      {/* LEFT + RIGHT FADES */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 
                      bg-gradient-to-r from-[#fff9f3] to-transparent z-20"></div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 
                      bg-gradient-to-l from-[#fff9f3] to-transparent z-20"></div>

      {/* MARQUEE */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 28, repeat: Infinity }}
        >
          {loopTestimonials.map((t, i) => (
            <div
              key={i}
              className={`
                ${t.w}
                bg-[#f4f0ea] border border-[#ded7cf]
                rounded-2xl p-6 shadow-[0_4px_22px_rgba(0,0,0,0.06)]
                hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]
                transition-all
              `}
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-500 fill-yellow-500 drop-shadow-[0_0_4px_rgba(255,200,0,0.45)]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-800 text-base mb-4 italic">“{t.text}”</p>

              {/* Name */}
              <p className="text-gray-900 font-semibold">{t.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default LinearTestimonials;
