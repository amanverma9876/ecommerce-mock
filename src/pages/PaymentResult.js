
import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentResult.css';

function PaymentResult() {
  const location = useLocation();
  const isSuccess = location.state?.success;

  return (
    <div className="payment-result">
      {isSuccess ? (
        <h1>Payment Successful!</h1>
      ) : (
        <h1>Payment Failed. Please try again.</h1>
      )}
      <p>Thank you for shopping with us!</p>
    </div>
  );
}

export default PaymentResult;
