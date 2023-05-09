import { useRef, useState } from "react";

import SCSSVariables from '../../../styles/utils/variables.module.scss';

const SwiperControls = ({ onPrev, onNext }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [borderPosition, setBorderPosition] = useState({ x: 0 })
  const containerRef = useRef(null)

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
      className="swiper-controls"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={containerRef}
    >
      <button className="swiper-controls__button" onClick={onPrev}>Previous</button>
      <button className="swiper-controls__button" onClick={onNext}>Next</button>
      {isHovering && (
          <div 
          className="swiper-controls--border"
          style={{ 
            left: `${borderPosition.x - SCSSVariables.swiperControlsPadding}px`,
          }}
        >
        </div> 
      )}
    </div>
  );
}

export default SwiperControls;