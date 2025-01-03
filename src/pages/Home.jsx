import Footer from "../components/Footer";
import HomeText from "../components/HomeText";
import Services from "../components/Services";
import Join from "../components/Join";
import MarketUpdate from "../components/MarketUpdate";
import Featurespage from "../components/features";
import Packagespage from "../components/Packages";
import Merchandise from "../components/Merchandise";
import Profile from "../components/Profile";

function Home() {
  return (
    <div className="background-gradient">
      <HomeText />
      <Featurespage/>     
      <Profile/>
      <Packagespage />
      <Merchandise/>
      <Join />
      <Footer />
    </div>
  );
}

export default Home;

