import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { PaymentSystem } from "../PaymentSystem";
import { LangContext } from "@context/LangContext";

import { translate } from "@helpers/translation";

const expirationDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

export const Pay = () => {
  const [expirationDate, setExpirationDate] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [firstCardNumber, setFirstCardNumber] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const lang = useContext(LangContext);
  const navigate = useNavigate();
  const expirationDateRef = useRef();
  const cardholderNameRef = useRef();
  const cardNumbersRef = useRef([]);
  const cvvRef = useRef();

  const isCardNumbersSelected = cardNumbersRef.current.some(
    (ref) => ref === selectedInput
  );

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
    setIsValid(true);
    const { value } = e.target;
    const formattedValue = value
      .replace(/\D/g, "")
      .slice(0, 4)
      .replace(/(\d{2})(\d)/, "$1/$2");

    setExpirationDate(formattedValue);
    handleNextInputFocus(e, cvvRef);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (expirationDateRegex.test(expirationDate)) {
      setExpirationDate("");

      e.target.reset();
      navigate("../order-complete");
    }
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

  const handleBlur = (e) => {
    if (expirationDateRef.current === e.target) {
      setIsValid(expirationDateRegex.test(expirationDateRef.current.value));
    }

    setSelectedInput(null);
  };

  return (
    <form className="form__card" onSubmit={handleSubmit}>
      <label
        className={classNames("page__text", {
          form__selected: isCardNumbersSelected,
        })}
        htmlFor="cardNumber-first"
      >
        {translate("cardNumber", lang)}*
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

      <label
        className={classNames("page__text", {
          form__selected: selectedInput === cardholderNameRef.current,
        })}
        htmlFor="cardholder-name"
      >
        {translate("cardHolder", lang)}*
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
          <label
            className={classNames("page__text", {
              "text-error": !isValid,
              form__selected: selectedInput === expirationDateRef.current,
            })}
            htmlFor="expiration-date"
          >
            {!isValid
              ? translate("emailError", lang)
              : translate("expiration", lang)}
            *
          </label>

          <input
            type="text"
            id="expiration-date"
            name="expiration-date"
            className={classNames("form__card-expiration-input", {
              "form__selected-input":
                selectedInput === expirationDateRef.current,
              "form__card-expiration-input--error": !isValid,
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

        <div className="form__card-cvv">
          <label
            className={classNames("page__text", {
              form__selected: selectedInput === cvvRef.current,
            })}
            htmlFor="cvv"
          >
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
