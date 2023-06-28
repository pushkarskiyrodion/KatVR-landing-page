import React from "react";
import PropTypes from "prop-types";

import "./Contact-us.scss";

export const ContactUs = ({ className = "contact-us" }) => (
  <div className={className}>
    <a href="tel: +86-0571-86105373" className="contact-us__text">
      +86-0571-86105373
    </a>

    <a href="mailto:global@katvr.com" className="contact-us__text">
      global@katvr.com
    </a>

    <a href="mailto:overseas@katvr.com" className="contact-us__text">
      overseas@katvr.com
    </a>
  </div>
);

ContactUs.propTypes = {
  className: PropTypes.string,
};
