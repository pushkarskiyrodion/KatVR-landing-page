import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import "./App.scss";

import { LangContext } from "@context/LangContext";
import HomePage from "@pages/HomePage";
import OrderPage from "@pages/OrderPage";
import { PlaceOrder } from "@components/Order/PlaceOrder";
import { Pay } from "@components/Order/Pay";
import { OrderComplete } from "@components/Order/OrderComplete";
import { getCountries } from 'api/CountriesAndCities';

const App = () => {
  const [lang, setLang] = useState("en");
  const [countries, setCountries] = useState(null);
  const [isRequestError, setIsRequestError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getCountries();

        const countries = data.map((item) => item.country);
        const uniqueCountries = Array.from(new Set(countries));

        setCountries(uniqueCountries);
      } catch (error) {
        setIsRequestError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <LangContext.Provider value={lang}>
      <Routes>
        <Route
          path="/"
          element={<HomePage lang={lang} selectLang={setLang} />}
        />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route
          path="order"
          element={
            <OrderPage>
              <Outlet />
            </OrderPage>
          }
        >
          <Route path="place-order" element={(
            <PlaceOrder
              countries={countries}
              isRequestError={isRequestError}
              setIsRequestError={setIsRequestError}
            />
          )} />
          <Route path="pay" element={<Pay />} />
          <Route path="order-complete" element={<OrderComplete />} />
        </Route>
      </Routes>
    </LangContext.Provider>
  );
};

export default App;
