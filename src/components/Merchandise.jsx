import React from "react";
import notebook from '../assets/5.jpg';
import sweatshirt from '../assets/3.jpg';
import hoodie from '../assets/2.jpg';

const Merchandise = () => {
  const merchandiseData = {
    title: "Our Merchandise",
    details: {
      content: [
        { name: "Notebook", description: "Track your trading notes and strategies.", image: notebook },
        { name: "Sweatshirt", description: "Comfortable and stylish for any occasion.", image: sweatshirt },
        { name: "Hoodie", description: "Casual yet professional trading-themed apparel.", image: hoodie }
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
              <a href="#">Learn More</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Merchandise;
