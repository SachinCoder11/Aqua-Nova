import React from "react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const CaseStudies = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-900">

      {/* HERO */}
      {/* HERO SECTION FIXED */}
<section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <img
    src="https://smartnode.in/wp-content/uploads/2025/08/case-study.jpg.webp"
    alt="Case Studies"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Center Text */}
  <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white text-center">
    Case Studies
  </h1>
</section>


      {/* LIST */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-10">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow flex flex-col md:flex-row overflow-hidden">
            <img
              src={`https://placehold.co/500x400?text=Project+${item}`}
              className="w-full md:w-1/2 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-bold">Smart Home Project {item}</h2>
              <p className="mt-3 text-gray-600">
                A full automation transformation including lighting, HVAC, safety and lifestyle integration.
              </p>
              <button className="mt-4 text-orange-500 font-semibold">View Details →</button>
            </div>
          </div>
        ))}
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default CaseStudies;
