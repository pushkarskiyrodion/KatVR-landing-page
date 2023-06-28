import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";

import { LangContext } from "@context/LangContext";
import { ContactUs } from "@components/Contact-us";

import "./Help.scss";

import { translate } from "@helpers/translation";

export const Help = ({ onFAQ, onHelpClose }) => {
  const lang = useContext(LangContext);

  return (
    <>
      <h2 className="page__title">
        {translate(lang, ["HELP", "TITLE"])}
        <span className="page__title--secondary">
          {translate(lang, ["HELP", "TITLE_SECONDARY"])}
        </span>
        {translate(lang, ["HELP", "TITLE_END"])}
      </h2>

      <div className="modal__text help__text">
        {translate(lang, ["HELP", "TEXT"])}
        <span className="modal__link" onClick={onFAQ}>
          FAQs.
        </span>

        <div className="help__please">
          {translate(lang, ["HELP", "PLEASE"])}
          <HashLink
            onClick={onHelpClose}
            to="./#contacts"
            className="modal__link help__contact"
          >
            {translate(lang, ["HELP", "CONTACT"])}
          </HashLink>
          <span className="help__you">
            {translate(lang, ["HELP", "DIRECTLY"])}
          </span>
        </div>
      </div>

      <div className="modal__wrapper">
        <div className="modal__contacts">
          <div className="modal__title">
            {translate(lang, ["HELP", "INSTRUCTION"])}
          </div>

          <div className="modal__title">
            {translate(lang, ["HELP", "WARANTY"])}
          </div>

          <div className="modal__title">
            {translate(lang, ["HELP", "SERVICE_POLICE"])}
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
