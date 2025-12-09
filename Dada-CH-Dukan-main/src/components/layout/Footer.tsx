import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <img
              src="/images/new logo2.png"
              alt="Smart Life Solutions"
              className="w-10 mb-6"
            />

            <div className="flex space-x-4 mb-6">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/smartlife.solution/?utm_source=ig_web_button_share_sheet"
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex space-x-3">
              {/* <img src="/src/images/new logo2.png" className="h-10" />
              <img src="/app-store.png" className="h-10" /> */}
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>Lighting Automation</li>
              <li>Security Automation</li>
              <li>HVAC / Entertainment</li>
              <li>Smart Way Control</li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>Home Automation</li>
              <li>Office Automation</li>
              <li>Hospital Automation</li>
              <li>Hotel Automation</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@smartlife.in</span>
              </li>

              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 78638 808713</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 text-center pt-6 mt-12 text-sm">
          © {currentYear} Smart Life Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
