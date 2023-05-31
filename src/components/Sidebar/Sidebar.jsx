import React, { useState } from "react";
import PropTypes from "prop-types";

import CloseIcon from "../Icons/CloseIcon";
import Menu from "../Menu/Menu";
import SubMenu from "../Menu/Submenu";
import BackIcone from "../Icons/BackIcon";
import classNames from "classnames";

import { languages, menuData } from "../../data/data";

const sidebarData = [
  ...menuData,
  {
    id: 5,
    classNameForTranslate: "menu__language",
    children: languages,
  },
  {
    id: 6,
    classNameForTranslate: "menu__faq",
    modal: "faq",
  },
  {
    id: 7,
    classNameForTranslate: "menu__help",
    modal: "help",
  },
];

const Sidebar = ({ isOpen, onToggle, onFaq, onHelp, onSelect }) => {
  const [items] = useState(sidebarData);
  const [children, setChildren] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(isOpen);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onToggle(false), 500);
  };

  const handleClick = (e, children, value, modal) => {
    if (e.target.hash) {
      handleClose();
      return;
    }

    e.preventDefault();

    if (children) {
      setChildren(children);
      setShowSubMenu(true);
    }

    if (value) {
      onToggle(false);
      onSelect(value, e);
    }

    if (modal === "faq") {
      onFaq(true);
      handleClose();
    }

    if (modal === "help") {
      onHelp(true);
      handleClose();
    }
  };

  const handleBackClick = () => {
    setShowSubMenu(false);
  };

  return (
    <nav
      className={classNames("sidebar sidebar__menu", {
        "sidebar--open": isVisible,
        "sidebar--close": !isVisible,
      })}
    >
      <div className="container container__menu">
        <div className="sidebar__content">
          <div className="sidebar__icons">
            <CloseIcon
              onClose={handleClose}
              className={"sidebar__close-icon"}
            />

            {showSubMenu && (
              <BackIcone
                onBack={handleBackClick}
                className={"sidebar__back-icon"}
              />
            )}
          </div>

          {showSubMenu ? (
            <SubMenu
              data={children}
              onClick={handleClick}
              onClose={handleClose}
            />
          ) : (
            <Menu
              menuData={items}
              className={"sidebar__list"}
              onClick={handleClick}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.func,
  onToggle: PropTypes.func,
  onFaq: PropTypes.func,
  onHelp: PropTypes.func,
  onSelect: PropTypes.func,
};

export default Sidebar;
