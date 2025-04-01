
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePaystackPayment } from "react-paystack";
import { FaCreditCard, FaLock, FaShieldAlt } from 'react-icons/fa';
import axios from "axios";

const PaymentPage = () => {
  const location = useLocation();
  const { packageDetails } = location.state || {};

  const publicKey = `${process.env.REACT_APP_LIVE_PUBLIC_KEY}`; // Replace with your Paystack Public Key
  const currency = "KES"; // Kenyan Shillings
  const amount = packageDetails?.price * 100 || 0;

  const [exchangeRate, setExchangeRate] = useState(150); // Default rate (adjustable)

  useEffect(() => {
    // Fetch exchange rate from an API
    axios
      .get("https://api.exchangerate-api.com/v4/latest/USD") // Free Exchange API
      .then((response) => {
        setExchangeRate(response.data.rates.KES);
      })
      .catch((error) => {
        console.error("Error fetching exchange rate:", error);
      });
  }, []);

  // Convert USD to KES
  const amountKES = amount * exchangeRate;

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: "user@example.com", // Replace dynamically
    amount: amountKES, // Convert to kobo
    publicKey: publicKey,
    currency:currency
  };

  const initializePayment = usePaystackPayment(paystackConfig);

  if (!packageDetails) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 border border-red-500">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-red-500">No package selected</h2>
          <p className="text-gray-500 mt-2">Please go back and choose a package.</p>
        </div>
      </div>
    );
  }

  const handlePaystackPayment = () => {
    initializePayment(
      (reference) => {
        console.log("Payment successful", reference);
        alert("Payment successful!");
      },
      () => {
        console.log("Payment closed");
        alert("Payment canceled.");
      }
    );
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
        <div className="flex items-center justify-center w-full h-screen bg-black p-6 border border-blue-500">
      <div className="relative bg-gray-900 text-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center transform transition-all duration-500 hover:scale-105 flex flex-col items-center border border-green-500">
        {/* Decorative Glows */}
        <div className="absolute -top-14 -right-14 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-14 -left-14 w-32 h-32 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

        {/* Header */}
        <h2 className="text-3xl font-bold text-white">Secure Payment</h2>
        <p className="text-gray-400 mt-2">Complete your transaction safely.</p>

        {/* Package Details */}
        <div className="payment-mpesa-payment fade-in">     
          <h3 className="text-lg font-semibold text-white">{packageDetails.name}</h3>
          <p className="text-gray-300 mt-1"><strong>Total Amount:</strong></p>
          <p className="text-4xl font-extrabold text-white">${packageDetails.price}</p>
        </div>

        {/* Paystack Button */}
        <button
          onClick={handlePaystackPayment}
          className="mt-6 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl w-full"
        >
          <FaCreditCard className="text-xl" />
          Pay with Paystack
        </button>

        {/* Security Assurance */}
        <div className="mt-6 flex justify-between w-full text-gray-300 text-sm">
          <span className="flex items-center gap-1">
            <FaLock className="text-green-400" />
            100% Secure
          </span>
          <span className="flex items-center gap-1">
            <FaShieldAlt className="text-blue-400" />
            Fraud Protection
          </span>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default PaymentPage;













