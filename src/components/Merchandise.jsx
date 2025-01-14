import React from "react";
import notebook from '../assets/notebook.png';
import shirt from '../assets/8.jpg';
import sweatshirt from '../assets/7.jpg';
import hoodie from '../assets/2.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { p } from "framer-motion/client";
import { Link } from "react-router-dom";

// update trigger
const Merchandise = () => {
  const merchandiseData = {
    title: "Our Merchandise",
    details: {
      content: [
        { name: "Notebook", description: "Track your trading notes and strategies.", image: notebook, price: "$15" },
        { name: "Sweatshirt", description: "Comfortable and stylish for any occasion.", image: sweatshirt, price: "$20" },
        { name: "Hoodie", description: "Casual yet professional trading apparel.", image: hoodie, price: "$25" }
      ]
    }
  };

  return (
    <div className="merchandise-container">
      <h1 className="merchandise-title">{merchandiseData.title}</h1>
      <section className="merchandise-details">
        {merchandiseData.details.content.map((item, index) => (
          <div className="merchandise-item" key={index}>
            <img src={item.image} alt={item.name} className="merchandise-image" />
            <div className="merchandise-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <h2>{item.price}</h2>
              <Link
                              to="/payment"
                              state={{ packageDetails: item }}
                              className="service-link"
                            >PROCEED</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Merchandise;
