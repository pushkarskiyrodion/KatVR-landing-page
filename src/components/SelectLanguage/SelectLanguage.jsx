import React from "react";
import PropTypes from "prop-types";
import DropDown from "../DropDown/DropDown";
import { languages } from "../../data/data";

const SelectLanguage = ({ onSelect, lang }) => {
  return (
    <DropDown
      entities={languages}
      onSelect={onSelect}
      selectedValue={lang}
      parentClassName="select-language"
      valueClassName="select-language__value"
      listClassName="select-language__list"
    />
  );
};

SelectLanguage.propTypes = {
  onSelect: PropTypes.func,
  lang: PropTypes.string,
};

export default SelectLanguage;
