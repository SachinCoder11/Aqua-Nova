import {
  IconBulb,
  IconWind,
  IconShieldLock,
  IconDeviceRemote,
  IconDeviceMobile,
  IconPuzzle,
  IconChevronRight,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { icon: IconBulb, title: "Lighting Automation", description: "Smart lighting systems that enhance mood, save power, and adjust automatically.", link: "/products/lighting-automation" },
    { icon: IconWind, title: "HVAC & Audio-Video", description: "Climate control, multimedia, and ambience systems unified brilliantly.", link: "/products/audio-video" },
    { icon: IconShieldLock, title: "Security Solutions", description: "Advanced surveillance, access control, sensors, and real-time security alerts.", link: "/products/security" },
    { icon: IconDeviceRemote, title: "Smart Way Control", description: "High-precision smart controllers and switches for effortless automation.", link: "/products/smart-way-control" },
    { icon: IconDeviceMobile, title: "Smart Life App", description: "Control everything from one intuitive, modern, and secure mobile app.", link: "smart-life-app" },
    { icon: IconPuzzle, title: "3rd-Party Integrations", description: "Integrates with Alexa, HomeKit, and 30+ smart devices.", link: "/products/third-party-integration" },
  ];

  return (
    <section className="py-24 bg-[#f5f2ef]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-orange-600">Products</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our complete ecosystem built to enhance comfort, control, and security.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="
                group p-8 rounded-3xl cursor-pointer
                backdrop-blur-xl bg-white/20
                border border-white/30
                shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
                transition-all duration-300
              "
            >

              {/* ICON (Black default → Orange on hover) */}
              <div
                className="
                  w-14 h-14 mb-6 rounded-2xl flex items-center justify-center text-white
                  bg-black
                  group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600
                  transition-all duration-300
                "
              >
                <product.icon size={30} stroke={1.8} />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-700 leading-relaxed text-sm mb-6">
                {product.description}
              </p>

              {/* BUTTON */}
              <Link to={product.link}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="inline-flex items-center gap-2 text-orange-600 font-medium"
                >
                  Explore
                  <IconChevronRight size={18} />
                </motion.div>
              </Link>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
