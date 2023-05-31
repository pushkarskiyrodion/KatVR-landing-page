import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/">
    <img src="../images/logo.svg" alt="logo" className="logo" />
  </Link>
);

export default Logo;
