import React, { useContext, useState } from "react";
import classNames from "classnames";

import { ContactUs } from "@components/Contact-us";
import { Container } from "@components/Container";
import { FormInput } from "@components/Order/Form/FormInput";
import { Message } from "./Message";
import { MessageText } from "./Message/MessageText";

import { checkValidity } from "@helpers/checkValidity";
import { translate } from "@helpers/translation";
import { LangContext } from "@context/LangContext";

const inputs = [
  {
    id: 1,
    classNameForTranslate: "name",
    name: "name",
    type: "text",
    isEmpty: false,
    classNameForTranslateError: "nameError",
    pattern: "^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{3,16}$",
  },
  {
    id: 2,
    classNameForTranslate: "email",
    name: "email",
    type: "email",
    isEmpty: false,
    classNameForTranslateError: "emailError",
    pattern: "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9.]+$",
  },
  {
    id: 3,
    classNameForTranslate: "phone",
    name: "phone",
    type: "number",
    isEmpty: false,
    pattern: "^.{19}$",
    classNameForTranslateError: "phoneError",
  },
];

export const Contacts = () => {
  const [formField, setFormFields] = useState(inputs);
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const lang = useContext(LangContext);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const isMessage = info.message === "" && isSubmitClicked;
  const messageTextClass = isMessage ? "errorFillInput" : "message";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsSubmitClicked(false);

    setInfo((current) => ({
      ...current,
      [name]: value,
    }));

    setFormFields((current) =>
      current.map((input) => ({
        ...input,
        isEmpty: false,
      }))
    );

    setIsError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitClicked(true);

    if (checkValidity(inputs, setIsError, info) && info.message !== "") {
      setIsSubmitted(true);
      setIsSubmitClicked(false);

      setInfo({
        message: "",
        email: "",
        name: "",
        phone: "",
      });
    } else {
      Object.entries(info).forEach(([prop, value]) => {
        setFormFields((current) =>
          current.map((input) => {
            if (input.name === prop && !value) {
              return { ...input, isEmpty: true };
            }

            return input;
          })
        );
      });
    }
  };

  const handleCloseMessage = () => {
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
                {translate("contactsTitle--secondary", lang)}
              </span>
            </h2>

            <p className="contacts__callback page__text contacts__callback--before">
              {translate("contacts__reply", lang)}
            </p>

            <ContactUs />
          </div>

          <div className="contacts__form">
            <form action="#" onSubmit={handleSubmit}>
              {formField.map(
                ({
                  id,
                  name,
                  classNameForTranslate,
                  type,
                  pattern,
                  classNameForTranslateError,
                  isEmpty,
                }) => (
                  <FormInput
                    name={name}
                    key={id}
                    classNameForTranslate={classNameForTranslate}
                    type={type}
                    onChange={handleChange}
                    isInputEmpty={isEmpty}
                    pattern={pattern}
                    classNameForTranslateError={classNameForTranslateError}
                    value={info[name]}
                    lang={lang}
                  />
                )
              )}

              <fieldset className="form__field">
                <legend className="page__text">
                  <label
                    htmlFor="message"
                    className={classNames({
                      form__selected: isSelected,
                      "text-error": isMessage,
                    })}
                  >
                    {translate(messageTextClass, lang)}*
                  </label>
                </legend>

                <textarea
                  name="message"
                  id="message"
                  cols="3"
                  rows="3"
                  className={classNames("form__message", {
                    "form__selected-input": isSelected,
                    "input-error": isMessage,
                  })}
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
          <Message isSubmitted={isSubmitted} onClose={handleCloseMessage}>
            <MessageText />
          </Message>
        )}
      </Container>
    </section>
  );
};
