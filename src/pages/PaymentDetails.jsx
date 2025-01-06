
import React from 'react';

const PaymentDetails = () => {
  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Details</h2>
      <form className="payment-form">
        {/* Card Information */}
        <div className="input-group">
          <label htmlFor="card-number" className="input-label">Card Number</label>
          <input
            type="text"
            id="card-number"
            placeholder="1234 5678 9012 3456"
            className="input-field"
          />
        </div>

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="expiry-date" className="input-label">Expiry Date</label>
            <input
              type="text"
              id="expiry-date"
              placeholder="MM/YY"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="cvv" className="input-label">CVV</label>
            <input
              type="password"
              id="cvv"
              placeholder="•••"
              className="input-field"
            />
          </div>
        </div>

        {/* Payment Summary */}
        <div className="payment-summary">
          <h3 className="summary-title">Summary</h3>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>$100.00</span>
          </div>
          <div className="summary-item">
            <span>Tax</span>
            <span>$8.00</span>
          </div>
          <div className="summary-item total">
            <span>Total</span>
            <span>$108.00</span>
          </div>
        </div>

        {/* Confirm Payment Button */}
        <button type="submit" className="confirm-button">Confirm Payment</button>
      </form>
    </div>
  );
};

export default PaymentDetails;
