import React from "react";
import PropTypes from "prop-types";

import { Modal } from "@components/Modal";
import "./Video.scss";

export const Video = ({ onClose, isClick }) => (
  <Modal isOpen={isClick} onClose={onClose} className="modal--video">
    <iframe
      className="video"
      src="https://www.youtube.com/embed/SvTbB19bvIw"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </Modal>
);

Video.propTypes = {
  onClose: PropTypes.func,
  isClick: PropTypes.bool,
};
