import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className="logo">
    <img src="./images/logo.svg" alt="logo" />
  </Link>
);
