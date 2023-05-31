import React from "react";
import PropTypes from "prop-types";

const PaymentSystem = ({ value }) => {
  const systemSrc = value.startsWith("4")
    ? "../images/payment-systems/visa.png"
    : "../images/payment-systems/mastercard.png";

  return (
    <div className="order__payment-system">
      <img alt="payment-system" src={systemSrc} />
    </div>
  );
};

PaymentSystem.propTypes = {
  value: PropTypes.string,
};

export default PaymentSystem;
