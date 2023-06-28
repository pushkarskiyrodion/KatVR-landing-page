import React from "react";
import PropTypes from "prop-types";
import { Modal } from "@components/Modal";

import "./Message.scss";

export const Message = ({ isSubmitted, onClose, children }) => {
  const closeAfterDelay = () => {
    setTimeout(() => onClose(), 2700);
  };

  closeAfterDelay();

  return (
    <Modal
      isOpen={isSubmitted}
      onClose={onClose}
      className={"message__wrapper"}
    >
      {children}
    </Modal>
  );
};

Message.propTypes = {
  isSubmitted: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
