import React, { useContext, useState } from "react";
import classNames from "classnames";

import { Container } from "@components/Container";
import { CloseIcon } from "@components/Icons/CloseIcon";

import "./Techspecs.scss";
import { LangContext } from "@context/LangContext";
import { translate } from "@helpers/translation";
import { touchIcons } from "@data/images";

const SENSOR_ID = 1;
const CONNECTION_ID = 2;
const BATTERIES_ID = 3;

export const Techspecs = React.memo(() => {
  const [opened, setOpened] = useState(0);
  const lang = useContext(LangContext);

  const handleClose = () => {
    setOpened(0);
  };

  return (
    <section className="techspecs page__section" id="tech">
      <Container>
        <h2 className="page__title techspecs__title">
          {translate(lang, ["TECH", "TITLE"])}
          <span className="page__title--secondary">
            {translate(lang, ["TECH", "TITLE_SECONDARY"])}
          </span>
        </h2>

        <div className="techspecs__content">
          {touchIcons.map(({ id, className }) => (
            <i
              className={`techspecs__touch ${className}`}
              key={id}
              onClick={() => setOpened(id)}
            />
          ))}

          <div
            className={classNames(
              "techspecs__description techspecs__description--sensor",
              { open: opened === SENSOR_ID }
            )}
            id="sensor"
          >
            <i className="techspecs__icon-close">
              <CloseIcon onClose={handleClose} />
            </i>

            <h3 className="techspecs__description-title">
              {translate(lang, ["TECH", "SENSOR", "TITLE"])}
            </h3>

            <p
              className="page__text"
              dangerouslySetInnerHTML={{
                __html: translate(lang, ["TECH", "SENSOR", "TEXT"]),
              }}
            />
          </div>

          <div
            className={classNames(
              "techspecs__description techspecs__description--connection",
              { open: opened === CONNECTION_ID }
            )}
            id="connection"
          >
            <i className="techspecs__icon-close">
              <CloseIcon onClose={handleClose} />
            </i>

            <h3 className="techspecs__description-title">
              {translate(lang, ["TECH", "CONNECTION", "TITLE"])}
            </h3>

            <p
              className="page__text"
              dangerouslySetInnerHTML={{
                __html: translate(lang, ["TECH", "CONNECTION", "TEXT"]),
              }}
            />
          </div>

          <div
            className={classNames(
              "techspecs__description techspecs__description--batterries",
              { open: opened === BATTERIES_ID }
            )}
            id="batterries"
          >
            <i className="techspecs__icon-close">
              <CloseIcon onClose={handleClose} />
            </i>

            <h3 className="techspecs__description-title">
              {translate(lang, ["TECH", "BATTERY", "TITLE"])}
            </h3>

            <p
              className="page__text"
              dangerouslySetInnerHTML={{
                __html: translate(lang, ["TECH", "BATTERY", "TEXT"]),
              }}
            />
          </div>

          <div className="techspecs__vectors">
            <div className="techspecs__vector techspecs__vector--1"></div>
            <div className="techspecs__vector techspecs__vector--2"></div>
            <div className="techspecs__vector techspecs__vector--3"></div>
            <div className="techspecs__vector techspecs__vector--4"></div>
          </div>
        </div>
      </Container>
    </section>
  );
});
