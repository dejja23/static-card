import React from "react";
import "./creditcard.css";

const CreditCard = () => {
  return (
    <div className="d-flex flex-column w-25 credit-card bg-primary text-white p-3 m-5">
      <h2 className="align-self-end">CREDIT CARD</h2>
      <img
        src="https://cdn140.picsart.com/288622685092211.png"
        className="credit-card-img"
        alt="chip"
      />
      <p className="align-self-start">7253 3256 7895 1245</p>
      <div className="d-flex justify-content-between">
        <div>
          <p>5422</p>
          <p>Card Holder</p>
        </div>
        <p>11/50</p>
        <img
          src="https://riojawinetrips.com/wp-content/uploads/2019/06/visa-mastercard-logo.jpg"
          className="credit-card-img"
          alt="visa-mastercard"
        />
      </div>
    </div>
  );
};
export default CreditCard;
