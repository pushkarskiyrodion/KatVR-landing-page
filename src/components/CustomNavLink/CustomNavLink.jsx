import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import { LangContext } from "@context/LangContext";
import { translate } from "@helpers/translation";

export const CustomNavLink = ({ to, classNameForTranslate }) => {
  const lang = useContext(LangContext);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames("order__link", {
          "order__link-active": isActive,
        })
      }
      onClick={(e) => e.preventDefault()}
    >
      {translate(classNameForTranslate, lang)}
    </NavLink>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string,
  classNameForTranslate: PropTypes.string,
};
