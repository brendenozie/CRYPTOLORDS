import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MarketUpdate() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("market_cap_desc");

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${sortBy}&per_page=10&page=${currentPage}&sparkline=false`;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching data");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, sortBy]);

  const handleSort = (order) => {
    setSortBy(order);
    setCurrentPage(1);
  };

  return (
    <section className="market-update-section">
      <div className="container">
        <header className="market-header">
          <h2>Market Updates</h2>
          <p>Track top cryptocurrencies with real-time data</p>
          <div className="filters">
            {["market_cap_desc", "price_desc", "volume_desc"].map((order) => (
              <button
                key={order}
                className={sortBy === order ? "active" : ""}
                onClick={() => handleSort(order)}
              >
                {order.replace("_desc", "").replace("market_cap", "Market Cap").toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="market-grid">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            data.map((coin) => (
              <Link to={`/coin/${coin.id}`} key={coin.id} className="market-card">
                <div className="card-header">
                  <img src={coin.image} alt={coin.name} />
                  <h3>{coin.name}</h3>
                </div>
                <div className="card-body">
                  <p>
                    <strong>Price:</strong> ${coin.current_price.toFixed(2)}
                  </p>
                  <p
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "positive-change"
                        : "negative-change"
                    }
                  >
                    <strong>24h Change:</strong>{" "}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                  <p>
                    <strong>Market Cap:</strong>{" "}
                    ${coin.market_cap.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>

        <footer className="pagination">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </footer>
      </div>
    </section>
  );
}

export default MarketUpdate;
