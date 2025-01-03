import React from 'react';
import book from '../assets/wallet.jpg';

const Featurespage = () => {
  return (
    <section className="features">
      <h2 className="features-heading">What We Are About?</h2>
      <p className="features-subheading">
        Empowering your trading journey with insights, mentorship, and strategies.
      </p>
      <div className="features-grid">
        <div className="feature">
          <img src={book} alt="Real-Time Market Insights" className="feature-image" />
          <div className="feature-content">
            <h3>Real-Time Market Insights</h3>
            <p>Stay updated with actionable market signals to maximize your gains.</p>
          </div>
        </div>
        <div className="feature">
          <img
            src={book}
            alt="Expert-Led Courses"
            className="feature-image"
          />
          <div className="feature-content">
            <h3>Expert-Led Courses</h3>
            <p>Learn from the best with our beginner and advanced trading programs.</p>
          </div>
        </div>
        <div className="feature">
          <img
            src={book}
            alt="Personalized Mentorship"
            className="feature-image"
          />
          <div className="feature-content">
            <h3>Personalized Mentorship</h3>
            <p>Get one-on-one guidance to tailor your trading journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featurespage;
