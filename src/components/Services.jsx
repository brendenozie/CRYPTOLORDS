import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import book from '../assets/book.jpg';
import chart from '../assets/chart.jpg';
import wallet from '../assets/wallet.jpg';
import community from '../assets/community.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Crypto Learning Hub",
      description: "Master the basics and advanced concepts of cryptocurrencies through comprehensive courses, tutorials, and guides.",
      icon: book,
      link: "/learn",
    },
    {
      id: 2,
      title: "Market Analysis Tools",
      description: "Access real-time charts, trends, and analytics to stay informed about market movements and make data-driven decisions.",
      icon: chart,
      link: "/analysis",
    },
    {
      id: 3,
      title: "Portfolio Tracker",
      description: "Monitor your cryptocurrency investments and track your portfolio’s growth with detailed performance insights.",
      icon: wallet,
      link: "/portfolio",
    },
    {
      id: 4,
      title: "Community Discussions",
      description: "Join our active forums and chat groups to discuss trends, share insights, and connect with fellow crypto enthusiasts.",
      icon: community,
      link: "/community",
    },
  ];

  return (
    <main className="services-page">
      <section className="services-hero-section">
        <div className="container">
          <motion.h1
            className="services-hero-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover Our Services
          </motion.h1>
          <motion.p
            className="services-hero-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Tools and knowledge to help you thrive in the cryptocurrency world.
          </motion.p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <motion.div
            className="services-grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
            }}
          >
            {services.map((service) => (
              <motion.div
                className="service-card"
                key={service.id}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={service.icon} alt={`${service.title} Icon`} className="service-icon" />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;