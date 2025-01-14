import React from "react";
import { Link } from "react-router-dom";

import book from '../assets/book.jpg';

const PackagesPage = () => {
  
  const packages = [
  {
    title: "Monthly Community Access",
    price:"$39",
    highlights: [
      "Access actionable trading signals.",
      "Real-time updates on market trends.",
      "Comprehensive market insights and forecasts."
    ],
    details: {
      duration: "1 Month (Recurring)",
      content: [
        "Daily trading signals tailored to market conditions.",
        "Weekly live Q&A sessions with experts.",
        "Exclusive access to community discussions and shared strategies."
      ],
    },
    requirements: [
      "Internet connection for live updates.",
      "Willingness to actively engage with community insights."
    ],
    terms: [
      "Subscription is billed monthly and can be canceled anytime.",
      "Access is limited to one user per subscription."
    ],
  },
  
  {
    title: "Magic of P2P Trading",
    price:"$149",
    highlights: [
      "Master P2P trading with an intensive program.",
      "Learn strategies to start earning quickly.",
      "Hands-on training with experienced mentors."
    ],
    details: {
      duration: "1 Week Masterclass",
      content: [
        "In-depth exploration of P2P trading techniques.",
        "Daily live sessions with practical demonstrations.",
        "Support and feedback on real-time trading exercises."
      ],
    },
    requirements: [
      "Basic knowledge of trading recommended.",
      "Access to a trading platform for practice."
    ],
    terms: [
      "100% satisfaction guarantee with actionable strategies.",
      "Support continues post-masterclass for one month."
    ],
  },
  {
    title: "General/Basic Course",
    price:"$299",
    highlights: [
      "Learn the essentials of trading.",
      "Develop foundational market knowledge.",
      "Understand key trading concepts and strategies."
    ],
    details: {
      duration: "1 Month",
      content: [
        "Introduction to trading principles and terminology.",
        "Basics of P2P and Futures markets.",
        "Hands-on exercises to practice key concepts."
      ],
    },
    requirements: [
      "No prior experience required.",
      "Commitment of 5 hours per week for learning and practice."
    ],
    terms: [
      "Course material is accessible for the duration of the course.",
      "Certificate of completion is awarded after finishing all modules."
    ],
  },
  {
    title: "Project Signing",
    price:"$2,000",
    highlights: [
      "Opportunity to grow your trading capital significantly.",
      "Personalized guidance and mentorship.",
      "Comprehensive plan to achieve financial growth."
    ],
    details: {
      duration: "Custom, based on the project terms.",
      content: [
        "Hands-on mentorship to grow capital from $2,000 to $30,000+.",
        "Tailored trading strategies aligned with your goals.",
        "Ongoing progress tracking and adjustments."
      ],
    },
    requirements: [
      "Trading capital of $2,000.",
      "Laptop or desktop with internet access.",
      "Willingness to dedicate time for active trading."
    ],
    terms: [
      "A binding contract outlines specific growth goals.",
      "Both parties agree on clear objectives before starting.",
      "Commitment to the agreed period and milestones."
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
              <h3>{pkg.price}</h3>
            </div>
            <div className="card-body">
              <h3>Highlights</h3>
              <ul>
                {pkg.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <h3>Details</h3>
              <p><strong>Duration:</strong> {pkg.details?.duration || "N/A"}</p>
              <ul>
                {pkg.details?.content.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <h3>Requirements</h3>
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
              </ul>
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
