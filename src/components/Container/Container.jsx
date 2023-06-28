import React from "react";
import PropTypes from "prop-types";

import "./Container.scss";

export const Container = ({ children }) => (
  <div className="container">{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};
