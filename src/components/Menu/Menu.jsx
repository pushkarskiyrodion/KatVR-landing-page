import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Menu.scss";

import { LangContext } from "@context/LangContext";
import { translate } from "@helpers/translation";

export const Menu = React.memo(
  ({
    menuData,
    className = "",
    isOffOnMobile,
    isOffOnTablet,
    onClick = () => {},
  }) => {
    const lang = useContext(LangContext);

    return (
      <nav
        className={classNames("menu", {
          "menu__off--mobile": isOffOnMobile,
          "menu__off--tablet": isOffOnTablet,
        })}
      >
        <ul className={`menu__list ${className}`}>
          {menuData?.map(
            ({ href, keysForTranslate, id, children, value, modal }) =>
              href ? (
                <li className="menu__item" key={id}>
                  <HashLink
                    to={href}
                    className="menu__link"
                    onClick={(e) => onClick(e, children, value, modal)}
                  >
                    {translate(lang, keysForTranslate)}
                  </HashLink>
                </li>
              ) : (
                <li className="menu__item" key={id}>
                  <a
                    href=""
                    className="menu__link"
                    onClick={(e) => onClick(e, children, value, modal)}
                  >
                    {translate(lang, keysForTranslate)}
                  </a>
                </li>
              )
          )}
        </ul>
      </nav>
    );
  }
);

Menu.propTypes = {
  menuData: PropTypes.array,
  className: PropTypes.string,
  isOffOnMobile: PropTypes.bool,
  isOffOnTablet: PropTypes.bool,
  onClick: PropTypes.func,
};
