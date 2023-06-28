import React from "react";
import InputMask from "react-input-mask";
import classNames from "classnames";
import propTypes from "prop-types";

import { translate } from "helpers/translation";

export const PhoneInput = ({
  isInputEmpty,
  pattern,
  keysForTranslate,
  value,
  onChange,
  name,
  isValid,
  isSelected,
  isEmpty,
  handleValidate,
  handleResetError,
  errorMessage,
  lang,
  id,
}) => (
  <fieldset className="form__field">
    <legend className="page__text">
      <label
        htmlFor={id}
        className={classNames({
          "text-error": isEmpty || !isValid || isInputEmpty,
          form__selected: isSelected,
        })}
      >
        {isInputEmpty || !isValid || isEmpty
          ? errorMessage
          : translate(lang, keysForTranslate)}
        *
      </label>
    </legend>

    <InputMask
      className={classNames("form__input", {
        "input-error": isEmpty || !isValid || isInputEmpty,
        "form__selected-input": isSelected,
      })}
      mask="+999 (99) 999 99 99"
      maskChar=""
      type="tel"
      name={name}
      id={id}
      pattern={pattern}
      onChange={onChange}
      value={value}
      onBlur={handleValidate}
      onFocus={handleResetError}
    />
  </fieldset>
);

PhoneInput.propTypes = {
  isInputEmpty: propTypes.bool,
  pattern: propTypes.string,
  keysForTranslate: propTypes.array,
  value: propTypes.string,
  onChange: propTypes.func,
  name: propTypes.string,
  handleValidate: propTypes.func,
  handleResetError: propTypes.func,
  errorMessage: propTypes.string,
  isValid: propTypes.bool,
  isSelected: propTypes.bool,
  isEmpty: propTypes.bool,
  lang: propTypes.string,
  id: propTypes.string,
};
