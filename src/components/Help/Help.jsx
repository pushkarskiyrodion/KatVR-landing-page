import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

import { LangContext } from "@context/LangContext";
import { ContactUs } from "@components/Contact-us";

import { translate } from "@helpers/translation";

export const Help = ({ onFAQ, onHelpClose }) => {
  const lang = useContext(LangContext);

  return (
    <>
      <h2 className="page__title">
        {translate("helpTitle__first", lang)}
        <span className="page__title--secondary">
          {translate("helpTitle--secondary", lang)}
        </span>
        {translate("helpTitle__second", lang)}
      </h2>

      <div className="modal__text help__text">
        {translate("help__text", lang)}
        <span className="modal__link" onClick={onFAQ}>
          FAQs.
        </span>

        <div className="help__please">
          {translate("help__please", lang)}
          <HashLink
            onClick={onHelpClose}
            to="./#contacts"
            className="modal__link help__contact"
          >
            {translate("help__contact", lang)}
          </HashLink>
          <span className="help__you">
            {translate("help__you", lang)}
          </span>
        </div>
      </div>

      <div className="modal__wrapper">
        <div className="modal__contacts">
          <div className="modal__title">{translate("instruction", lang)}</div>

          <div className="modal__title">{translate("waranty", lang)}</div>

          <div className="modal__title">
            {translate("service-police", lang)}
          </div>
        </div>

        <ContactUs className="help__contacts" />
      </div>
    </>
  );
};

Help.propTypes = {
  onFAQ: PropTypes.func,
  onHelpClose: PropTypes.func,
};
