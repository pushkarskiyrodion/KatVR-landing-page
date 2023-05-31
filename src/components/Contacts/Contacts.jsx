import React, { useContext, useState } from "react";
import classNames from "classnames";

import ContactUs from "../Contact-us/Contact-us";
import Container from "../Container/Container";
import FormInput from "../Order/Form/FormInput";
import Message from "./Message";
import MessageText from "./MessageText";

import { checkValidity } from "../../helpers/checkValidity";
import { translate } from "../../helpers/translation";
import { LangContext } from "../../context/LangContext";

const inputs = [
  {
    id: 1,
    classNameForTranslate: "name",
    name: "name",
    type: "text",
    classNameForTranslateError: "nameError",
    pattern: "^[A-Za-z]{3,16}$",
  },
  {
    id: 2,
    classNameForTranslate: "email",
    name: "email",
    type: "email",
    classNameForTranslateError: "emailError",
    pattern: "^[a-zA-Z0-9]+@[a-zA-Z0-9]+$",
  },
  {
    id: 3,
    classNameForTranslate: "phone",
    name: "phone",
    type: "number",
    pattern: "^[0-9]{5,16}$",
    classNameForTranslateError: "phoneError",
  },
];

const Contacts = () => {
  const [fieldInputs] = useState(inputs);
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const lang = useContext(LangContext);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((current) => ({
      ...current,
      [name]: value,
    }));

    setIsError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkValidity(inputs, setIsError, info)) {
      setIsSubmitted(true);

      setInfo({
        message: "",
        email: "",
        name: "",
        phone: "",
      });
    }
  };

  const handleClosePopUp = () => {
    setIsSubmitted(false);
  };

  const handleMessageFocus = () => {
    setIsSelected(true);
  };

  const handleMessageBlur = () => {
    setIsSelected(false);
  };

  return (
    <section className="contacts page__section" id="contacts">
      <Container>
        <div className="contacts__wrapper">
          <div className="contacts__info">
            <p className="contacts__subtitle">
              {translate("contacts__questions", lang)}
            </p>

            <h2 className="contacts__title">
              {translate("contactsTitle", lang)}
              <span className="page__title--secondary">
                &nbsp;{translate("contactsTitle--secondary", lang)}
              </span>
            </h2>

            <p className="contacts__callback page__text contacts__callback--before">
              {translate("contacts__reply", lang)}
            </p>

            <ContactUs />
          </div>

          <div className="contacts__form">
            <form action="#" onSubmit={handleSubmit}>
              {fieldInputs.map(
                ({
                  id,
                  name,
                  classNameForTranslate,
                  type,
                  pattern,
                  classNameForTranslateError,
                }) => (
                  <FormInput
                    name={name}
                    key={id}
                    classNameForTranslate={classNameForTranslate}
                    type={type}
                    onChange={handleChange}
                    pattern={pattern}
                    classNameForTranslateError={classNameForTranslateError}
                    value={info[name]}
                  />
                )
              )}

              <fieldset className="form__field">
                <legend className="form__label">
                  <label
                    htmlFor="message"
                    className={classNames({
                      form__selected: isSelected,
                    })}
                  >
                    {translate("message", lang)}
                  </label>
                </legend>

                <textarea
                  name="message"
                  id="message"
                  cols="3"
                  rows="3"
                  className={classNames("form__message", {
                    "form__selected-input": isSelected,
                  })}
                  required
                  spellCheck
                  onChange={handleChange}
                  onFocus={handleMessageFocus}
                  onBlur={handleMessageBlur}
                  value={info["message"]}
                />
              </fieldset>

              {isError && (
                <span className="form__error">
                  {translate("errorFill", lang)}
                </span>
              )}

              <button className="contacts__button" type="submit">
                {translate("contactsUs", lang)}
              </button>

              <p className="contacts__callback page__text contacts__callback--after">
                {translate("contacts__reply", lang)}
              </p>
            </form>
          </div>
        </div>

        {isSubmitted && (
          <Message isSubmitted={isSubmitted} onClose={handleClosePopUp}>
            <MessageText />
          </Message>
        )}
      </Container>
    </section>
  );
};

export default Contacts;
