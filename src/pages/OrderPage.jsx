import React from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import { Logo } from "@components/Logo";
import { Order } from "@components/Order";
import { Container } from "@components/Container";
import { CustomNavLink } from "@components/CustomNavLink";

import "../components/Order/Order.scss";

const OrderPage = React.memo(({ children }) => {
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
              keysForTranslate={["PLACE_ORDER"]}
            />

            <CustomNavLink to={"pay"} keysForTranslate={["PAY"]} />

            <CustomNavLink
              to={"order-complete"}
              keysForTranslate={["COMPLETED"]}
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
});

OrderPage.propTypes = {
  children: PropTypes.node,
};

export default OrderPage;
