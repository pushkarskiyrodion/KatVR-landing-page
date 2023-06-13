import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

export const PlayButton = ({ onPlay }) => {
  const handleClick = () => {
    onPlay(true);
  };

  return (
    <div className="page__button-play" onClick={handleClick}>
      <Button />
    </div>
  );
};

PlayButton.propTypes = {
  onPlay: PropTypes.func,
};
