import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { SwiperControls } from "./SwiperControls";

import SCSSVariables from "../../styles/utils/variables.module.scss";

export const Swiper = ({
  items,
  controlsClassName = "",
  swiperClassName = "",
  isPaginationVisible,
}) => {
  const [images] = useState(items);
  const [current, setCurrent] = useState(1);
  const [position, setPosition] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const parentRef = useRef();

  const margin = parseInt(SCSSVariables.swiperItemMargin);

  useEffect(() => {
    const parentElement = parentRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setCurrent(1);
      setPosition(0);
      setParentWidth(width);
    });

    resizeObserver.observe(parentElement);

    return () => {
      resizeObserver.unobserve(parentElement);
    };
  }, []);

  const totalWidth = parentWidth * items.length + margin * images.length;
  let total = parentWidth + margin;
  let pos = position;

  const next = () => {
    pos += total;
    pos = Math.min(pos, pos >= totalWidth ? 0 : totalWidth);

    setPosition(pos);
    setCurrent((curr) => (curr !== images.length ? curr + 1 : 1));
  };

  const prev = () => {
    pos -= total;
    pos = Math.max(pos, pos >= 0 ? 0 : totalWidth - total);

    setPosition(pos);
    setCurrent((curr) => (curr !== 1 ? curr - 1 : images.length));
  };

  return (
    <div className={`swiper ${swiperClassName}`} ref={parentRef}>
      {isPaginationVisible && (
        <div className="swiper__pagination">
          {`${current} / ${images.length}`}
        </div>
      )}

      <ul
        className="swiper__list"
        style={{
          width: `${totalWidth}px`,
          transform: `translateX(${-position}px)`,
        }}
      >
        {images.map(({ src, id }) => (
          <li key={id} className="swiper__item">
            <img
              src={src}
              className="swiper__image"
              alt={`slide-${id}`}
              width={parentWidth}
            />
          </li>
        ))}
      </ul>

      <SwiperControls
        onPrev={prev}
        onNext={next}
        className={controlsClassName}
      />
    </div>
  );
};

Swiper.propTypes = {
  items: PropTypes.array,
  controlsClassName: PropTypes.string,
  swiperClassName: PropTypes.string,
  isPaginationVisible: PropTypes.bool,
};
