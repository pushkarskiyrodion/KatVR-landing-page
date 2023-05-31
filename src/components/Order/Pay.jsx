import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentSystem from "./PaymentSystem";
import classNames from "../../../node_modules/classnames/index";
import { LangContext } from "../../context/LangContext";
import { translate } from "../../helpers/translation";

const Pay = () => {
  const [expirationDate, setExpirationDate] = useState("");
  const [firstCardNumber, setFirstCardNumber] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const lang = useContext(LangContext);
  const navigate = useNavigate();
  const expirationDateRef = useRef();
  const cardholderNameRef = useRef();
  const cardNumber1Ref = useRef();
  const cardNumber2Ref = useRef();
  const cardNumber3Ref = useRef();
  const cardNumber4Ref = useRef();
  const cvvRef = useRef();

  function handleInputChange(event, nextInputRef) {
    if (event.target.value.length === event.target.maxLength) {
      nextInputRef.current.focus();
    }
  }

  const handleFirstCardInputChange = (e) => {
    handleInputChange(e, cardNumber2Ref);
    setFirstCardNumber(e.target.value);
  };

  const handleExpirationChange = (e) => {
    handleInputChange(e, cvvRef);
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
      <label htmlFor="card_number1" className="form__label">
        {translate("cardNumber", lang)}
      </label>

      <div className="form__card-number">
        <div className="form__card-number__wrapper">
          <input
            type="number"
            id="card_number1"
            name="card_number1"
            className={classNames("form__card-input", {
              "form__selected-input": selectedInput === cardNumber1Ref.current,
            })}
            placeholder="0000"
            value={firstCardNumber}
            required
            maxLength="4"
            ref={cardNumber1Ref}
            onChange={handleFirstCardInputChange}
            onFocus={(e) => handleFocus(e, cardNumber1Ref)}
            onBlur={handleBlur}
          />

          <input
            type="number"
            id="card_number2"
            name="card_number2"
            className={classNames("form__card-input", {
              "form__selected-input": selectedInput === cardNumber2Ref.current,
            })}
            placeholder="0000"
            required
            maxLength="4"
            ref={cardNumber2Ref}
            onChange={(e) => handleInputChange(e, cardNumber3Ref)}
            onFocus={(e) => handleFocus(e, cardNumber2Ref)}
            onBlur={handleBlur}
          />

          <input
            type="number"
            id="card_number3"
            name="card_number3"
            className={classNames("form__card-input", {
              "form__selected-input": selectedInput === cardNumber3Ref.current,
            })}
            placeholder="0000"
            required
            maxLength="4"
            ref={cardNumber3Ref}
            onChange={(e) => handleInputChange(e, cardNumber4Ref)}
            onFocus={(e) => handleFocus(e, cardNumber3Ref)}
            onBlur={handleBlur}
          />

          <input
            type="number"
            id="card_number4"
            name="card_number4"
            className={classNames("form__card-input", {
              "form__selected-input": selectedInput === cardNumber4Ref.current,
            })}
            placeholder="0000"
            required
            maxLength="4"
            ref={cardNumber4Ref}
            onChange={(e) => handleInputChange(e, cardholderNameRef)}
            onFocus={(e) => handleFocus(e, cardNumber4Ref)}
            onBlur={handleBlur}
          />
        </div>

        {firstCardNumber && <PaymentSystem value={firstCardNumber} />}
      </div>

      <label htmlFor="cardholder_name" className="form__label">
        {translate("cardHolder", lang)}
      </label>
      <input
        type="text"
        id="cardholder_name"
        name="cardholder_name"
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
          <label htmlFor="expiration_date" className="form__label">
            {translate("expiration", lang)}
          </label>
          <input
            type="text"
            id="expiration_date"
            name="expiration_date"
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

export default Pay;
