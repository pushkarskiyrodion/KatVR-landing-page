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

import "./Contacts.scss";

const inputs = [
  {
    id: 1,
    keysForTranslate: ["NAME"],
    name: "name",
    type: "text",
    isEmpty: false,
    keysForTranslateError: ["ERROR", "NAME"],
    pattern: "^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{3,16}$",
  },
  {
    id: 2,
    keysForTranslate: ["EMAIL"],
    name: "email",
    type: "email",
    isEmpty: false,
    keysForTranslateError: ["ERROR", "EMAIL"],
    pattern: "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9.]+$",
  },
  {
    id: 3,
    keysForTranslate: ["PHONE"],
    name: "phone",
    type: "number",
    isEmpty: false,
    pattern: "^.{19}$",
    keysForTranslateError: ["ERROR", "PHONE"],
  },
];

export const Contacts = React.memo(() => {
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
  const messageText = isMessage ? ["ERROR", "INPUT_FILL"] : ["MESSAGE"];

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
            <p className="page__subtitle contacts__subtitle">
              {translate(lang, ["CONTACTS", "QUESTIONS"])}
            </p>

            <h2 className="page__title contacts__title">
              {translate(lang, ["CONTACTS", "TITLE"])}
              <span className="page__title--secondary">
                {translate(lang, ["CONTACTS", "TITLE_SECONDARY"])}
              </span>
            </h2>

            <p className="contacts__callback page__text contacts__callback--before">
              {translate(lang, ["CONTACTS", "REPLY"])}
            </p>

            <ContactUs />
          </div>

          <div className="contacts__form">
            <form action="#" onSubmit={handleSubmit}>
              {formField.map(
                ({
                  id,
                  name,
                  keysForTranslate,
                  type,
                  pattern,
                  keysForTranslateError,
                  isEmpty,
                }) => (
                  <FormInput
                    name={name}
                    key={id}
                    keysForTranslate={keysForTranslate}
                    type={type}
                    onChange={handleChange}
                    isInputEmpty={isEmpty}
                    pattern={pattern}
                    keysForTranslateError={keysForTranslateError}
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
                    {translate(lang, messageText)}*
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
                  {translate(lang, ["ERROR", "FILL"])}
                </span>
              )}

              <button className="page__button contacts__button" type="submit">
                {translate(lang, ["CONTACTS", "US"])}
              </button>

              <p className="contacts__callback page__text contacts__callback--after">
                {translate(lang, ["CONTACTS", "REPLY"])}
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
});
