import React from "react";
import PropTypes from "prop-types";

export const Container = ({ children }) => (
  <div className="container">{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};
