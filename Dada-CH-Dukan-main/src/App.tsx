import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
// SERVICES
import HomeAutomation from "./Services/HomeAutomation";

// HOME

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Products from "./components/home/Products";
import Culture from "./components/home/Culture";
import Founders from "./components/home/Founders";
import Testimonials from "./components/home/Testimonials";
import ContactForm from "./components/sections/ContactForm";
import Footer from "./components/layout/Footer";
import Doorlocks from "./components/products/Doorlocks";

// PRODUCTS
import SmartLights from "./components/products/SmartLights";
import SmartGates from "./components/products/SmartGates";
// import CctvCameras from "./components/products/CctvCameras";
import SmartDoorlocks from "./components/products/SmartDoorlocks";
import AllSensors from "./components/products/AllSensors";

// LIGHTING AUTOMATION
import LightAutomation from "./components/products/LightAutomation";
import COB from "./components/products/COB";
import Profile from "./components/products/Profile";
import Panel from "./components/products/Panel";
import Indoor from "./components/products/Indoor";
import Outdoor from "./components/products/Outdoor";

// SOLUTIONS
import SecurityAutomation from "./components/soloutions/SecurityAutomation";
import SmartWayControl from "./components/soloutions/SmartWayControl";
import SmartLifeApp from "./components/soloutions/SmartLifeApp";
import ThirdPartyIntegration from "./components/soloutions/ThirdPartyIntegration";
import AudioVideoSection from "./components/soloutions/AUDIOVIDEO";

// RESOURCES
// import Blogs from "./components/pages/Blogs";
// import CaseStudies from "./components/pages/CaseStudies";
// import Manuals from "./components/pages/Manuals";
// import Accessories from "./components/pages/Accessories";

import OfficeAutamation from "./Services/OfficeAutamation";
import HospitalAutomation from "./Services/HospitalAutomation";
import HotelAutomation from "./Services/HotelAutomation";
import SmartSwitches from "./components/products/Smartswitiches";
import CurtainAutomation from "./components/products/CurtainAutomation";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Products />
              <Culture />
              <Founders />
              <Testimonials />
              <ContactForm />
              <Footer />
            </>
          }
        />

        {/* PRODUCT PAGES */}
        <Route path="/products/smart-lights" element={<SmartLights />} />
        <Route path="/products/smart-gates" element={<SmartGates />} />
       
        <Route path="/products/smart-doorlocks" element={<SmartDoorlocks />} />
        <Route path="/products/all-sensors" element={<AllSensors />} />
  <Route path="/products/smart-switches" element={<SmartSwitches/>} />
  <Route path="/products/Curtain-Automation" element={<CurtainAutomation/>} />
        {/* LIGHTING AUTOMATION */}
        <Route
          path="/products/lighting-automation"
          element={<LightAutomation />}
        />
        <Route path="/products/lighting-automation/cob" element={<COB />} />
        <Route
          path="/products/lighting-automation/profile"
          element={<Profile />}
        />
        <Route path="/products/lighting-automation/panel" element={<Panel />} />
        <Route
          path="/products/lighting-automation/indoor"
          element={<Indoor />}
        />
        <Route
          path="/products/lighting-automation/outdoor"
          element={<Outdoor />}
        />

        {/* SOLUTIONS */}
        <Route path="/products/security" element={<SecurityAutomation />} />
        <Route
          path="/products/smart-way-control"
          element={<SmartWayControl />}
        />
        <Route path="/products/smart-life-app" element={<SmartLifeApp />} />
        <Route
          path="/products/third-party-integration"
          element={<ThirdPartyIntegration />}
        />
        <Route path="/products/audio-video" element={<AudioVideoSection />} />

        {/* RESOURCES */}
        {/* <Route path="/services/home-automation" element={<Blogs />} /> */}
        {/* <Route path="/resources/case-studies" element={<CaseStudies />} />
        <Route path="/resources/manuals" element={<Manuals />} />
        <Route path="/resources/accessories" element={<Accessories />} /> */}

        {/* SERVICES */}
       
      <Route path="/products/smart-doorlocks" element={<SmartDoorlocks />} />
<Route path="/products/smart-doorlocks/all" element={<Doorlocks />} />

        <Route path="/services/home-automation" element={<HomeAutomation/>}></Route>
        <Route path="/services/office-automation" element={<OfficeAutamation />}> </Route>

<Route path="/services/hospital-automation" element={<HospitalAutomation/>}> </Route>
<Route path="/services/office-automation" element={<OfficeAutamation />}> </Route>
<Route path="/services/hotel-automation" element={<HotelAutomation />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
