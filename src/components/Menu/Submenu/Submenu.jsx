import React from "react";
import PropTypes from "prop-types";

import { Menu } from "@components/Menu";

export const Submenu = ({ data, onClick }) => {
  return <Menu menuData={data} className={"sidebar__list"} onClick={onClick} />;
};

Submenu.propTypes = {
  data: PropTypes.node,
  onClick: PropTypes.func,
};
