import React, { useEffect } from "react";
import Footer from "../components/Footer";
import HomeText from "../components/HomeText";
import Services from "../components/Services";
import Join from "../components/Join";
import MarketUpdate from "../components/MarketUpdate";
import Featurespage from "../components/features";
import Packagespage from "../components/Packages";
import Pricing from "../components/pricing";
import Merchandise from "../components/Merchandise";
import Profile from "../components/Profile";
import { useLocation } from "react-router-dom";
import PackagesPage from "../components/Packages";

function Home() {
   const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="background-gradient">
      <HomeText />
      <Featurespage/>     
      <Profile/>
      <PackagesPage />
      {/* <Pricing /> */}
      <Merchandise/>
      <Join />
      <Footer />
    </div>
  );
}

export default Home;

