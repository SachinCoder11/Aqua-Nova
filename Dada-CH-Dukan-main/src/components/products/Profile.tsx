import React from "react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const Profile = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ======================================
              HERO SECTION   
      ======================================= */}
      <section className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <img
          src="/src/images/Light Photo/profilehero.png"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Premium <span className="text-orange-400">Profile Lighting</span>
          </h1>

          <p className="text-white/80 mt-4 text-lg">
            Sleek, modern, and highly customizable profile lighting for homes, offices, and commercial spaces.
          </p>

          <a href="#contact">
            <button className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Get Consultation
            </button>
          </a>
        </div>
      </section>


      {/* ======================================
              INTRO SECTION — REDESIGNED
      ======================================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-5">
            <h2 className="text-4xl font-bold leading-tight">
              What Is <span className="text-orange-500">Profile Lighting?</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Profile lighting uses slim aluminum channels with LED strips that create
              uniform, elegant and modern lighting effects. Ideal for cove lighting,
              wall design, false ceiling lines, and architectural highlights.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              It enhances the ambience and adds sophisticated visual aesthetics
              to any interior.
            </p>

            <button className="mt-4 bg-black text-white px-7 py-3 rounded-lg hover:bg-gray-900 transition">
              Contact Us
            </button>
          </div>

          {/* RIGHT IMAGE BOX */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gray-200 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
              <img
                src="/src/images/Light Photo/herokenechewaliimage.png"
                alt="Profile Lighting"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ======================================
              TYPES OF PROFILE LIGHTS
      ======================================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Types of <span className="text-orange-500">Profile Lights</span>
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
            Choose from a wide range of premium profile lighting options.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              {
                name: "Surface Profile Lights",
                img: "/src/images/Light Photo/surface.png",
                desc: "Perfect for direct installation on ceilings and walls."
              },
              {
                name: "Recessed Profile Lights",
                img: "/src/images/Light Photo/profile 2.png",
                desc: "Sleek embedded lighting used in false ceilings."
              },
              {
                name: "Magnetic Profile Track",
                img: "/src/images/Light Photo/profile3.png",
                desc: "Modular and adjustable lighting for premium interiors."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-xl w-full mb-5"
                />
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================
              FEATURES SECTION
      ======================================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          Why Choose <span className="text-orange-500">Profile Lighting</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            "Modern and minimalistic look",
            "High brightness with low power consumption",
            "Customizable lengths & shapes",
            "Seamless architectural integration",
            "Smooth and uniform lighting output",
            "Works with automation & dimming controls"
          ].map((point, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-gray-900">{point}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* ======================================
              APPLICATION SECTION
      ======================================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Ideal For <span className="text-orange-500">Any Space</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              {
                label: "Home Interiors",
                img: "/src/images/Light Photo/homeinterior.png",
              },
              {
                label: "Office & Workspaces",
                img: "/src/images/Light Photo/office.png",
              },
              {
                label: "Commercial Installations",
                img: "/src/images/Light Photo/interoroffice.png",
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={item.img}
                  alt={item.label}
                  className="rounded-xl shadow-md mb-4 w-full"
                />
                <h3 className="font-semibold text-lg">{item.label}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* CONTACT + FOOTER */}
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />

    </div>
  );
};

export default Profile;