import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { translate } from "../../helpers/translation";

const MessageText = () => {
  const lang = useContext(LangContext);

  return (
    <div className="message">
      <h3 className="page__title">
        {translate("sentMessageTitle1", lang)}&nbsp;
        <span className="page__title--secondary">
          {translate("sentMessageTitle2", lang)}
        </span>
      </h3>
      <p className="page__text">{translate("sentMessageText", lang)}</p>
    </div>
  );
};

export default MessageText;
