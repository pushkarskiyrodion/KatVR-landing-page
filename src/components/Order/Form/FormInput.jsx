import React, { useEffect, useId, useState } from "react";
import classNames from "classnames";
import PropsTypes from "prop-types";

import { PhoneInput } from "@components/Contacts/PhoneInput";

import "./Form.scss";
import { translate } from "@helpers/translation";

export const FormInput = ({
  onChange,
  keysForTranslate,
  keysForTranslateError,
  keysForTranslatePlaceholder,
  type,
  name,
  children,
  pattern,
  value,
  isInputEmpty,
  lang,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const uniqueId = useId();
  const errorFill = translate(lang, ["ERROR", "INPUT_FILL"]);
  const [errorMessage, setErrorMessage] = useState(errorFill);

  useEffect(() => {
    setErrorMessage(errorFill);
  }, [lang]);

  const handleValidate = () => {
    setIsSelected(false);
    const regex = new RegExp(pattern);

    if (!regex.test(value)) {
      const errorValidation = translate(lang, keysForTranslateError);
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

  if (name === "phone") {
    return (
      <PhoneInput
        id={uniqueId}
        name={name}
        lang={lang}
        isInputEmpty={isInputEmpty}
        keysForTranslate={keysForTranslate}
        onChange={onChange}
        value={value}
        isSelected={isSelected}
        isValid={isValid}
        isEmpty={isEmpty}
        handleValidate={handleValidate}
        handleResetError={handleResetError}
        errorMessage={errorMessage}
      />
    );
  }

  return (
    <fieldset className="form__field">
      <legend className="page__text">
        <label
          htmlFor={uniqueId}
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

      {children ? (
        React.cloneElement(children, {
          handleValidate,
          handleResetError,
          toggleSelected: setIsSelected,
          onEmpty: setIsEmpty,
          keysForTranslatePlaceholder,
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
  keysForTranslate: PropsTypes.array,
  keysForTranslateError: PropsTypes.array,
  keysForTranslatePlaceholder: PropsTypes.array,
  type: PropsTypes.string,
  name: PropsTypes.string,
  children: PropsTypes.node,
  pattern: PropsTypes.string,
  value: PropsTypes.string,
  isInputEmpty: PropsTypes.bool,
  lang: PropsTypes.string,
};
