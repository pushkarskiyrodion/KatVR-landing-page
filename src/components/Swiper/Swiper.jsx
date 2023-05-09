import { useState } from "react";
import SwiperControls from "./SwiperControls/SwiperControls";

const pictures = [
  {
    src: './images/pictures/slide-image.png',
    id: 1,
  },
  {
    src: './images/pictures/slide-image.png',
    id: 2,
  },
  {
    src: './images/pictures/slide-image.png',
    id: 3,
  },
  {
    src: './images/pictures/slide-image.png',
    id: 4,
  },
  {
    src: './images/pictures/slide-image.png',
    id: 5,
  },
];

const IMAGE_WIDTH = 500;

const Swiper = () => {
  const [images] = useState(pictures);
  const [current, setCurrent] = useState(1)
  const [position, setPosition] = useState(0);

  const isEnd = IMAGE_WIDTH * images.length + (40 * images.length);
  let total = IMAGE_WIDTH + 40;
  let pos = position;

  const next = () => {
    pos += total;
    pos = Math.min(pos , (pos >= isEnd ? 0 : isEnd));

    setPosition(pos);
    setCurrent(curr => curr !== images.length ? curr + 1 : 1)
  }

  const prev = () => {
    pos -= total;
    pos = Math.max(pos, (pos >= 0 ? 0 : isEnd - total));

    setPosition(pos);
    setCurrent(curr => curr !== 1 ? curr - 1 : images.length)
  }

  return (
    <div className="swiper">
      <div className="swiper__pagination">
        {`${current} / ${images.length}`}
      </div>

      <ul 
        className="swiper__list" 
        style={{ 
          width: `${isEnd}px`,
          transform: `translateX(${-position}px)`,
        }}
      >
        {images.map(({ src, id}) => (
          <li 
            key={id} 
            className="swiper__item"
            style={{ width: `${IMAGE_WIDTH}px`}}
          >
            <img 
              src={src} 
              alt={id}
              width={IMAGE_WIDTH}
            />
          </li>
        ))}
      </ul>

      <SwiperControls onPrev={prev} onNext={next} />
    </div>
  ) 
}

export default Swiper;