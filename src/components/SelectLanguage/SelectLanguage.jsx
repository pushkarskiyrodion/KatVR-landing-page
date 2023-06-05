import React from "react";
import PropTypes from "prop-types";
import { DropDown } from "@components/DropDown";
import { languages } from "@data/data";

export const SelectLanguage = ({ onSelect, lang }) => {
  return (
    <DropDown
      dropdownList={languages}
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
