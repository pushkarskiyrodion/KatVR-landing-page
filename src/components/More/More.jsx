import React, { useContext } from "react";

import { LangContext } from "../../context/LangContext";

import Container from "../Container/Container";

import { translate } from "../../helpers/translation";

const More = () => {
  const lang = useContext(LangContext);

  return (
    <section className="more page__section" id="more">
      <Container>
        <div className="more__header">
          <h2 className="more__title">
            {translate("more__title", lang)}
            <span className="more__title--secondary">
              &nbsp;{translate("more__title--secondary", lang)}!
            </span>
          </h2>

          <p className="more__subtitle">{translate("more__subtitle", lang)}</p>
        </div>

        <div className="more__content">
          <div className="more__card">
            <img
              src="./images/education.svg"
              alt="education"
              className="page__card-image"
            />

            <h2 className="page__card-title education">
              {translate("education", lang)}
            </h2>

            <p className="page__card-text education__text">
              {translate("education__text", lang)}
            </p>
          </div>

          <div className="more__card">
            <img
              src="./images/skyline.svg"
              alt="skyline"
              className="page__card-image"
            />

            <h2 className="page__card-title estate">
              {translate("estate", lang)}
            </h2>

            <p className="page__card-text estate__text">
              {translate("estate__text", lang)}
            </p>
          </div>

          <div className="more__card">
            <img
              src="./images/fitness.svg"
              alt="fitness"
              className="page__card-image"
            />

            <h2 className="page__card-title fitness">
              {translate("fitness", lang)}
            </h2>

            <p className="page__card-text fitness__text">
              {translate("fitness__text", lang)}
            </p>
          </div>

          <div className="more__card">
            <img
              src="./images/network.svg"
              alt="network"
              className="page__card-image"
            />

            <h2 className="page__card-title social">
              {translate("social", lang)}
            </h2>

            <p className="page__card-text social__text">
              {translate("social__text", lang)}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default More;
