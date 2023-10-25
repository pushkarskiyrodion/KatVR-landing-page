import React, { useContext } from "react";

import { LangContext } from "@context/LangContext";
import { Container } from "@components/Container";
import { translate } from "@helpers/translation";

import "./More.scss";

export const More = () => {
  const lang = useContext(LangContext);

  return (
    <section
      className="more page__section more--tablet-padding"
      id="more"
    >
      <Container>
        <div className="more__header">
          <h2 className="page__title">
            {translate(lang, ["MORE", "TITLE"])}
            <span className="page__title--secondary">
              {translate(lang, ["MORE", "TITLE_SECONDARY"])}!
            </span>
          </h2>

          <p className="page__subtitle">
            {translate(lang, ["MORE", "SUBTITLE"])}
          </p>
        </div>

        <div className="more__content">
          <div className="page__card more__card">
            <img
              src="./images/education.svg"
              alt="education"
              className="page__card-image"
            />

            <h2 className="page__card-title">
              {translate(lang, ["MORE", "EDUCATION", "TITLE"])}
            </h2>

            <p className="page__card-text">
              {translate(lang, ["MORE", "EDUCATION", "TEXT"])}
            </p>
          </div>

          <div className="page__card more__card">
            <img
              src="./images/skyline.svg"
              alt="skyline"
              className="page__card-image"
            />

            <h2 className="page__card-title">
              {translate(lang, ["MORE", "ESTATE", "TITLE"])}
            </h2>

            <p className="page__card-text estate__text">
              {translate(lang, ["MORE", "ESTATE", "TEXT"])}
            </p>
          </div>

          <div className="page__card more__card">
            <img
              src="./images/fitness.svg"
              alt="fitness"
              className="page__card-image"
            />

            <h2 className="page__card-title">
              {translate(lang, ["MORE", "FITNESS", "TITLE"])}
            </h2>

            <p className="page__card-text">
              {translate(lang, ["MORE", "FITNESS", "TEXT"])}
            </p>
          </div>

          <div className="page__card more__card">
            <img
              src="./images/network.svg"
              alt="network"
              className="page__card-image"
            />

            <h2 className="page__card-title">
              {translate(lang, ["MORE", "SOCIAL", "TITLE"])}
            </h2>

            <p className="page__card-text">
              {translate(lang, ["MORE", "SOCIAL", "TEXT"])}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
