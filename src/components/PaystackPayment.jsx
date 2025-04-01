import React from "react";
import { usePaystackPayment } from "react-paystack";

const PaystackPayment = ({ amount, email }) => {
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100, // Convert amount to kobo
    publicKey: "your-public-key-here",
  };

  const onSuccess = (reference) => {
    console.log("Payment successful", reference);
    alert("Payment successful!");
  };

  const onClose = () => {
    console.log("Payment closed");
    alert("Payment closed.");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <button
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Pay Now
    </button>
  );
};

export default PaystackPayment;
