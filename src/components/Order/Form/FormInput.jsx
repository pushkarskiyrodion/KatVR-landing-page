import React, { useContext, useId, useState } from "react";
import classNames from "classnames";
import PropsTypes from "prop-types";

import { translate } from "@helpers/translation";
import { LangContext } from "@context/LangContext";

export const FormInput = ({
  onChange,
  classNameForTranslate,
  classNameForTranslateError,
  type,
  name,
  children,
  pattern,
  value,
  isInputEmpty,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const uniqueId = useId();
  const lang = useContext(LangContext);
  const errorFill = translate("errorFillInput", lang);
  const [errorMessage, setErrorMessage] = useState(errorFill);

  const handleValidate = () => {
    setIsSelected(false);
    const regex = new RegExp(pattern);

    if (!regex.test(value)) {
      const errorValidation = translate(classNameForTranslateError, lang);
      setIsValid(false);
      setErrorMessage(errorValidation);
    } else {
      setIsValid(true);
    }

    if (value.trim() === "") {
      setIsEmpty(true);
      setErrorMessage(errorFill);
    } else {
      setIsEmpty(false);
    }
  };

  const handleResetError = () => {
    setIsSelected(true);
    setIsEmpty(false);
    setIsValid(true);
  };

  return (
    <fieldset className="form__field">
      <legend className="form__label">
        <label
          htmlFor={uniqueId}
          className={classNames({
            "text-error": isEmpty || !isValid || isInputEmpty,
            form__selected: isSelected,
          })}
        >
          {isInputEmpty || !isValid || isEmpty
            ? errorMessage
            : translate(classNameForTranslate, lang)}
          *
        </label>
      </legend>

      {children ? (
        React.cloneElement(children, {
          handleValidate,
          handleResetError,
          toggleSelected: setIsSelected,
          onEmpty: setIsEmpty,
        })
      ) : (
        <input
          className={classNames("form__input", {
            "input-error": isEmpty || !isValid || isInputEmpty,
            "form__selected-input": isSelected,
          })}
          name={name}
          id={uniqueId}
          type={type}
          onChange={onChange}
          pattern={pattern}
          value={value}
          onBlur={handleValidate}
          onFocus={handleResetError}
        />
      )}
    </fieldset>
  );
};

FormInput.propTypes = {
  onChange: PropsTypes.func,
  classNameForTranslate: PropsTypes.string,
  classNameForTranslateError: PropsTypes.string,
  type: PropsTypes.string,
  name: PropsTypes.string,
  children: PropsTypes.node,
  pattern: PropsTypes.string,
  value: PropsTypes.string,
  isInputEmpty: PropsTypes.bool,
};
