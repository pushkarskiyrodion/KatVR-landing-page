import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { LangContext } from "context/LangContext";

import { isArrayofObjects } from "@helpers/isArrayOfObjects";
import { translate } from "helpers/translation";

export const DropDown = ({
  dropdownList,
  parentClassName = "",
  valueClassName = "",
  listClassName = "",
  selectedValue = "",
  onSelect,
  handleValidate,
  handleResetError,
  toggleSelected,
  onEmpty,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(selectedValue);
  const lang = useContext(LangContext);
  const containerRef = useRef();

  const isNeedSearch = dropdownList?.length > 10;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setInputValue(selectedValue);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedValue]);

  useEffect(() => {
    setInputValue(selectedValue);
  }, [dropdownList, selectedValue]);

  const toggle = () => {
    setIsOpen((current) => !current);
  };

  const handleClick = (item) => {
    onSelect(item);

    if (isNeedSearch) {
      setInputValue(item);
      toggleSelected(false);
      onEmpty(false);
    }

    setIsOpen(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const visibleItems = useMemo(() => {
    return dropdownList?.filter((item) => {
      if (!isNaN(item) || inputValue === selectedValue || !isNeedSearch) {
        return item;
      }

      return item.toLowerCase().startsWith(inputValue.toLowerCase());
    });
  }, [dropdownList, inputValue, selectedValue]);

  return (
    <>
      {dropdownList ? (
        <div className={`dropdown ${parentClassName}`} ref={containerRef}>
          {isNeedSearch ? (
            <input
              className="dropdown__input"
              onClick={toggle}
              value={inputValue.trimStart()}
              onChange={handleChange}
              onFocus={handleResetError}
              onBlur={handleValidate}
              placeholder={translate("dropdownCity", lang)}
            />
          ) : (
            <div
              className={classNames(`dropdown__value ${valueClassName}`, {
                "select-language__value--opened": valueClassName && isOpen,
              })}
              onClick={toggle}
            >
              {selectedValue[0]
                ? selectedValue[0].toUpperCase() + selectedValue.slice(1)
                : selectedValue}
            </div>
          )}

          {isOpen && !isArrayofObjects(visibleItems) && (
            <ul className={`dropdown__list ${listClassName}`}>
              {visibleItems.map((item) => {
                return (
                  <li
                    className={classNames({
                      dropdown__item: !isNeedSearch,
                      "dropdown__item-input": isNeedSearch,
                      hidden: selectedValue === item && !isNeedSearch,
                    })}
                    key={item}
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          )}

          {isOpen && isArrayofObjects(visibleItems) && (
            <ul className={`dropdown__list ${listClassName}`}>
              {visibleItems.map(({ id, value, text }) => (
                <li
                  className={classNames({
                    dropdown__item: !isNeedSearch,
                    hidden: selectedValue === value && !isNeedSearch,
                    "select-language__list--opened": isOpen,
                  })}
                  key={id}
                  onClick={() => handleClick(value)}
                >
                  {text}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="dropdown__temporary"></div>
      )}
    </>
  );
};

DropDown.propTypes = {
  dropdownList: PropTypes.array,
  parentClassName: PropTypes.string,
  valueClassName: PropTypes.string,
  listClassName: PropTypes.string,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  handleValidate: PropTypes.func,
  handleResetError: PropTypes.func,
  toggleSelected: PropTypes.func,
  onEmpty: PropTypes.func,
};
