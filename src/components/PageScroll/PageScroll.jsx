import React, { useEffect, useState } from "react";

const PageScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 600;

      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page__scroll">
      {isVisible && (
        <a href="/#header" className="page__scroll-button">
          {" "}
        </a>
      )}
    </div>
  );
};

export default PageScroll;
