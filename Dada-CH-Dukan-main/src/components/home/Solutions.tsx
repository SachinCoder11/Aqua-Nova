// import { Home, Building, HeartPulse, Hotel } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useRef } from "react";

// const Solutions = () => {
//   const solutions = [
//     {
//       icon: Home,
//       title: "Home Automation",
//       description:
//         "Lighting, climate, scenes — your home responds instantly.",
//       colors: "from-orange-500 to-yellow-500",
//     },
//     {
//       icon: Building,
//       title: "Office Automation",
//       description:
//         "Smart meeting rooms, access control, and energy management.",
//       colors: "from-blue-500 to-cyan-400",
//     },
//     {
//       icon: HeartPulse,
//       title: "Hospital Automation",
//       description:
//         "Patient monitoring, secure access, and reliable safety systems.",
//       colors: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: Hotel,
//       title: "Hotel Automation",
//       description:
//         "Luxury guest experiences powered by seamless automation.",
//       colors: "from-green-500 to-teal-400",
//     },
//   ];

//   return (
//     <section className="relative py-28 bg-white overflow-hidden">

//       {/* ==================== Animated SVG Waves ==================== */}
//       <svg
//         className="absolute top-0 left-0 w-full opacity-30"
//         height="180"
//         viewBox="0 0 1440 320"
//       >
//         <path
//           fill="#f97316"
//           d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,165.3C672,160,768,160,864,181.3C960,203,1056,245,1152,250.7C1248,256,1344,224,1392,208L1440,192V0H0Z"
//         ></path>
//       </svg>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-20">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-5xl font-extrabold mb-4 font-[Poppins]"
//           >
//             <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
//               Smart Life Solutions
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-gray-600 text-xl max-w-3xl mx-auto font-[Poppins]"
//           >
//             Intelligence That Lives With You — crafted for modern living.
//           </motion.p>
//         </div>

//         {/* ==================== Grid ==================== */}
//         <div className="grid md:grid-cols-2 gap-10">

//           {solutions.map((sol, index) => (
//             <Card3D key={index} sol={sol} />
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// /* ==================== Magic 3D Card Component ==================== */
// const Card3D = ({ sol }: any) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: any) => {
//     const card = cardRef.current;
//     if (!card) return;

//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;

//     card.style.transform = `rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
//   };

//   const handleMouseLeave = () => {
//     const card = cardRef.current;
//     if (!card) return;

//     card.style.transform = `rotateX(0deg) rotateY(0deg)`;
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.03 }}
//       transition={{ duration: 0.4 }}
//       className="relative p-8 rounded-3xl bg-white border border-gray-200 shadow-xl
//       cursor-pointer transform-gpu transition-all duration-300"
//     >
//       {/* Glowing animated border loop */}
//       <motion.div
//         className="absolute inset-0 rounded-3xl border-2 border-transparent"
//         animate={{
//           boxShadow: [
//             "0px 0px 0px rgba(255,100,0,0)",
//             "0px 0px 30px rgba(255,120,0,0.8)",
//             "0px 0px 0px rgba(255,100,0,0)",
//           ],
//         }}
//         transition={{ duration: 3, repeat: Infinity }}
//       />

//       {/* Icon */}
//       <div
//         className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${sol.colors} 
//         flex items-center justify-center text-white mb-6 shadow-lg`}
//       >
//         <sol.icon size={40} />
//       </div>

//       {/* Title */}
//       <h3 className="text-3xl font-semibold text-gray-900 mb-4 font-[Poppins]">
//         {sol.title}
//       </h3>

//       {/* Description */}
//       <p className="text-gray-600 text-lg leading-relaxed font-[Poppins]">
//         {sol.description}
//       </p>
//     </motion.div>
//   );
// };

// export default Solutions;
