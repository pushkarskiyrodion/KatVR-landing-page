import React, { useContext, useState } from "react";

import { faq } from "@data/faq";
import { translate } from "@helpers/translation";
import { LangContext } from "@context/LangContext";

import "./Accordion.scss";

export const Accordion = () => {
  const [items] = useState(faq);
  const [opened, setOpened] = useState(0);
  const lang = useContext(LangContext);

  const handleClick = (id) => {
    const value = id !== opened ? id : 0;

    setOpened(value);
  };

  return (
    <>
      <h2 className="page__title">
        {translate(lang, ["FAQ", "TITLE"])}
        <div className="page__title--secondary accordion__title--secondary">
          {translate(lang, ["FAQ", "TITLE_SECONDARY"])}
        </div>
      </h2>

      <div className="accordion">
        {items.map(({ id, keysForTranslateText, keysForTranslateTitle }) => (
          <div
            className="accordion__content"
            key={id}
            onClick={() => handleClick(id)}
            aria-expanded={opened !== id}
          >
            <h3 className="page__subtitle accordion__subtitle">
              {translate(lang, keysForTranslateTitle)}
            </h3>

            <p className="page__text">
              {translate(lang, keysForTranslateText)}
            </p>

            <div className="accordion__updated">
              Last updated: Wed, June 12 2019 7:07 PM UTC +03:00
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
