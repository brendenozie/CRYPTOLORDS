import React, { useEffect } from 'react';
import video from '../assets/hero-video.mp4';
import { Link, NavLink } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Homepage = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="homepage">
      <section className="hero">
        <video className="hero-bg" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="gradient-text">Your Trading Breakthrough Awaits</h1>
          <p className="hero-subheading">
            Empowering 50,000+ traders with proven strategies, expert insights, and automated tools.
          </p>
          <ul className="hero-benefits">
            <li>📈 <span>Maximize Your Profits</span></li>
            <li>🔍 <span>Gain Market Clarity</span></li>
            <li>⏳ <span>Save Time with Automated Analysis</span></li>
          </ul>
          <div className="cta-buttons">
            <AnchorLink href={"#packages"}  className="cta-button" >🚀 Get Started Now</AnchorLink>
            <AnchorLink href={"#packages"} className="secondary-button" >📘 Learn More</AnchorLink>
          </div>
        </div>

        <div className="social-proof">
          <p>⭐ Trusted by <span className="counter" data-target="50000">0</span> traders worldwide</p>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">Explore</span>
          <div className="scroll-animation"></div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
