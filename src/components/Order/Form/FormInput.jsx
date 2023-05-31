import React, { useContext, useId, useState } from "react";
import classNames from "classnames";
import PropsTypes from "prop-types";
import { translate } from "../../../helpers/translation";
import { LangContext } from "../../../context/LangContext";

const FormInput = ({
  onChange,
  classNameForTranslate,
  classNameForTranslateError,
  type,
  name,
  children,
  pattern,
  value,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const lang = useContext(LangContext);
  const uniqueId = useId();

  const handleValidate = () => {
    setIsSelected(false);
    const regex = new RegExp(pattern);

    if (!regex.test(value)) {
      const errorText = translate(classNameForTranslateError, lang);
      setIsValid(false);
      setErrorMessage(errorText);
    } else {
      setIsValid(true);
    }

    if (value.trim() === "") {
      const errorText = translate("errorFillInput", lang);
      setIsEmpty(true);
      setErrorMessage(errorText);
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
            "text-error": isEmpty || !isValid,
            form__selected: isSelected,
          })}
        >
          {!isEmpty && isValid
            ? translate(classNameForTranslate, lang)
            : errorMessage}
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
            "input-error": isEmpty || !isValid,
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
};

export default FormInput;
