import React, { useState } from "react";

import Menu from "../Menu/Menu";
import Modal from "../Modal/Modal";
import Accordion from "../Accordion/Accordion";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import PlayButton from "../PlayButton/PlayButton";
import Container from "../Container/Container";
import SwiperControls from "../Swiper/SwiperControls/SwiperControls";

const Header = ({ onPlay, onSelect, lang }) => {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const handleHelpOpen = () => {
    document.body.classList.add('modal--open');
    setIsHelpOpen(true);
  }

  const handleFaqOpen = () => {
    document.body.classList.add('modal--open');

    setIsFaqOpen(true);
  }

  const handleHelpClose = () => {
    document.body.classList.remove('modal--open');

    setIsHelpOpen(false)
  }

  const handleFaqClose = () => {
    document.body.classList.remove('modal--open');

    setIsFaqOpen(false)
  }

  const handleClickFaq = () => {
    handleHelpClose();
    handleFaqOpen();
  }

  return (
    <header className="header" id="header">
      <Container>
        <div className="header__wrapper">
          <div className="header__nav">
            <div className="header__left">
              <a href="./#" className="header__logo">
                <img src="./images/logo.svg" alt="logo" />
              </a>

              <SelectLanguage onSelect={onSelect} lang={lang}/>
            </div>

            <div className="header__right">
              <a href="./#menu" className="icon icon--menu icon--hide"> </a>
              <Menu />

              <button className="page__button">
                Buy Now
              </button>
            </div>
          </div>

          <div className="header__content">
              <div className="header__image"></div>

              <h1 className="page__title">
                The New Start of
                <br />
                <span className="page__title--secondary">
                  VR Locomotion
                </span>
              </h1>

              <div className="header__about">
                <p className="header__about-paragraph">
                  Discover the most comprehensive VR Locomotion system, and
                  unlock infinite motion in any games on any platforms!
                </p>

                <span className="header__about-price">
                  1200$
                </span>

                <PlayButton onPlay={onPlay} />
              </div>
          </div>

          <div className="header__bottom">
            <div className="header__bottom-wrapper header__bottom-wrapper--left">
              <a
                href="./#"
                className="header__bottom-text"
                id="faq"
                onClick={handleFaqOpen}
              >
                FAQ
              </a>

              <a 
                href="./#" 
                className="header__bottom-text" 
                onClick={handleHelpOpen}
              >
                Help
              </a>
            </div>

            <div className="header__bottom-wrapper header__bottom-wrapper--center">
              <a href="#more" className="header__bottom-advanced icon--polygon">
                More
                <svg
                  className="header__bottom-advanced--icon"
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 5L0.602885 0.5L8.39711 0.500001L4.5 5Z" fill="#05C2DF" />
                </svg>
              </a>
            </div>

            {isFaqOpen && (
              <Modal 
                title="FAQ" 
                onClose={handleFaqClose} 
                isOpen={isFaqOpen}
                className="modal__content"
              >
                <Accordion />
              </Modal>
            )}

            {isHelpOpen && (
              <Modal 
                title="Help" 
                onClose={handleHelpClose} 
                isOpen={isHelpOpen}
                className="modal__content"
              >
              <h2 className="page__title">
                How we can <span className="page__title--secondary">help</span> you?
              </h2>

              <p className="page__text modal__text">
                Welcome to our help center. Our goal is to make the process of
                <br />
                getting acquainted and purchase as easy and pleasant as possible. Need help with your KAT VR loco product? 
                Many product questions can be resolved by reviewing our Product Support
                <br />
                <a href="./#" className="modal__link" onClick={handleClickFaq}> FAQs</a>. 
                <br />
                <br />
                Please also feel free to <a onClick={handleHelpClose} href="./#contacts" className="modal__link">Contact Us </a>
                directly should you need anything further. We`re happy to help.
              </p>

              <div className="modal__wrapper">
                <div className="modal__contacts">
                  <div className="modal__title">Instruction manual</div>
                  <div className="modal__title">Where to go for a warranty</div>
                  <div className="modal__title">Service Policy</div>
                </div>

                <div className="modal__contacts">
                  <a href="tel: +86-0571-86105373" className="contacts__text">+86-0571-86105373</a>
                  <a href="mailto:global@katvr.com" className="contacts__text">global@katvr.com</a>
                  <a href="mailto:overseas@katvr.com" className="contacts__text">overseas@katvr.com</a>
                </div>
              </div>
              </Modal>
            )}

              <SwiperControls />
          </div>
        </div>

        <button className="page__button page__button--switch">
          Buy Now
        </button>
      </Container>
    </header>
  )
}

export default Header;