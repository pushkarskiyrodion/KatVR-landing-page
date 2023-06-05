import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

export const PageScroll = () => {
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
        <HashLink to="/#header" className="page__scroll-button">
          {" "}
        </HashLink>
      )}
    </div>
  );
};
