import React, { useContext } from "react";
import PropTypes from "prop-types";

import { LangContext } from "@context/LangContext";
import { Container } from "@components/Container";
import { PlayButton } from "@components/PlayButton";
import { Swiper } from "@components/Swiper";
import { slideImages } from "@data/images";
import { translate } from "@helpers/translation";

import "./About.scss";

export const About = ({ onPlay }) => {
  const lang = useContext(LangContext);

  return (
    <section className="about page__section" id="about">
      <Container>
        <div className="about__wrapper">
          <div className="grid grid--switch">
            <h2 className="page__title page__title--before">
              {translate(lang, ["ABOUT", "TITLE"])}
              <span className="page__title--secondary">
                {translate(lang, ["ABOUT", "TITLE_SECONDARY"])}
              </span>
            </h2>

            <div className="grid__swiper grid__item--onDesktopMax1240-1-4 grid__item--onDesktopMin1240-2-6">
              <Swiper
                items={slideImages}
                controlsClassName={"swiper-controls__grid"}
                isPaginationVisible={true}
                swiperClassName={"grid__item--mobile-1-7"}
              />
            </div>

            <div className="grid__item--onDesktopMax1240-5-8 grid__item--onDesktopMin1240-8-12">
              <div className="about__header-wrapper">
                <h2 className="page__title page__title--after">
                  {translate(lang, ["ABOUT", "TITLE"])}
                  <span className="page__title--secondary">
                    {translate(lang, ["ABOUT", "TITLE_SECONDARY"])}
                  </span>
                </h2>

                <p className="about__text">
                  {translate(lang, ["ABOUT", "TEXT"])}
                </p>

                <PlayButton onPlay={onPlay} />
              </div>
            </div>
          </div>
        </div>

        <div className="about__bottom">
          <div className="about__greeting">
            <span className="page__subtitle">
              {translate(lang, ["ABOUT", "HELLO"])}
            </span>

            <h2 className="page__title about__greeting__title">
              {translate(lang, ["ABOUT", "SUBTITLE"])}
              <span className="page__title--secondary">
                {translate(lang, ["ABOUT", "SUBTITLE_SECONDARY"])}
              </span>
            </h2>

            <p className="page__text">
              {translate(lang, ["ABOUT", "SUBTEXT"])}
            </p>
          </div>

          <div className="about__us">
            <div className="about__us-text about__us--invisible">About us</div>
            <div className="about__us-text about__us--invisible">About us</div>
            <div className="about__us-text">About us</div>
            <div className="about__us-text">About us</div>
            <div className="about__us-text">About us</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

About.propTypes = {
  onPlay: PropTypes.func,
};
