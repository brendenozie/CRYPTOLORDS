import ChooseBox from "./ChooseBox";
import BitHand from "../images/chooseus/choose-main.png";

function WhyUs() {
  return (
    <section id="choose-us" className="why-section">
      <div className="container">
        <header className="why-header">
          <h2>
            Why Choose Us
          </h2>
          <p>
            Your gateway to seamless crypto management. Discover, trade, and
            grow your portfolio with ease and confidence.
          </p>
        </header>

        <div className="choose-grid">
          <ChooseBox
            img="fa-solid fa-wallet"
            title="Connect Your Wallet"
            text="Link your crypto wallets like Trust Wallet or Metamask effortlessly."
          />
          <ChooseBox
            img="fa-solid fa-pen-ruler"
            title="Select Quantity"
            text="Upload and manage your crypto assets with flexible options."
          />
          <ChooseBox
            img="fa-solid fa-bolt"
            title="Confirm Transaction"
            text="Experience secure, instant transactions with our robust platform."
          />
          <div className="choose-main">
            <img src={BitHand} alt="Why Choose Us" />
          </div>
          <ChooseBox
            img="fa-solid fa-satellite-dish"
            title="Receive NFTs"
            text="Access your investments and exclusive crypto rewards."
          />
          <ChooseBox
            img="fa-solid fa-chess-knight"
            title="Market Insights"
            text="Leverage data-driven insights to make informed trading decisions."
          />
          <ChooseBox
            img="fa-solid fa-boxes-stacked"
            title="Manage Portfolio"
            text="Streamline your crypto journey with tools designed for success."
          />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
