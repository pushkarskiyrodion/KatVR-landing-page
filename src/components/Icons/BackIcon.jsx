import React from "react";
import PropTypes from "prop-types";

const BackIcone = ({ onBack, className }) => (
  <i className={`icon--back ${className}`} onClick={onBack}>
    <svg
      width="10"
      height="19"
      viewBox="0 0 10 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.5 1L1 9.5L9.5 18" stroke="white" />
    </svg>
  </i>
);

BackIcone.propTypes = {
  onBack: PropTypes.func,
  className: PropTypes.string,
};

export default BackIcone;
