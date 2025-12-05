import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: "sagar",
    name: "Sagar Bhise",
    title: "Founder & Head of Innovation",
    description:
      "Driving Smart Life Solutions with a vision for intuitive, human-centered automation.",
    quote:
      "Technology should disappear into the background, allowing people to live more beautifully, more comfortably, and more freely.",
    image: "/Team/Malik.png",
    group: "lead",
  },
  {
    id: "ujjwal",
    name: "Ujjwal Bhise",
    title: "Owner",
    description: "Owner and strategic advisor.",
    quote:
      "Leadership isn’t a position — it’s the consistency to build, guide, and uplift.",
    image: "/Team/Malkin.png",
    group: "lead",
  },
  {
    id: "rohini",
    name: "Rohini Patil",
    title: "Business Development Manager",
    description: "Part of Smart Life Solutions team.",
    image: "/Team/Rohini pati;.png",
  },
  {
    id: "kiran",
    name: "Kiran Sahane",
    title: "Account",
    description: "Part of Smart Life Solutions team.",
    image: "/Team/Kiransir.png",
  },
  {
    id: "nilesh",
    name: "Nilesh Pawar",
    title: "Sales Developer",
    description: "Part of Smart Life Solutions team.",
    image: "/Team/Nileshpawar.png",
  },
  {
    id: "sachin",
    name: "Sachin D",
    title: "Web & Technical Developer",
    description: "Part of Smart Life Solutions team.",
    image: "/Team/Sachin.png",
  },
  {
    id: "urmi",
    name: "Urmi",
    title: "Manager",
    description: "Part of Smart Life Solutions team.",
    image: "/Team/urmila generted.png",
  },
  {
    id: "sheetal",
    name: "Sheetal Jadhav",
    title: "Customer Services",
    description: "Part of Smart Life Solutions team.",
    image: "/Team/Sletaljadhav.png",
  },
];

const Founders = () => {
  const leads = teamMembers.filter((m) => m.group === "lead");
  const others = teamMembers.filter((m) => m.group !== "lead");

  return (
    <section className="py-24 bg-[#fffdf8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Meet the <span className="text-orange-600">Team</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The people powering Smart Life Solutions — designers, builders, and
            support who make intelligent living simple.
          </p>
        </div>

        {/* FOUNDERS */}
        <div className="mb-16">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-[#f2e9df] bg-gradient-to-br from-[#fff4e8] to-[#ffe8d4] p-10 md:p-14">
            <div className="absolute inset-0 opacity-20 bg-[url('/textures/noise.png')] mix-blend-soft-light" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch relative z-10">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-lg mb-5 border-4 border-white">
                    <img
                      src={lead.image}
                      alt={lead.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900">
                    {lead.name}
                  </h3>
                  <p className="text-orange-600 text-lg font-semibold">
                    {lead.title}
                  </p>
                  <p className="text-gray-700 mt-4 max-w-sm">
                    {lead.description}
                  </p>

                  {lead.quote && (
                    <p className="mt-6 italic font-semibold text-gray-800 max-w-md">
                      {lead.quote}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-sm px-6 py-2 rounded-full shadow-lg">
              Leadership Panel
            </div>
          </div>
        </div>

        {/* TEAM SCROLLER */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Our Team
          </h3>
          <p className="text-gray-600 text-center mb-8">
            People who bring Smart Life Solutions to life.
          </p>

          <div className="relative overflow-hidden rounded-3xl bg-[#fff4e0] shadow-xl pt-10 pb-16 select-none">
            <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20" />

            {/* LEFT ARROW */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 backdrop-blur-md border border-orange-300 shadow-md w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-orange-600 text-lg">❮</span>
            </div>

            {/* RIGHT ARROW */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 backdrop-blur-md border border-orange-300 shadow-md w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-orange-600 text-lg">❯</span>
            </div>

            {/* SCROLLER */}
            <motion.div
              className="flex gap-6 whitespace-nowrap px-4 relative z-10"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // faster
                ease: "linear",
              }}
            >
              {[...others, ...others].map((member, i) => (
                <div
                  key={`${member.id}-${i}`}
                  className="w-[260px] bg-white border border-orange-300 shadow-lg rounded-3xl overflow-hidden flex-shrink-0"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-bold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-orange-600 font-semibold text-sm">
                      {member.title}
                    </p>
                    <p className="text-gray-700 text-xs mt-2">
                      {member.description}
                    </p>

                    <div className="mt-3 flex gap-2">
                      <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full border border-orange-300">
                        A+ Team
                      </span>
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full border border-green-300">
                        Reliable
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
