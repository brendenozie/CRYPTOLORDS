import React from "react";
import { Link } from "react-router-dom";

const PackagesPage = () => {
  const packages = [
  {
    title: "Free Plan",
    price:"0",
    highlights: [
      "General Channel.",
      "Twitter Tracker.",
      "Bundle Checker"
    ],
    details: {
      duration: "1 Month (Recurring)",
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
    title: "Starter Plan",
    price:"22",
    highlights: [
      "The Future of money (Crypto Trading book)",
      "Twitter Tracker (Basic)",
      "Basic Discord Community"
    ],
    details: {
      duration: "",
      content: [
        "Comprenhensive Crypto Education",
        "Practical Trading insights",
        "Stay ahead of trends"
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
      "Live Trading"
    ],
    details: {
      duration: "",
      content: [
        "Coverage",
        "Scanning",
        "VC Rooms",
        "Tools Guide"
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
    title: "The Complete Trader",
    price:"99.95",
    highlights: [
      "Mentorship",
      "Premium Discord",
      "Live Trading"
    ],
    details: {
      duration: "",
      content: [
        "Trades/Setup",
        "Intraday Q&A Community",
        "Coverage (Full Day)"
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
              <ul>
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
