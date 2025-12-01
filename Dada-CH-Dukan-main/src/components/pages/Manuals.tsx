import React from "react";
import { FileText } from "lucide-react";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";

const Manuals = () => {
  const docs = [
    "Smart Switch Manual",
    "Lighting Automation Guide",
    "Home Safety Manual",
    "DALI Controller Manual",
    "Sensor Installation Guide"
  ];

  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO */}
     {/* HERO SECTION FIXED */}
<section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <img
    src="https://smartnode.in/wp-content/uploads/2025/08/manual-banner.jpg.webp"
    alt="Case Studies"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Center Text */}
  <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white text-center">
    Manuals
  </h1>
</section>


      {/* DOCUMENTS */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
        {docs.map((doc, i) => (
          <div key={i} className="flex items-center justify-between border p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <FileText size={32} className="text-orange-500" />
              <span className="text-lg font-semibold">{doc}</span>
            </div>
            <button className="text-orange-500 font-semibold">Download</button>
          </div>
        ))}
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Manuals;
