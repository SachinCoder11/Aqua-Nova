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
    {
      icon: IconBulb,
      title: "Lighting Automation",
      description:
        "Smart lighting systems that enhance mood, save power, and adjust automatically.",
      link: "/products/lighting-automation",
    },
    {
      icon: IconWind,
      title: "HVAC & Audio-Video",
      description:
        "Climate control, multimedia, and ambience systems unified brilliantly.",
      link: "/products/hvac-audio-video",
    },
    {
      icon: IconShieldLock,
      title: "Security Solutions",
      description:
        "Advanced surveillance, access control, sensors, and real-time security alerts.",
      link: "/products/security",
    },
    {
      icon: IconDeviceRemote,
      title: "Smart Way Control",
      description:
        "High-precision smart controllers and switches for effortless automation.",
      link: "/products/smart-way-control",
    },
    {
      icon: IconDeviceMobile,
      title: "Smart Life App",
      description:
        "Control everything from one intuitive, modern, and secure mobile app.",
      link: "/products/smartlife-app",
    },
    {
      icon: IconPuzzle,
      title: "3rd-Party Integrations",
      description:
        "Integrates with Alexa, Google Home, HomeKit, and 30+ smart devices.",
      link: "/products/third-party-integration",
    },
  ];

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our{" "}
            <span className="text-orange-600">
              Products
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete ecosystem built to enhance comfort, control, and security.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-8 group rounded-2xl bg-white border border-gray-200 
                         hover:border-black transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 mb-6 rounded-xl bg-black 
                           flex items-center justify-center 
                           group-hover:bg-orange-600 transition-all duration-300"
              >
                <product.icon size={30} stroke={1.5} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {product.description}
              </p>

              {/* BUTTON */}
              <Link to={product.link}>
                <motion.div
                  whileHover={{ x: 4 }}
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
