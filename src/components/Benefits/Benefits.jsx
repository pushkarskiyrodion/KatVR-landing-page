import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { LangContext } from "@context/LangContext";
import { Container } from "@components/Container";
import { translate } from "@helpers/translation";
import { benefits } from "@data/images";

import "./Benefits.scss";

export const Benefits = () => {
  const [items] = useState(benefits);
  const lang = useContext(LangContext);

  return (
    <section className="benefits page__section" id="benefits">
      <Container>
        <h2 className="page__title benefits__title">
          {translate(lang, ["BENEFITS", "TITLE"])}
          <span className="page__title--secondary">
            {translate(lang, ["BENEFITS", "TITLE_SECONDARY"])}
          </span>
        </h2>

        <div className="benefits__cards">
          {items.map(
            ({ id, keysForTranslateText, keysForTranslateTitle, src, alt }) => (
              <div className="page__card" key={id}>
                <img src={src} alt={alt} className="page__card-image" />

                <h3 className="page__card-title">
                  {translate(lang, keysForTranslateTitle)}
                </h3>

                <p className="page__card-text">
                  {translate(lang, keysForTranslateText)}
                </p>
              </div>
            )
          )}
        </div>

        <button className="page__button benefits__button">
          <Link to="order/place-order" className="page__button-link">
            {translate(lang, ["BUY_NOW"])}
          </Link>
        </button>
      </Container>
    </section>
  );
};
