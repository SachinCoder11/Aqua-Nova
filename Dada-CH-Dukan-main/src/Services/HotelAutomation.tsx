import { motion } from "framer-motion";

// Icons
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineRoomService } from "react-icons/md";
import { TbBuildingCommunity } from "react-icons/tb";
import { LuSunMedium, LuClock3, LuActivity, LuShieldCheck } from "react-icons/lu";
import { RiKey2Line, RiRemoteControl2Line } from "react-icons/ri";
import { IoPhonePortraitOutline } from "react-icons/io5";

import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/layout/Footer";

// Animation preset
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};
const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const HotelAutomation = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[85vh] flex items-center justify-center">
        <img
          src="/Hotel/Hotel.png"
          alt="Hotel Automation Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-xl">
            Transform Hospitality With
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            <span className="text-orange-400">Next-Gen Automation</span>
          </h1>
        </motion.div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT IMAGE */}
        <motion.div {...fadeUp} className="flex justify-center">
          <img
            src="/Hotel/hotel1.png"
            alt="Smart Hotel Model"
            className="w-[500px] h-auto drop-shadow-2xl"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div {...fadeUp} className="space-y-6">
          <p className="text-sm text-orange-600 font-medium">
            Shaping the Future of Hospitality
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            Cutting-Edge <span className="text-orange-600 underline">Hotel Solutions</span>
          </h2>

          <p className="text-gray-600">
            Deliver premium guest comfort, enhance staff efficiency, and streamline operations with
            a connected smart hotel ecosystem.
          </p>

          <p className="text-gray-600">
            From lighting and curtains to service requests and room automation, everything works
            together to elevate your hospitality experience.
          </p>

    <button
  onClick={handleContactClick}
  className="px-6 py-3 inline-block bg-black text-white rounded-xl hover:bg-orange-600 transition-colors"
>
  Contact Us
</button>

        </motion.div>
      </section>

      {/* ================= PANEL SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 rounded-3xl shadow-sm p-10 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* TEXT */}
          <div className="space-y-6">
            <p className="text-sm text-orange-700 font-medium">Redefining Comfort</p>

            <h2 className="text-4xl font-bold">
              Smart <span className="text-orange-600 underline">Hotel Automation</span> System
            </h2>

            <p className="text-gray-600 max-w-xl">
              Smart hotel systems create luxurious and personalized stays with automated room
              controls, optimized workflows, and real-time monitoring.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Enhanced guest comfort</li>
              <li>• Faster service requests</li>
              <li>• Centralized management</li>
              <li>• Energy efficiency</li>
              <li>• Smart in-room experiences</li>
              <li>• Modern hospitality workflows</li>
            </ul>

        <button
  onClick={handleContactClick}
  className="px-6 py-3 inline-block bg-black text-white rounded-xl hover:bg-orange-600 transition-colors"
>
  Contact Us
