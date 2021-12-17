import React from 'react';
import '../css/Payment.css';
import { Link } from "react-router-dom";

// import components
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link className="item__link" to="/checkout">{basket?.length} items </Link>)
        </h1>

        {/* Delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>123 React, Lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
        </div>

        {/* Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="payment__section">
          <div className="payment__titile">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe will go here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;
