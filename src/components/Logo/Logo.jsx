import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

export const Logo = () => {
  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Link
      to="/"
      className="logo"
      onClick={onScrollToTop}
    >
      <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
    </Link>
  )
};
