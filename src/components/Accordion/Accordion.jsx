import React, { useContext, useState } from "react";

import { answers } from "@data";
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
        <div className="page__title--secondary">
          {translate("faqAnswers", lang)}
        </div>
      </h2>

      <div className="accordion">
        {items.map(
          ({ id, classNameForTranslateText, classNameForTranslateTitle }) => (
            <div
              className="accordion__content"
              key={id}
              onClick={() => handleClick(id)}
              aria-expanded={opened !== id}
            >
              <h3 className="accordion__subtitle">
                {translate(classNameForTranslateTitle, lang)}
              </h3>

              <p className="page__text">
                {translate(classNameForTranslateText, lang)}
              </p>

              <div className="accordion__updated">
                Last updated: Wed, June 12 2019 7:07 PM UTC +03:00
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
