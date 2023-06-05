import React, { useContext } from "react";

import { LangContext } from "@context/LangContext";
import { translate } from "@helpers/translation";

export const MessageText = () => {
  const lang = useContext(LangContext);

  return (
    <div className="message">
      <h3 className="page__title">
        {translate("sentMessageTitle__primary", lang)}&nbsp;
        <span className="page__title--secondary">
          {translate("sentMessageTitle__secondary", lang)}
        </span>
      </h3>
      <p className="page__text">{translate("sentMessageText", lang)}</p>
    </div>
  );
};
