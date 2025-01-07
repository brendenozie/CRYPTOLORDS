import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { FaCheckCircle, FaGift } from 'react-icons/fa';

const NewPaymentDetails = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: '',
  });

  const location = useLocation();
  const { packageDetails } = location.state || {};

  if (!packageDetails) {
    return (
      <div className="error-message">
        <p>No package selected. Please go back and choose a package.</p>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      alert("🎉 Payment Successful!");
      setIsProcessing(false);
    }, 3000);
  };

  const { cardNumber, expiryDate, cvv, cardHolder } = cardDetails;

  return (
    <div className="payment-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Complete Your Payment</h1>
        <p>Secure and encrypted checkout for your package.</p>
      </div>

      <div className="payment-container">
        {/* Package Summary */}
        <div className="package-summary">
          <div className="header">
            <div className="icon">
              <FaGift size={30} color="#4caf50" />
            </div>
            <h2>{packageDetails.title}</h2>
          </div>

          <ul className="highlights">
            {packageDetails.highlights.map((highlight, index) => (
              <li key={index}>
                <FaCheckCircle size={16} color="#4caf50" /> {highlight}
              </li>
            ))}
          </ul>

          <div className="details">
            <p><strong>Duration:</strong> {packageDetails.details.duration}</p>
            <p><strong>Price:</strong> <span className="price">$2000.00</span></p>
          </div>
        </div>


        {/* Payment Form */}
        <div className="payment-form-container">
          {/* Card Preview */}
          <div className="card-preview">
            <div className="card">
              <div className="card-number">{cardNumber || '**** **** **** ****'}</div>
              <div className="card-holder">{cardHolder || 'Card Holder'}</div>
              <div className="card-expiry">{expiryDate || 'MM/YY'}</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handlePayment} className="payment-form">
            <div className="input-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="input-group">
              <label>Card Holder Name</label>
              <input
                type="text"
                name="cardHolder"
                value={cardHolder}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="input-group">
                <label>CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={cvv}
                  onChange={handleInputChange}
                  placeholder="•••"
                  required
                />
              </div>
            </div>
            <button type="submit" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Pay $2000.00'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPaymentDetails;
