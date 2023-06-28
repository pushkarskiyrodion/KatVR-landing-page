import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { LangContext } from "context/LangContext";
import { translate } from "helpers/translation";

import "./DropDown.scss";

export const DropDown = React.memo(
  ({
    dropdownList,
    parentClassName = "",
    valueClassName = "",
    listClassName = "",
    itemClassName = "",
    valueClassNameOpened = "",
    selectedValue = "",
    onSelect,
    handleValidate,
    handleResetError,
    toggleSelected,
    keysForTranslatePlaceholder,
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

      if (toggleSelected) {
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
                className={classNames("dropdown__input", {
                  "dropdown__input--opened": isOpen,
                })}
                onClick={toggle}
                value={inputValue.trimStart()}
                onChange={handleChange}
                onFocus={handleResetError}
                onBlur={handleValidate}
                placeholder={translate(lang, keysForTranslatePlaceholder)}
              />
            ) : (
              <div
                tabIndex={0}
                className={classNames(`dropdown__value ${valueClassName}`, {
                  "dropdown__value--opened": isOpen,
                  dropdown__placeholder: !selectedValue,
                  [valueClassNameOpened]: valueClassNameOpened && isOpen,
                })}
                onClick={toggle}
                onFocus={handleResetError}
                onBlur={handleValidate}
              >
                {selectedValue[0]
                  ? selectedValue[0].toUpperCase() + selectedValue.slice(1)
                  : selectedValue}
              </div>
            )}

            {isOpen && (
              <ul className={`dropdown__list ${listClassName}`}>
                {visibleItems.map((item) => {
                  const isObject =
                    typeof item === "object" &&
                    item !== null &&
                    !Array.isArray(item);

                  return (
                    <li
                      className={classNames({
                        dropdown__item: !isNeedSearch,
                        dropdown__item__input: isNeedSearch,
                        hidden:
                          (!isObject && selectedValue === item) ||
                          (isObject && selectedValue === item.value),
                        [itemClassName]: isOpen,
                      })}
                      key={isObject ? item.id : item}
                      onClick={() => handleClick(isObject ? item.value : item)}
                    >
                      {isObject ? item.text : item}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ) : (
          <div className="dropdown__temporary"></div>
        )}
      </>
    );
  }
);

DropDown.propTypes = {
  dropdownList: PropTypes.array,
  parentClassName: PropTypes.string,
  valueClassName: PropTypes.string,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  valueClassNameOpened: PropTypes.string,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  handleValidate: PropTypes.func,
  handleResetError: PropTypes.func,
  toggleSelected: PropTypes.func,
  keysForTranslatePlaceholder: PropTypes.array,
  onEmpty: PropTypes.func,
};