</button>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="rounded-3xl p-6 shadow-xl relative">
              <p className="text-white text-lg font-medium mb-4">
                Smart Hotels. Happy Guests.
              </p>

              <img
                src="/Hotel/hotel2.png"
                alt="Hotel Model"
                className="w-[380px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 py-20 text-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold">
          Why Choose Smart Life Solution For{" "}
          <span className="text-orange-600 underline">Hotel Automation?</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Transform hospitality with automation that improves comfort, energy savings,
          security, and guest convenience.
        </p>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Cards */}
          <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border shadow-sm">
            <LuSunMedium size={30} className="text-orange-600" />
            <p className="font-semibold">Enhanced Guest Experience</p>
            <p className="text-gray-600 text-sm text-center">
              Mood-based lighting, AC, curtains, ambience control.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border shadow-sm">
            <MdOutlineRoomService size={32} className="text-orange-600" />
            <p className="font-semibold">Faster Staff Response</p>
            <p className="text-gray-600 text-sm text-center">
              Automate housekeeping & service updates.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border shadow-sm">
            <AiOutlineWifi size={30} className="text-orange-600" />
            <p className="font-semibold">Multiple Control Options</p>
            <p className="text-gray-600 text-sm text-center">
              Mobile, voice, wall panel & remote control.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border shadow-sm">
            <LuClock3 size={30} className="text-orange-600" />
            <p className="font-semibold">Energy Efficiency</p>
            <p className="text-gray-600 text-sm text-center">
              Reduce power consumption with automation.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border shadow-sm">
            <TbBuildingCommunity size={32} className="text-orange-600" />
            <p className="font-semibold">Unified System</p>
            <p className="text-gray-600 text-sm text-center">
              Manage comfort, control & staff efficiency.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="flex flex-col items-center space-y-3 bg-white rounded-xl p-6 border shadow-sm">
            <LuActivity size={32} className="text-orange-600" />
            <p className="font-semibold">Smart Operations</p>
            <p className="text-gray-600 text-sm text-center">
              Real-time monitoring & optimized workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SMART DOOR LOCK BENEFITS SECTION ================= */}
      <section className="px-6 py-20 bg-gray-50/60">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Hotels Prefer <span className="text-orange-600 underline">Smart Door Locks</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Smart locks enhance security, improve guest convenience, and streamline hotel operations,
            making them essential for modern hospitality environments.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* 1 SECURITY */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl p-6 border shadow-sm flex flex-col items-center space-y-3"
          >
            <LuShieldCheck size={32} className="text-orange-600" />
            <h3 className="font-semibold text-gray-900">Improved Guest Security</h3>
            <p className="text-gray-600 text-sm text-center">
              Digital keys, PINs and mobile access can't be duplicated. Lost credentials can be deactivated instantly.
            </p>
          </motion.div>

          {/* 2 CONVENIENCE */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl p-6 border shadow-sm flex flex-col items-center space-y-3"
          >
            <IoPhonePortraitOutline size={32} className="text-orange-600" />
            <h3 className="font-semibold text-gray-900">Better Guest Convenience</h3>
            <p className="text-gray-600 text-sm text-center">
              Contactless check-in using mobile keys enables seamless room access without staff assistance.
            </p>
          </motion.div>

          {/* 3 STAFF EFFICIENCY */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl p-6 border shadow-sm flex flex-col items-center space-y-3"
          >
            <RiKey2Line size={32} className="text-orange-600" />
            <h3 className="font-semibold text-gray-900">Operational Efficiency</h3>
            <p className="text-gray-600 text-sm text-center">
              Staff can assign/revoke access instantly without physical keys or lock reprogramming.
            </p>
          </motion.div>

          {/* 4 REMOTE CONTROL */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl p-6 border shadow-sm flex flex-col items-center space-y-3"
          >
            <RiRemoteControl2Line size={32} className="text-orange-600" />
            <h3 className="font-semibold text-gray-900">Remote Management</h3>
            <p className="text-gray-600 text-sm text-center">
              Monitor room access, unlock remotely, or manage emergency access in real time.
            </p>
          </motion.div>

          {/* 5 ENERGY SAVING */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl p-6 border shadow-sm flex flex-col items-center space-y-3"
          >
            <LuClock3 size={30} className="text-orange-600" />
            <h3 className="font-semibold text-gray-900">Energy & Cost Savings</h3>
            <p className="text-gray-600 text-sm text-center">
              Integrates with occupancy systems to optimize AC, lighting and reduce energy waste.
            </p>
          </motion.div>

          {/* 6 PRIVACY */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl p-6 border shadow-sm flex flex-col items-center space-y-3"
          >
            <TbBuildingCommunity size={30} className="text-orange-600" />
            <h3 className="font-semibold text-gray-900">Better Guest Privacy</h3>
            <p className="text-gray-600 text-sm text-center">
              Ensures authorised personnel only access guest rooms, improving trust and safety.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HotelAutomation;
