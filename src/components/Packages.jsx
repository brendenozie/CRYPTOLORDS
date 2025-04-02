import React from "react";
import { Link } from "react-router-dom";

const PackagesPage = () => {
  const packages = [
  {
    title: "Free Plan",
    price:"1",
    highlights: [
      "General Channel.",
      "Twitter Tracker.",
      "Bundle Checker"
    ],
    details: {
      duration: "",
      content: [
        "Coins with potential",
        "Live Trading Access",
        "Coverage"
      ],
    },
    requirements: [
      "",
      ""
    ],
    terms: [
      "",
      ""
    ],
  },  
  {
    title: "Crypto Book",
    price:"22",
    highlights: [
      "Comprehensive Crypto Education: Learn how cryptocurrencies are reshaping global finance.",
       "Practical Trading Insights: Get actionable strategies to navigate the crypto market.",
        "Stay Ahead of Trends: Understand DeFi, CBDCs, and market shifts.",
         "Tools for Beginners: Monitor sentiment with Twitter Tracker.",
          "Community Support: Join our Discord community.",
           "Affordable Entry Point: Start your journey for just $22.",
    ],
    details: {
      duration: "",
      content: [
        
      ],
    },
    requirements: [
      "",
      ""
    ],
    terms: [
      "",
      ""
    ],
  },
  {
    title: "Premium Plan",
    price:"49",
    highlights: [
      "Coins With Potential Bot",
      "Twitter Tracker",
      "Live Trading",
      "Coverage",
        "Scanning",
        "VC Rooms",
        "Tools Guide"
    ],
    details: {
      duration: "",
      content: [
        
      ],
    },
    requirements: [
      "",
      ""
    ],
    terms: [
      "",
      ""
    ],
  },
  {
    title: "Pro's Choice",
    price:"99.95",
    highlights: [
      "Mentorship",
      "Premium Discord",
      "Live Trading (All Day)",
      "Trades/Setups (All Day)",
      "Intraday Q&A Community (All Day)",
      "Coverage (Full Day)",
      "SK Chart Overlay & Courses (All-in-one Package)"
    ],
    details: {
      duration: "",
      content: [
      ],
    },
    requirements: [
      "",
      "",
      ""
    ],
    terms: [
      "",
      "",
      ""
    ],
  },
];

  return (
    <section className="packages-section" id="packages">
      <h1 className="page-title">Explore Our Packages</h1>
      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <div className="card-header">
              <h2>{pkg.title}</h2>
            </div>
            <div className="card-price">              
              <h3>${pkg.price}</h3>
            </div>
            <div className="card-body">
              <h3>Highlights</h3>
              <ul>
                {pkg.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              {/* <h3>Details</h3> */}
              {/* <p><strong>Duration:</strong> {pkg.details?.duration || "N/A"}</p> */}
              <ul className="details-list">
                {pkg.details?.content.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              {/* <h3>Requirements</h3>
              <ul>
                {pkg.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <h3>Terms</h3>
              <ul>
                {pkg.terms.map((term, i) => (
                  <li key={i}>{term}</li>
                ))}
              </ul> */}
            </div>
            <div className="card-footer">
              <Link
                to="/payment"
                state={{ packageDetails: pkg }}
                className="service-link"
              >
                Proceed <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesPage;
