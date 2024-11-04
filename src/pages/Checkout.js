
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const handlePayment = (isSuccess) => {
    navigate('/payment-result', { state: { success: isSuccess } });
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {product ? (
        <div className="checkout-product">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ) : (
        <p>No product selected. Please go back to the product page.</p>
      )}

      <div className="checkout-actions">
        <h3>Select Payment Option:</h3>
        <button onClick={() => handlePayment(true)}>Credit Card (Success)</button>
        <button onClick={() => handlePayment(false)}>Debit Card (Failure)</button>
      </div>
    </div>
  );
}

export default Checkout;
