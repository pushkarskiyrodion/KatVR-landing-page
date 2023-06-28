import React from "react";

import { Container } from "@components/Container";
import { Logo } from "@components/Logo";
import { ContactUs } from "@components/Contact-us";
import { Menu } from "@components/Menu";
import { menuSections } from "@data/menuSections";

import "./Footer.scss";

export const Footer = () => (
  <footer className="footer">
    <Container>
      <div className="footer__content">
        <div className="footer__logo">
          <Logo />
        </div>

        <div className="footer__wrapper">
          <Logo />

          <Menu menuData={menuSections} className="footer__menu" />
        </div>

        <Menu
          menuData={menuSections}
          isOffOnMobile={true}
          className="footer__menu--tablet"
        />

        <div className="footer__links">
          <ContactUs className="footer__contacts" />

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/"
              className="icon--links footer__socials--facebook"
              target="_blank"
              rel="noreferrer"
            />
            <a
              href="https://twitter.com/"
              className="icon--links footer__socials--twitter"
              target="_blank"
              rel="noreferrer"
            />
            <a
              href="https://www.youtube.com/"
              className="icon--links footer__socials--youtube"
              target="_blank"
              rel="noreferrer"
            />
            <a
              href="https://www.reddit.com/"
              className="icon--links footer__socials--reddit"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
