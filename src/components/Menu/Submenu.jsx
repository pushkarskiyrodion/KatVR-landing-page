import React from "react";
import PropTypes from "prop-types";

import Menu from "./Menu";

const SubMenu = ({ data, onClick }) => {
  return <Menu menuData={data} className={"sidebar__list"} onClick={onClick} />;
};

SubMenu.propTypes = {
  data: PropTypes.node,
  onClick: PropTypes.func,
};

export default SubMenu;
