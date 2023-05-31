import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LangContext } from "../../context/LangContext";
import DropDown from "../DropDown/DropDown";
import FormInput from "./Form/FormInput";

import { getCities, getCountries } from "../../api/Countries&Cities";
import { checkValidity } from "../../helpers/checkValidity";
import { translate } from "../../helpers/translation";

const PlaceOrder = () => {
  const [countries, setCountries] = useState(null);
  const [cities, setCities] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isError, setIsError] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const lang = useContext(LangContext);
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: selectedCountry,
    city: selectedCity,
    shipAddres1: "",
    shipAddres2: "",
  });

  const inputsFirstField = [
    {
      id: 1,
      classNameForTranslate: "firstName",
      name: "firstName",
      type: "text",
      errorText: "Name should be 3-16 characters and include only letters",
      classNameForTranslateError: "nameError",
      pattern: "^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{3,16}$",
    },
    {
      id: 2,
      classNameForTranslate: "email",
      name: "email",
      type: "email",
      errorText: "Please, enter correct data",
      pattern: "^[a-zA-Z0-9]+@[a-zA-Z0-9.]+$",
      classNameForTranslateError: "emailError",
    },
    {
      id: 3,
      classNameForTranslate: "country",
      name: "country",
      children: (
        <DropDown
          entities={countries}
          selectedValue={selectedCountry}
          onSelect={setSelectedCountry}
        />
      ),
    },
    {
      id: 4,
      classNameForTranslate: "shipAddres1",
      name: "shipAddres1",
      type: "text",
    },
  ];

  const inputsSecondField = [
    {
      id: 5,
      classNameForTranslate: "lastName",
      name: "lastName",
      type: "text",
      pattern: "^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{3,16}$",
      errorText: "Name should be 3-16 characters and include only letters",
      classNameForTranslateError: "nameError",
    },
    {
      id: 6,
      classNameForTranslate: "phone",
      name: "phone",
      type: "number",
      pattern: "^[0-9]{5,16}$",
      errorText: "Should be 5-16 characters and only digits",
      classNameForTranslateError: "phoneError",
    },
    {
      id: 7,
      classNameForTranslate: "city",
      name: "city",
      children: (
        <DropDown
          entities={cities}
          selectedValue={selectedCity}
          onSelect={setSelectedCity}
        />
      ),
    },
    {
      id: 8,
      classNameForTranslate: "shipAddres2",
      name: "shipAddres2",
      type: "text",
    },
  ];

  useEffect(() => {
    setInfo((current) => ({
      ...current,
      city: selectedCity,
    }));
  }, [selectedCity]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCountries();

        const countries = data.map((item) => item.country);
        const country = countries.find((country) =>
          country.toLowerCase().includes("ukr")
        );

        setCountries([...new Set(countries)]);
        setSelectedCountry(country);
      } catch (error) {
        setIsRequestError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedCountry) {
      return;
    }

    const fetchData = async () => {
      setIsRequestError(false);

      try {
        const { data } = await getCities(selectedCountry);

        setCities(data);
        setSelectedCity("");

        setInfo((current) => ({
          ...current,
          country: selectedCountry,
        }));
      } catch (error) {
        setIsRequestError(true);
      }
    };

    fetchData();
  }, [selectedCountry]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((current) => ({
      ...current,
      [name]: value,
    }));

    setIsError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = [...inputsFirstField, ...inputsSecondField];

    if (checkValidity(inputs, setIsError, info)) {
      navigate("../pay");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__wrapper">
        <div className="form__input-wrapper">
          {inputsFirstField.map(
            ({
              id,
              name,
              classNameForTranslate,
              type,
              children,
              pattern,
              classNameForTranslateError,
            }) => (
              <FormInput
                name={name}
                key={id}
                classNameForTranslate={classNameForTranslate}
                type={type}
                onChange={handleChange}
                pattern={pattern}
                classNameForTranslateError={classNameForTranslateError}
                value={info[name]}
              >
                {children}
              </FormInput>
            )
          )}
        </div>

        <div className="form__input-wrapper">
          {inputsSecondField.map(
            ({
              id,
              name,
              classNameForTranslate,
              type,
              children,
              pattern,
              classNameForTranslateError,
            }) => (
              <FormInput
                name={name}
                key={id}
                classNameForTranslate={classNameForTranslate}
                type={type}
                onChange={handleChange}
                pattern={pattern}
                classNameForTranslateError={classNameForTranslateError}
                value={info[name]}
              >
                {children}
              </FormInput>
            )
          )}
        </div>
      </div>

      <div className="form__controls">
        <button className="order__button">{translate("purchase", lang)}</button>

        {isError && (
          <span className="form__error">{translate("errorFill", lang)}</span>
        )}

        {isRequestError && (
          <span className="form__error">
            {translate("requestError1", lang)}
            <br />
            {translate("requestError2", lang)}
          </span>
        )}
      </div>
    </form>
  );
};

export default PlaceOrder;
