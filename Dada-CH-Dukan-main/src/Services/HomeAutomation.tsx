import React from "react";

const HomeAutomation = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full h-[85vh] flex items-center justify-center">
        <img
          src="/images/your-hero.jpg"
          alt="Home Automation Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Your Dream Home, Powered By
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-green-400 drop-shadow-lg">
            Smart Automation
          </h1>
        </div>
      </section>

      {/* ===================== SECTION 1 ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <div className="w-full h-[380px] md:h-[420px] bg-gray-200 rounded-3xl shadow-inner flex items-center justify-center">
            Image Placeholder
          </div>
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-green-600 font-medium">Make your Smart Living Simple with</p>

          <h2 className="text-4xl font-bold leading-tight">
            The Best Home Automation System in <span className="text-green-600">India</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We provide customized automation solutions as per your needs. Stay seamlessly connected
            to your home environment with intelligent mood-based lighting, tunable lights,
            effortless scenes and everything controllable with a simple tap.
          </p>

          <button className="px-6 py-3 w-fit bg-black text-white rounded-xl hover:bg-gray-800 transition-all">
            Contact Us
          </button>
        </div>
      </section>

      {/* ===================== SECTION 2 ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* TEXT */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-green-600 font-medium">With Smart Node</p>

          <h2 className="text-4xl font-bold leading-tight">
            Unlock the Benefits of{" "}
            <span className="text-green-500">Home Automation</span> in India
          </h2>

          <p className="text-gray-600 leading-relaxed">
            From scene-based lighting to app-based controlling, our smart home solutions
            integrate with your lifestyle, offering comfort and peace of mind.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
            <li>• Smart scheduling</li>
            <li>• Seamless integration</li>
            <li>• Mood-based lighting</li>
            <li>• Personalized scenes</li>
            <li>• Energy efficiency</li>
            <li>• Enhanced security</li>
          </ul>

          <button className="px-6 py-3 w-fit bg-black text-white rounded-xl hover:bg-gray-800 transition-all">
            Contact Us
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <div className="w-full h-[420px] bg-gray-300 rounded-3xl flex items-center justify-center">
            Image Placeholder
          </div>
        </div>

      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="px-6 py-20 text-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold">
          Why Choose SmartNode For{" "}
          <span className="text-green-600">Home Automation?</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Smart Node is proudly a made-in-India home automation company. Secured data in Indian servers,
          fast serviceability, warranties and innovation make us the preferred choice.
        </p>

        {/* FEATURES GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            "Enhanced Convenience",
            "Remote Access",
            "Improved Energy Efficiency",
            "Increased Security",
            "Seamless Integration",
            "Automation Saves Time",
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 bg-gray-200 rounded-xl"></div>
              <p className="font-semibold">{item}</p>
              <p className="text-gray-600 text-sm text-center px-3">
                Lorem ipsum placeholder text for feature description.
              </p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default HomeAutomation;
