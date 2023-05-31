import React from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import Logo from "../components/Logo/Logo";
import Order from "../components/Order/Order";
import Container from "../components/Container/Container";
import CustomNavLink from "../components/CustomNavLink/CustomNavLink";

const OrderPage = ({ children }) => {
  const currentUrl = useLocation();

  const isComplete = !currentUrl.pathname.includes("order-complete");

  return (
    <section className="order">
      <Container>
        <header className="order__header">
          <Logo />

          <nav className="order__nav">
            <CustomNavLink
              to={"place-order"}
              classNameForTranslate={"placeOrder"}
            />
            <CustomNavLink to={"pay"} classNameForTranslate={"pay"} />
            <CustomNavLink
              to={"order-complete"}
              classNameForTranslate={"orderComplete"}
            />
          </nav>
        </header>

        <div
          className={classNames("order__wrapper", {
            order__complete: !isComplete,
          })}
        >
          {isComplete && <Order />}

          {children}
        </div>
      </Container>
    </section>
  );
};

OrderPage.propTypes = {
  children: PropTypes.node,
};

export default OrderPage;
