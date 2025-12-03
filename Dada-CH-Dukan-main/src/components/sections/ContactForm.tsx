import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-20" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div className="space-y-6 pl-6">
          <h2 className="text-4xl font-semibold text-black leading-snug">
            Having <br />
            <span className="text-orange-500 underline">Questions?</span>
          </h2>

          <p className="text-gray-700 text-lg">“Let’s make a Smarter <br /> World together”</p>

          {/* CONTACT DETAILS */}
          <div className="space-y-5 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                <Phone size={18} />
              </div>
              <span className="text-black text-sm font-medium">+91 78638 08713</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                <Mail size={18} />
              </div>
              <span className="text-black text-sm font-medium">info@smartlifesolutions.in</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <p className="text-black text-sm leading-relaxed">
                A-09-02-B, Kamdhenu Estate, <br />
                Opp. Gorwa Water Tank, Gorwa, <br />
                Vadodara, India - 390016
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
          <form className="grid grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="col-span-1">
              <label className="text-sm text-gray-700">Name</label>
              <input type="text" className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-black text-sm focus:border-orange-500 focus:outline-none" />
            </div>

            <div className="col-span-1">
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-black text-sm focus:border-orange-500 focus:outline-none" />
            </div>

            <div className="col-span-1">
              <label className="text-sm text-gray-700">Automation For</label>
              <select className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-black text-sm focus:border-orange-500 focus:outline-none">
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Office</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="text-sm text-gray-700">Project Type</label>
              <select className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-black text-sm focus:border-orange-500 focus:outline-none">
                <option>New Building</option>
                <option>Renovation</option>
              </select>
            </div>

            <div className="col-span-2 pt-2">
              <label className="text-sm text-gray-700">Control For (you can select multiple)</label>
              <div className="grid grid-cols-2 gap-3 mt-2 text-sm text-gray-800">
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500" /> Lighting & Scene Control</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500" /> Safety & Security Control</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500" /> Curtain & Appliances Control</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="accent-orange-500" /> Home Theatre System</label>
              </div>
            </div>

            <div className="col-span-1">
              <label className="text-sm text-gray-700">Contact Number</label>
              <input type="text" className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-black text-sm focus:border-orange-500" />
            </div>

            <div className="col-span-1">
              <label className="text-sm text-gray-700">City</label>
              <input type="text" className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-black text-sm focus:border-orange-500" />
            </div>

            <div className="col-span-2">
              <input type="text" placeholder="Enter Captcha" className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg text-black text-sm focus:border-orange-500" />
            </div>

            <div className="col-span-2">
              <button type="submit" className="mt-3 w-full py-3 bg-black text-white rounded-lg hover:bg-orange-600 transition">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
