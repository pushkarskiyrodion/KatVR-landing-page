import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";

import SCSSVariables from "../../../styles/utils/variables.module.scss";
import { LangContext } from "../../../context/LangContext";
import { translate } from "../../../helpers/translation";

const SwiperControls = ({ onPrev, onNext, className }) => {
  const lang = useContext(LangContext);
  const [isHovering, setIsHovering] = useState(false);
  const [borderPosition, setBorderPosition] = useState({ x: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX } = event;
    const { x } = containerRef.current.getBoundingClientRect();

    setBorderPosition({ x: clientX - x });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={`swiper-controls ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={containerRef}
    >
      <button className="swiper-controls__button prev" onClick={onPrev}>
        {translate("prev", lang)}
      </button>

      <button className="swiper-controls__button next" onClick={onNext}>
        {translate("next", lang)}
      </button>

      {isHovering && (
        <div
          className="swiper-controls--border"
          style={{
            left: `${borderPosition.x - SCSSVariables.swiperControlsPadding}px`,
          }}
        ></div>
      )}
    </div>
  );
};

SwiperControls.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  className: PropTypes.string,
};

export default SwiperControls;
