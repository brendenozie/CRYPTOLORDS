import Btc from "../images/hero/bitcoin.png";
import Eth from "../images/hero/ethereum.png";

function Join() {
  return (
    <section id="join" className="join-section">
      <div className="container">
        <div className="join-content">
          <div className="join-images">
            <img alt="Bitcoin" className="join-content__btc" src={Btc} />
            <img alt="Ethereum" className="join-content__eth" src={Eth} />
          </div>
          <div className="join-content__text">
            <h2>
              Join us on <span>Discord</span>
            </h2>
            <p>
              Take the next step in your crypto journey. Collaborate, learn, and
              grow with a thriving community of enthusiasts and experts.
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://discord.com/"
              className="btn-primary"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
