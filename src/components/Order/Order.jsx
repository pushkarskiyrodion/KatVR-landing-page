import React, { useContext, useState } from "react";
import { DropDown } from "@components/DropDown";
import { LangContext } from "@context/LangContext";
import { translate } from "@helpers/translation";

const quantity = ["1", "2", "3", "4"];
const PRICE = 1200;

export const Order = () => {
  const [value, setValue] = useState(quantity[0]);
  const lang = useContext(LangContext);

  return (
    <div className="order__product">
      <img
        className="order__image"
        src="../images/pictures/image-b.png"
        alt="order-image"
      />

      <div className="order__info">
        <div className="order__quantity">
          <span className="order__info-text">
            {translate(lang, ["QUANTITY"])}
          </span>

          <DropDown
            dropdownList={quantity}
            selectedValue={value}
            onSelect={setValue}
            itemClassName="dropdown__quantities__item"
            valueClassName="dropdown__quantities__value"
          />
        </div>

        <div className="order__price">
          <span className="order__info-text">{translate(lang, ["PRICE"])}</span>

          <div className="order__price-text">{PRICE * parseInt(value)}$</div>
        </div>
      </div>
    </div>
  );
};
