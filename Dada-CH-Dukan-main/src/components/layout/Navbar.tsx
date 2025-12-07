import { useState, useEffect } from "react";
import { Menu, X, Phone, FileText, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

/* ---------------- MOBILE ACCORDION ---------------- */
const MobileSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 pb-2 overflow-hidden">
      <button
        className="w-full flex justify-between items-center font-semibold py-2"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 space-y-1 pl-2">{children}</div>
      </div>
    </div>
  );
};

/* ---------------- MAIN NAVBAR ---------------- */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightingOpen, setLightingOpen] = useState(false);
  const location = useLocation();

  /* AUTO CLOSE ON NAVIGATION */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setLightingOpen(false);
  }, [location.pathname]);

  /* SCROLL DETECTION */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* DATA */
  const services = [
    { name: "Home Automation", path: "/services/home-automation" },
    { name: "Office Automation", path: "/services/office-automation" },
    { name: "Hospital Automation", path: "/services/hospital-automation" },
    { name: "Hotel Automation", path: "/services/hotel-automation" },
  ];

  const products = [
    { name: "Smart Lights", path: "/products/smart-lights" },
    { name: "Smart Gates", path: "/products/smart-gates" },
    { name: "Smart Door Locks", path: "/products/smart-doorlocks" },
    { name: "All Sensors", path: "/products/all-sensors" },
    { name: "Curtain Automation", path: "/products/Curtain-Automation" },
    { name: "Smart Switches", path: "/products/smart-switches" },
  ];

  const automation = [
    {
      name: "Lighting Automation",
      path: "/products/lighting-automation",
      children: [
        { name: "COB", path: "/products/lighting-automation/cob" },
        { name: "Profile", path: "/products/lighting-automation/profile" },
        { name: "Panel", path: "/products/lighting-automation/panel" },
        { name: "Indoor", path: "/products/lighting-automation/indoor" },
        { name: "Outdoor", path: "/products/lighting-automation/outdoor" },
      ],
    },
    { name: "Audio-Video", path: "/products/audio-video" },
    { name: "Security Automation", path: "/products/security" },
    { name: "Smart Way Control", path: "/products/smart-way-control" },
    { name: "Smart Life App", path: "/products/smart-life-app" },
    { name: "Third-Party Integration", path: "/products/third-party-integration" },
  ];

  const resources = [{ name: "Comming Soon", path: "/services/home-automation" }];

  /* FULL ORANGE GRADIENT ON HOVER */
  const glowClass = `
    relative transition-all duration-300
    hover:text-transparent
    hover:bg-clip-text
    hover:bg-gradient-to-r
    hover:from-orange-400
    hover:to-orange-600
    after:absolute
    after:left-0
    after:bottom-[-2px]
    after:h-[2px]
    after:w-0
    after:bg-gradient-to-r
    after:from-orange-400
    after:to-orange-600
    after:transition-all
    after:duration-300
    hover:after:w-full
  `;

  const closeMobile = () => setIsMobileMenuOpen(false);

  const handleLightingClick = () => {
    if (!lightingOpen) setLightingOpen(true);
    else window.location.href = automation[0].path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMobile}>
            <img
              src="/images/Outdoor/logofinal.png"
              alt="Smart Life Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-white text-xl font-semibold">Smart Life Solution</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8 text-white text-sm">

            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={glowClass}
            >
              Home
            </Link>

            {/* SERVICES */}
            <div className="relative group">
              <button className={`flex items-center gap-1 ${glowClass}`}>
                Our Services <ChevronDown size={14} />
              </button>

              {/* DROPDOWN */}
              <div
                className="
                absolute top-full left-0 mt-2 w-56 
                bg-neutral-900/90 border border-white/20 rounded-xl shadow-lg py-2 z-50
                opacity-0 invisible translate-y-2
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-300
              "
              >
                {services.map(item => (
                  <Link key={item.name} to={item.path} className={`block px-5 py-2 text-white ${glowClass}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="relative group">
              <button className={`flex items-center gap-1 ${glowClass}`}>
                Our Products <ChevronDown size={14} />
              </button>

              <div
                className="
                absolute top-full left-0 mt-2 w-56 
                bg-neutral-900/90 border border-white/20 rounded-xl shadow-lg py-2 z-50
                opacity-0 invisible translate-y-2
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-300
              "
              >
                {products.map(item => (
                  <Link key={item.name} to={item.path} className={`block px-5 py-2 text-white ${glowClass}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* SOLUTIONS */}
            <div className="relative group">
              <button className={`flex items-center gap-1 ${glowClass}`}>
                Our Solutions <ChevronDown size={14} />
              </button>

              <div
                className="
                absolute top-full left-0 mt-2 w-56
                bg-neutral-900/90 border border-white/20 rounded-xl shadow-lg py-2 z-50
                opacity-0 invisible translate-y-2
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-300
              "
              >
                {automation.map(item => (
                  <div key={item.name} className="relative group/sub">
                    <Link to={item.path} className={`block px-5 py-2 flex justify-between items-center text-white ${glowClass}`}>
                      {item.name}
                      {item.children && <ChevronDown size={12} />}
                    </Link>

                    {item.children && (
                      <div
                        className="
                        absolute top-0 left-full ml-1 w-48 
                        bg-neutral-900/90 border border-white/20 rounded-xl shadow-lg py-2
                        opacity-0 invisible translate-y-2
                        group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-y-0
                        transition-all duration-300
                      "
                      >
                        {item.children.map(child => (
                          <Link key={child.name} to={child.path} className={`block px-4 py-2 text-white ${glowClass}`}>
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RESOURCES */}
            <div className="relative group">
              <button className={`flex items-center gap-1 ${glowClass}`}>
                Resources <ChevronDown size={14} />
              </button>

              <div
                className="
                absolute top-full left-0 mt-2 w-56
                bg-neutral-900/90 border border-white/20 rounded-xl shadow-lg py-2 z-50
                opacity-0 invisible translate-y-2
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-300
              "
              >
                {resources.map(item => (
                  <Link key={item.name} to={item.path} className={`block px-5 py-2 text-white ${glowClass}`}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* ICONS */}
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-white rounded-full">
                <FileText size={18} className="text-black" />
              </button>
              <button className="p-2 bg-white rounded-full">
                <Phone size={18} className="text-black" />
              </button>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden p-2 rounded-lg bg-white/20" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div
            className="
            lg:hidden mt-3 p-4 rounded-xl text-white space-y-4 text-sm
            bg-black/80 transition-all duration-300
            animate-[fadeIn_0.3s_ease]
          "
          >
            <Link to="/" className="block font-semibold" onClick={closeMobile}>
              Home
            </Link>

            <MobileSection title="Our Services">
              {services.map(item => (
                <Link key={item.path} to={item.path} className="block pl-3 py-1 hover:text-orange-400" onClick={closeMobile}>
                  {item.name}
                </Link>
              ))}
            </MobileSection>

            <MobileSection title="Our Products">
              {products.map(item => (
                <Link key={item.path} to={item.path} className="block pl-3 py-1 hover:text-orange-400" onClick={closeMobile}>
                  {item.name}
                </Link>
              ))}
            </MobileSection>

            <MobileSection title="Our Solutions">
              <div>
                <button onClick={handleLightingClick} className="w-full text-left pl-3 py-2 flex items-center justify-between hover:text-orange-400">
                  Lighting Automation
                  <ChevronDown size={14} className={`transition-transform ${lightingOpen ? "rotate-180" : ""}`} />
                </button>

                {lightingOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    {automation[0].children.map(child => (
                      <Link key={child.path} to={child.path} className="block py-1 hover:text-orange-400" onClick={closeMobile}>
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {automation.slice(1).map(item => (
                <Link key={item.path} to={item.path} className="block pl-3 py-2 hover:text-orange-400" onClick={closeMobile}>
                  {item.name}
                </Link>
              ))}
            </MobileSection>

            <MobileSection title="Resources">
              {resources.map(item => (
                <Link key={item.path} to={item.path} className="block pl-3 py-1 hover:text-orange-400" onClick={closeMobile}>
                  {item.name}
                </Link>
              ))}
            </MobileSection>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
