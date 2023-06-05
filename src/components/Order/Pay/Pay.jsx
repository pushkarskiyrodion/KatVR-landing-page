import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { PaymentSystem } from "../PaymentSystem";
import { LangContext } from "@context/LangContext";

import { translate } from "@helpers/translation";

export const Pay = () => {
  const [expirationDate, setExpirationDate] = useState("");
  const [firstCardNumber, setFirstCardNumber] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const lang = useContext(LangContext);
  const navigate = useNavigate();
  const expirationDateRef = useRef();
  const cardholderNameRef = useRef();
  const cardNumbersRef = useRef([]);
  const cvvRef = useRef();

  const handleInputChange = (event, nexInputIndex) => {
    if (event.target.value.length === event.target.maxLength) {
      cardNumbersRef.current[nexInputIndex].focus();
    }
  };

  const handleNextInputFocus = (e, ref) => {
    if (e.target.value.length === e.target.maxLength) {
      ref.current.focus();
    }
  };

  const handleFirstCardInputChange = (e) => {
    handleInputChange(e, 1);
    setFirstCardNumber(e.target.value);
  };

  const handleExpirationChange = (e) => {
    handleNextInputFocus(e, cvvRef);
    const { value } = e.target;
    const formattedValue = value
      .replace(/\D/g, "")
      .slice(0, 4)
      .replace(/(\d{2})(\d)/, "$1/$2");

    setExpirationDate(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpirationDate("");

    e.target.reset();
    navigate("../order-complete");
  };

  const handleCardFocus = (e, ref) => {
    if (e.target === ref) {
      setSelectedInput(ref);
    }
  };

  const handleFocus = (e, ref) => {
    if (e.target === ref.current) {
      setSelectedInput(ref.current);
    }
  };

  const handleBlur = () => {
    setSelectedInput(null);
  };

  return (
    <form className="form__card" onSubmit={handleSubmit}>
      <label htmlFor="cardNumber-first" className="form__label">
        {translate("cardNumber", lang)}
      </label>

      <div className="form__card-number">
        <div className="form__card-number__wrapper">
          <input
            type="number"
            id="cardNumber-first"
            name="cardNumber-first"
            className={classNames("form__card-input", {
              "form__selected-input":
                selectedInput === cardNumbersRef.current[0],
            })}
            placeholder="0000"
            value={firstCardNumber}
            required
            maxLength="4"
            ref={(el) => (cardNumbersRef.current[0] = el)}
            onChange={handleFirstCardInputChange}
            onFocus={(e) => handleCardFocus(e, cardNumbersRef.current[0])}
            onBlur={handleBlur}
          />

          <input
            type="number"
            id="cardNumber-second"
            name="cardNumber-second"
            className={classNames("form__card-input", {
              "form__selected-input":
                selectedInput === cardNumbersRef.current[1],
            })}
            placeholder="0000"
            required
            maxLength="4"
            ref={(el) => (cardNumbersRef.current[1] = el)}
            onChange={(e) => handleInputChange(e, 2)}
            onFocus={(e) => handleCardFocus(e, cardNumbersRef.current[1])}
            onBlur={handleBlur}
          />

          <input
            type="number"
            id="cardNumber-third"
            name="cardNumber-third"
            className={classNames("form__card-input", {
              "form__selected-input":
                selectedInput === cardNumbersRef.current[2],
            })}
            placeholder="0000"
            required
            maxLength="4"
            ref={(el) => (cardNumbersRef.current[2] = el)}
            onChange={(e) => handleInputChange(e, 3)}
            onFocus={(e) => handleCardFocus(e, cardNumbersRef.current[2])}
            onBlur={handleBlur}
          />

          <input
            type="number"
            id="cardNumber-fourth"
            name="cardNumber-fourth"
            className={classNames("form__card-input", {
              "form__selected-input":
                selectedInput === cardNumbersRef.current[3],
            })}
            placeholder="0000"
            required
            maxLength="4"
            ref={(el) => (cardNumbersRef.current[3] = el)}
            onChange={(e) => handleNextInputFocus(e, cardholderNameRef)}
            onFocus={(e) => handleCardFocus(e, cardNumbersRef.current[3])}
            onBlur={handleBlur}
          />
        </div>

        {firstCardNumber && <PaymentSystem value={firstCardNumber} />}
      </div>

      <label htmlFor="cardholder-name" className="form__label">
        {translate("cardHolder", lang)}
      </label>

      <input
        type="text"
        id="cardholder-name"
        name="cardholder-name"
        className={classNames("form__input", {
          "form__selected-input": selectedInput === cardholderNameRef.current,
        })}
        required
        ref={cardholderNameRef}
        onFocus={(e) => handleFocus(e, cardholderNameRef)}
        onBlur={handleBlur}
      />

      <div className="form__card-date">
        <div className="form__card-expiration">
          <label htmlFor="expiration-date" className="form__label">
            {translate("expiration", lang)}
          </label>
          <input
            type="text"
            id="expiration-date"
            name="expiration-date"
            className={classNames("form__card-expiration-input", {
              "form__selected-input":
                selectedInput === expirationDateRef.current,
            })}
            maxLength="5"
            required
            placeholder="MM/YY"
            value={expirationDate}
            ref={expirationDateRef}
            onChange={handleExpirationChange}
            onFocus={(e) => handleFocus(e, expirationDateRef)}
            onBlur={handleBlur}
          />
        </div>

        <div className="form__card-expiration">
          <label htmlFor="cvv" className="form__label">
            CVV*
          </label>
          <input
            type="password"
            className={classNames("form__card-input-cvv", {
              "form__selected-input": selectedInput === cvvRef.current,
            })}
            id="cvv"
            name="cvv"
            placeholder="000"
            maxLength="3"
            minLength="3"
            required
            ref={cvvRef}
            onFocus={(e) => handleFocus(e, cvvRef)}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <button className="order__button">{translate("purchase", lang)}</button>
    </form>
  );
};
