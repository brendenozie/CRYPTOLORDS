import Footer from "../components/Footer";
import HomeText from "../components/HomeText";
import Services from "../components/Services";
import Join from "../components/Join";
import MarketUpdate from "../components/MarketUpdate";
import WhyUs from "../components/WhyUs";

function Home() {
  return (
    <div className="background-gradient">
      <HomeText />
      <Services />
      <MarketUpdate />
      <WhyUs />
      <Join />
      <Footer />
    </div>
  );
}

export default Home;

