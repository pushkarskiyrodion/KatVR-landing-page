import React, { useContext } from "react";

import { LangContext } from "@context/LangContext";
import { translate } from "@helpers/translation";

export const MessageText = () => {
  const lang = useContext(LangContext);

  return (
    <div className="message">
      <h3 className="page__title">
        {translate(lang, ["SENT_MESSAGE", "TITLE"])}
        <span className="page__title--secondary">
          {translate(lang, ["SENT_MESSAGE", "TITLE_SECONDARY"])}
        </span>
      </h3>
      <p className="page__text">{translate(lang, ["SENT_MESSAGE", "TEXT"])}</p>
    </div>
  );
};
