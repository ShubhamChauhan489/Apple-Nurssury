import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurProduct from "./components/OurProduct";
import CustomerSay from "./components/CustomerSay";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <AboutUs />
      {/* < OurProduct /> */}
      < CustomerSay />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
