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
    image: "/images/sagar-bhise.jpg",
    group: "lead",
  },
  {
    id: "ujjwal",
    name: "Ujjwal Bhise",
    title: "Owner",
    description: "Owner and strategic advisor.",
    quote:
      "Leadership isn’t a position — it’s the consistency to build, guide, and uplift.",
    image: "/images/ujjwal-bhise.jpg",
    group: "lead",
  },
  {
    id: "rohini",
    name: "Rohini Patil",
    title: "Business Development Manager",
    description: "Part of Smart Life Solutions team.",
    image: "/images/rohini-patil.jpg",
  },
  {
    id: "kiran",
    name: "Kiran Sahane",
    title: "Account",
    description: "Part of Smart Life Solutions team.",
    image: "/images/kiran-sahane.jpg",
  },
  {
    id: "nilesh",
    name: "Nilesh Pawar",
    title: "Sales Developer",
    description: "Part of Smart Life Solutions team.",
    image: "/images/nilesh-pawar.jpg",
  },
  {
    id: "sachin",
    name: "Sachin D",
    title: "Web & Technical Developer",
    description: "Part of Smart Life Solutions team.",
    image: "/images/sachin-d.jpg",
  },
  {
    id: "urmi",
    name: "Urmi",
    title: "Manager",
    description: "Part of Smart Life Solutions team.",
    image: "/images/urmi.jpg",
  },
  {
    id: "sheetal",
    name: "Sheetal Jadhav",
    title: "Customer Services",
    description: "Part of Smart Life Solutions team.",
    image: "/images/sheetal-jadhav.jpg",
  },
  {
    id: "amit",
    name: "Amit Bhole",
    title: "IT Support",
    description: "Part of Smart Life Solutions team.",
    image: "/images/amit-bhole.jpg",
  },
  {
    id: "nikhil",
    name: "Nikhil Bhole",
    title: "Technical Head",
    description: "Part of Smart Life Solutions team.",
    image: "/images/nikhil-bhole.jpg",
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
            The people powering Smart Life Solutions — designers, builders, and support who make intelligent living simple.
          </p>
        </div>

        {/* FOUNDERS PANEL */}
        <div className="mb-16">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-[#f2e9df] bg-gradient-to-br from-[#fff4e8] to-[#ffe8d4] p-10 md:p-14">
            <div className="absolute inset-0 opacity-20 bg-[url('/textures/noise.png')] mix-blend-soft-light pointer-events-none" />

            {/* EQUAL HEIGHT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch relative z-10">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex flex-col items-center text-center justify-between h-full"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-lg mb-5 border-4 border-white">
                      <img src={lead.image} alt={lead.name} className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900">{lead.name}</h3>
                    <p className="text-orange-600 text-lg font-semibold">{lead.title}</p>
                    <p className="text-gray-700 mt-4 max-w-sm">{lead.description}</p>

                    {lead.quote && (
                      <p className="mt-6 italic font-semibold text-gray-800 max-w-md">
                        “{lead.quote}”
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-sm px-6 py-2 rounded-full shadow-lg">
              Leadership Panel
            </div>
          </div>
        </div>

        {/* NEW CREW SECTION */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Team</h3>
          <p className="text-gray-600 mt-2">
            People who bring Smart Life Solutions to life.
          </p>
        </div>

        {/* HIGHLIGHT PANEL BACKGROUND */}
        <div className="bg-[#fff4e0] rounded-3xl p-6 md:p-10 shadow-md">

          {/* RESPONSIVE GRID */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {others.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="relative rounded-xl w-full max-w-[260px]"
              >
                <div
                  className="
                    rounded-xl p-[2px] bg-gradient-to-r from-black to-orange-500 
                    transition-all duration-300
                    hover:-translate-y-2 hover:scale-[1.03]
                    hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]
                    hover:shadow-orange-500/30
                  "
                >
                  <div className="p-4 rounded-lg bg-[#fffef8] shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
                    <div className="flex flex-col items-center">
                      <div className="w-28 h-28 rounded-md overflow-hidden mb-3 ring-4 ring-white shadow-sm bg-white">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>

                      <h5 className="text-lg font-bold text-gray-900 text-center">{member.name}</h5>
                      <p className="text-sm text-orange-600 font-semibold">{member.title}</p>
                      <p className="text-xs text-gray-700 text-center mt-2">{member.description}</p>

                      <div className="mt-3 flex space-x-2">
                        <span className="px-2 py-1 text-xs bg-[#fff5e6] rounded-full border border-[#ffd2a8]">A+ Team</span>
                        <span className="px-2 py-1 text-xs bg-[#eefbf7] rounded-full border border-[#c8f0e8]">Reliable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founders;
