import Btc from "../images/hero/bitcoin.png";
import Eth from "../images/hero/ethereum.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Join() {
  return (
    <section id="join" className="join-section">
      <div className="join-container">
        <div className="join-content">
          <div className="join-images">
            <img alt="Bitcoin" className="join-image join-btc" src={Btc} />
            <img alt="Ethereum" className="join-image join-eth" src={Eth} />
          </div>
          <div className="join-text">
            <h2 className="join-title">
              Join our <span className="highlight">Crypto Community</span>
            </h2>
            <p className="join-description">
              Step into the world of crypto with us. Learn, share, and grow with
              like-minded enthusiasts in a supportive and engaging environment.
            </p>
            
          <AnchorLink href={"#packages"}  className="join-button" >🚀 
              Join Us</AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
