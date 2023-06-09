import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "@context/LangContext";
import { translate } from "@helpers/translation";

export const OrderComplete = () => {
  const lang = useContext(LangContext);

  return (
    <>
      <h2 className="page__title order__complete__title">
        {translate("orderCompleteTitle__first", lang)}
        <span className="page__title--secondary">
          &nbsp;
          {translate("orderCompleteTitle--secondary", lang)}
          &nbsp;
        </span>
        {translate("orderCompleteTitle__second", lang)}
      </h2>

      <p className="page__text">{translate("orderCompleteText", lang)}</p>

      <button className="order__complete__button">
        <Link to="/" className="page__button-link">
          {translate("BackToHomepage", lang)}
        </Link>
      </button>
    </>
  );
};
