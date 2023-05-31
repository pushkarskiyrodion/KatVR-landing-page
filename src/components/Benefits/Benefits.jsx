import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { LangContext } from "../../context/LangContext";

import Container from "../Container/Container";

import { translate } from "../../helpers/translation";
import { benefits } from "../../data/data";

const Benefits = () => {
  const [items] = useState(benefits);
  const lang = useContext(LangContext);

  return (
    <section className="benefits page__section" id="benefits">
      <Container>
        <h2 className="page__title benefits__title">
          {translate("benefits__title", lang)}
          <span className="page__title--secondary">
            &nbsp;{translate("benefits__title--secondary", lang)}
          </span>
        </h2>

        <div className="benefits__cards">
          {items.map(({ id, textClassName, titleClassName, src }) => (
            <div className="page__card" key={id}>
              <img
                src={src}
                alt={titleClassName}
                className="page__card-image"
              />

              <h3 className="page__card-title">
                {translate(titleClassName, lang)}
              </h3>

              <p className="page__card-text">
                {translate(textClassName, lang)}
              </p>
            </div>
          ))}
        </div>

        <button className="benefits__button">
          <Link to="order/place-order" className="page__button-link">
            {translate("buy-now", lang)}
          </Link>
        </button>
      </Container>
    </section>
  );
};

export default Benefits;
