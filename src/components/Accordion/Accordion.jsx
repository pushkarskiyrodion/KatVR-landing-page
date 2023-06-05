import React, { useContext, useState } from "react";

import { answers } from "@data/data";
import { translate } from "@helpers/translation";
import { LangContext } from "@context/LangContext";

export const Accordion = () => {
  const [items] = useState(answers);
  const [opened, setOpened] = useState(0);
  const lang = useContext(LangContext);

  const handleClick = (id) => {
    const value = id !== opened ? id : 0;

    setOpened(value);
  };

  return (
    <>
      <h2 className="page__title">
        {translate("faqQuestions", lang)}&nbsp;
        <br />
        <span className="page__title--secondary">
          {translate("faqAnswers", lang)}
        </span>
      </h2>

      <div className="faq">
        {items.map(
          ({ id, classNameForTranslateText, classNameForTranslateTitle }) => (
            <div
              className="faq__content"
              key={id}
              onClick={() => handleClick(id)}
              aria-expanded={opened !== id}
            >
              <h1 className="faq__subtitle">
                {translate(classNameForTranslateTitle, lang)}
              </h1>

              <svg
                className="faq__icon"
                width="9"
                height="5"
                viewBox="0 0 9 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: opened === id ? "rotate(90deg)" : "rotate(0)",
                }}
              >
                <path
                  d="M4.5 5L0.602885 0.5L8.39711 0.500001L4.5 5Z"
                  fill="#05C2DF"
                />
              </svg>

              <p className="page__text">
                {translate(classNameForTranslateText, lang)}
              </p>

              <div className="faq__updated">
                Last updated: Wed, June 12 2019 7:07 PM UTC +03:00
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
