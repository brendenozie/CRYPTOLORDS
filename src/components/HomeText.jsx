import React from 'react';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Trading Journey Today!</h1>
          <p>Proven strategies, actionable insights, and guaranteed results.</p>
          <div className="cta-buttons">
            <button className="cta-button">Join Now</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="scroll-indicator">&#8595;</div>
      </section>
    </div>
  );
};

export default Homepage;
