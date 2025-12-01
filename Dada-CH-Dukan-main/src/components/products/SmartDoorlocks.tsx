import React from "react";

const SmartDoorlocks: React.FC = () => {
  const locks = [
    {
      title: "Fingerprint Door Lock",
      text: "Fast biometric unlocking with 360° recognition and premium metal finish.",
      img: "/src/images/Doorlock/people-interacting-with-ai-their-daily-lives.jpg",
    },
    {
      title: "Video Smart Lock",
      text: "Built-in HD camera, two-way voice, live visitor view, and app unlock.",
      img: "/src/images/Doorlock/smart-lock-with-digital-interface-futuristic-design.jpg",
    },
    {
      title: "Rim Smart Lock",
      text: "Compact and secure. Supports PIN, RFID, NFC, OTP, and mobile app access.",
      img: "/src/images/Doorlock/drlk1.jpeg",
    },
  ];

  return (
    <div className="w-full bg-[#f2f4f6] text-gray-900">

      {/* ========================================================== */}
      {/* HERO SECTION — VIDEO + SOFT GLASS OVERLAY                  */}
      {/* ========================================================== */}
      {/* ========================================================== */}
{/* HERO SECTION — CLEAN VIDEO + SOFT DARK OVERLAY             */}
{/* ========================================================== */}
<section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">

  {/* Video */}
  <video
    src="/src/videos/Gate/doorlock.webm"
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Soft dark overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Text */}
  <div className="relative z-20 text-center px-6 max-w-3xl">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-xl">
      Smart <span className="text-green-400">Door Locks</span>
    </h1>
    <p className="text-white mt-4 text-xl md:text-2xl leading-relaxed drop-shadow">
      Keyless entry with fingerprint, PIN, RFID, mobile app, and remote access.
    </p>
  </div>

</section>



      {/* ========================================================== */}
      {/* UNIQUE MODERN TILE CARDS — MINIMAL, SOFT, NO ARCH FRAMES   */}
      {/* ========================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          Next-Gen Smart Locks
        </h2>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Designed for modern homes with seamless access, real-time alerts, and
          advanced security technologies.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {locks.map((lock, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={lock.img}
                  className="h-56 object-contain drop-shadow-lg group-hover:scale-105 transition-all"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center">{lock.title}</h3>

              {/* Text */}
              <p className="text-gray-700 text-center mt-3 leading-relaxed">
                {lock.text}
              </p>

              {/* Glow Line */}
              <div className="mt-6 h-[3px] w-20 mx-auto bg-green-400 rounded-full opacity-70 group-hover:w-32 transition-all"></div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================== */}
      {/* FEATURE ROW — CLEAN PREMIUM SMART TECH FEEL                */}
      {/* ========================================================== */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <img
            src="/src/images/Doorlock/drlk1.jpeg"
            className="w-full rounded-3xl shadow-xl object-cover"
          />

          {/* Features */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Engineered for Smart Living
            </h2>

            <ul className="mt-6 space-y-4 text-gray-700 text-lg leading-relaxed">
              <li>• 0.2-second fingerprint unlock</li>
              <li>• RFID / NFC card access</li>
              <li>• Anti-theft & tamper alarms</li>
              <li>• Mobile app remote unlock</li>
              <li>• Auto-lock + child safety lock</li>
              <li>• Alexa / Google Home compatible</li>
            </ul>
          </div>
        </div>
      </section>


      {/* ========================================================== */}
      {/* FULL WIDTH CLEAN SHOWCASE                                  */}
      {/* ========================================================== */}
      <section className="relative py-28">
        <img
          src="/src/images/Doorlock/drlk2.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Style Meets Security
          </h2>
          <p className="text-white/90 text-xl mt-4">
            Elegant finishes that complement any interior.
          </p>
        </div>
      </section>

    </div>
  );
};

export default SmartDoorlocks;
