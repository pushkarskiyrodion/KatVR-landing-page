import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import SCSSVariables from "../../styles/utils/variables.module.scss";

import CloseIcon from "../Icons/CloseIcon";

const Modal = ({ onClose, isOpen, children, className }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(
      () => onClose(),
      parseFloat(SCSSVariables.modalCloseTime) * 1000
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className={classNames("modal", {
            "modal--hidden": !isVisible,
          })}
        >
          <div className="modal__container">
            <div className={className}>
              <CloseIcon onClose={handleClose} />
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Modal;
