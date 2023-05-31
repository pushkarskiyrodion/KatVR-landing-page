import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import classNames from "classnames";

import { LangContext } from "../../context/LangContext";
import { translate } from "../../helpers/translation";

const Menu = ({
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
          ({
            href = "",
            classNameForTranslate,
            id,
            children,
            value,
            modal,
          }) => (
            <li className="menu__item" key={id}>
              <HashLink
                to={href}
                className="menu__link"
                onClick={(e) => onClick(e, children, value, modal)}  
              >
                {translate(classNameForTranslate, lang)}
              </HashLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menuData: PropTypes.array,
  className: PropTypes.string,
  isOffOnMobile: PropTypes.bool,
  isOffOnTablet: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Menu;
