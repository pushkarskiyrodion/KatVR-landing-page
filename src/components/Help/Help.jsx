import React, { useContext } from "react";
import PropTypes from "prop-types";

import { LangContext } from "../../context/LangContext";
import ContactUs from "../Contact-us/Contact-us";

import { translate } from "../../helpers/translation";

const Help = ({ onFAQ, onHelpClose }) => {
  const lang = useContext(LangContext);

  return (
    <>
      <h2 className="page__title">
        {translate("helpTitle1", lang)}&nbsp;
        <span className="page__title--secondary">
          {translate("helpTitle--secondary", lang)}
        </span>
        &nbsp;{translate("helpTitle2", lang)}
      </h2>

      <p className="modal__text help__text">
        {translate("help__text", lang)}
        <a href="./#" className="modal__link" onClick={onFAQ}>
          {" "}
          FAQs
        </a>
        .
        <br />
        <br />
        <span className="help__please">
          {translate("help__please", lang)}&nbsp;
        </span>
        <a
          onClick={onHelpClose}
          href="./#contacts"
          className="modal__link help__contact"
        >
          {translate("help__contact", lang)}
        </a>
        <span className="help__you">&nbsp;{translate("help__you", lang)}</span>
      </p>

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

export default Help;
