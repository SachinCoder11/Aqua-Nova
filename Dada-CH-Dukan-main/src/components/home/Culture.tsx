import { motion } from "framer-motion";

const Culture = () => {
  const images = [
    { id: 1, span: "row-span-2", src: "https://swarjyaenterprises.com/wp-content/uploads/2025/03/home-interior-lights.jpg" },
    { id: 2, span: "row-span-1", src: "https://swarjyaenterprises.com/wp-content/uploads/2025/03/home-outdoor-lighting-ideas.jpg" },
    { id: 3, span: "row-span-1", src: "https://swarjyaenterprises.com/wp-content/uploads/2025/03/bb476a0m.jpg" },
    { id: 4, span: "row-span-2", src: "https://swarjyaenterprises.com/wp-content/uploads/2025/03/qizqzuap.jpg" },
    { id: 5, span: "row-span-1", src: "https://swarjyaenterprises.com/wp-content/uploads/2025/03/Curtain-Banner-Desktop-min.jpg" },
    { id: 6, span: "row-span-1", src: "https://swarjyaenterprises.com/wp-content/uploads/2025/03/67bc187c226c696236053e6a.jpeg" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A workplace built on innovation, collaboration, and human-centered values.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className={`${img.span} relative rounded-2xl overflow-hidden bg-gray-200 group`}
            >
              {/* Background Image */}
              <img
                src={img.src}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                alt=""
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Smart Life Projects
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Culture;
