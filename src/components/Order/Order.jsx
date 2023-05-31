import React, { useContext, useState } from "react";
import DropDown from "../DropDown/DropDown";
import { LangContext } from "../../context/LangContext";
import { translate } from "../../helpers/translation";

const quantity = ["1", "2", "3", "4"];
const PRICE = 1200;

const Order = () => {
  const [value, setValue] = useState(1);
  const lang = useContext(LangContext);

  return (
    <div className="order__product">
      <img
        className="order__image"
        src="./images/pictures/image-b.png"
        alt="1"
      />

      <div className="order__info">
        <div className="order__quantity">
          <span className="order__info-text">
            {translate("quantity", lang)}
          </span>

          <DropDown
            entities={quantity}
            className="dropdown__quantities"
            selectedValue={value}
            onSelect={setValue}
          />
        </div>

        <div className="order__price">
          <span className="order__info-text">{translate("price", lang)}</span>

          <div className="order__price-text">{PRICE * parseInt(value)}$</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
