import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "@context/LangContext";
import { translate } from "@helpers/translation";

export const OrderComplete = () => {
  const lang = useContext(LangContext);

  return (
    <>
      <h2 className="page__title order__complete__title">
        {translate(lang, ["ORDER_COMPLETE", "TITLE"])}
        <span className="page__title--secondary">
          {translate(lang, ["ORDER_COMPLETE", "TITLE_SECONDARY"])}
        </span>
        {translate(lang, ["ORDER_COMPLETE", "TITLE_END"])}
      </h2>

      <p className="page__text">
        {translate(lang, ["ORDER_COMPLETE", "TEXT"])}
      </p>

      <button className="page__button order__complete__button">
        <Link to="/" className="page__button-link">
          {translate(lang, ["BACK_TO_HOMEPAGE"])}
        </Link>
      </button>
    </>
  );
};
