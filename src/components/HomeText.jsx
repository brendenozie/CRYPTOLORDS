import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeroSection = () => (
  <section id="home" className="hero-section">
    <div className="hero-container">
      <h1 className="hero-title">
        Unlock the <span className="highlight">Future</span> of <br /> Digital Assets
      </h1>
      <p className="hero-description">
        Dive into live trends, analytics, and actionable insights.
      </p>
      <AnchorLink className="cta-button" href="#market">
        Get Started
      </AnchorLink>
      <div className="hero-stats">
        <div className="stat-card">
          <h3>Bitcoin</h3>
          <p>$42,000</p>
        </div>
        <div className="stat-card">
          <h3>Ethereum</h3>
          <p>$2,800</p>
        </div>
      </div>
    </div>
  </section>
);

const MarketSection = ({ data, isLoading, error }) => (
  <section id="market" className="market-section">
    <div className="market-header">
      <h2>Explore the Market</h2>
      <p>Live updates on the top-performing cryptocurrencies.</p>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search for a coin..."
          className="search-bar"
        />
        <span className="last-updated">Last Updated: 2 mins ago</span>
      </div>
    </div>
    {isLoading ? (
      <div className="market-loading">
        <div className="spinner"></div>
        <p>Loading market data...</p>
      </div>
    ) : error ? (
      <div className="market-error">
        <p>Failed to fetch market data. Please try again later.</p>
      </div>
    ) : (
      <div className="market-cards">
        {data.map((coin) => (
          <motion.div
            className="market-card"
            key={coin.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="market-card-header">
              <img src={coin.image} alt={`${coin.name} logo`} />
              <h3>{coin.name}</h3>
            </div>
            <div className="market-card-body">
              <p>Price: ${coin.current_price.toLocaleString()}</p>
              <div className="price-trend">
                <span
                  className={`price-change ${
                    coin.price_change_percentage_24h > 0 ? "positive" : "negative"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
              <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
            </div>
          </motion.div>
        ))}
      </div>
    )}
  </section>
);

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const jsonData = await response.json();
        setData(jsonData);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        <HeroSection />
        <MarketSection data={data} isLoading={isLoading} error={error} />
    </>
  );
};

export default HomePage;
