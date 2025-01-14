import { QRCodeCanvas } from 'qrcode.react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { FaMobileAlt, FaBitcoin, FaPaypal, FaCreditCard } from 'react-icons/fa';

const PaymentPage = () => {
  const [activeMethod, setActiveMethod] = useState('mpesa');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const cryptoAmount = '0.05';
  const location = useLocation();
  const { packageDetails } = location.state || {};

  if (!packageDetails) {
    return (
      <div className="error-message">
        <p>No package selected. Please go back and choose a package.</p>
      </div>
    );
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    setError(!/^\+?\d{9,15}$/.test(e.target.value) ? 'Invalid phone number' : '');
  };

  const handlePayment = () => {
    alert(`Processing payment for method: ${activeMethod}`);
  };

  return (
    <div className="payment-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Complete Your Payment</h1>
        <p>Choose your preferred method below.</p>
      </div>

      {/* Payment Container */}
      <div className="payment-container">
        {/* Tabs */}
        <div className="payment-methods">
          <button
            className={`payment-method-tab payment-mpesa ${activeMethod === 'mpesa' ? 'active' : ''}`}
            onClick={() => setActiveMethod('mpesa')}
          >
            <FaMobileAlt /> M-Pesa
          </button>
          <button
            className={`payment-method-tab payment-binance ${activeMethod === 'binance' ? 'active' : ''}`}
            onClick={() => setActiveMethod('binance')}
          >
            <FaBitcoin /> Binance
          </button>
          <button className="payment-method-tab disabled">
            <FaCreditCard /> Card (Coming Soon)
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="payment-content">
          {activeMethod === 'mpesa' && (
            <div className="payment-mpesa-payment fade-in">
              <h2>Pay via Paybill</h2>
              <p>
                Send <strong>KSH {packageDetails.price}</strong> to the following:
              </p>
              <p><strong>PayBill:</strong> 123456</p>
              <p><strong>Account Number:</strong> 123456</p>
            </div>
          )}

          {activeMethod === 'binance' && (
            <div className="payment-crypto-payment fade-in">
              <h2>Pay with Binance</h2>
              <p>
                Send <strong>{cryptoAmount} BTC</strong> to the wallet address below:
              </p>
              <p><strong>Wallet Address:</strong> 0x123abc456def...</p>
              <div className="payment-qr-code">
                <QRCodeCanvas value="0x123abc456def..." size={150} />
              </div>
              <p className="payment-note">Ensure the exact amount is sent to avoid delays.</p>
            </div>
          )}

          {activeMethod === 'paypal' && (
            <div className="payment-paypal-payment fade-in">
              <h2>Pay with PayPal</h2>
              <button className="payment-paypal-button" onClick={handlePayment}>
                Proceed to PayPal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;













