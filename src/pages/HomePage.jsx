import React, { useState } from "react";
import PropTypes from "prop-types";

import { Video } from "@components//Video";
import { PageScroll } from "@components/PageScroll";
import { Header } from "@components/Header";
import { More } from "@components/More";
import { About } from "@components/About";
import { Techspecs } from "@components/Techspecs";
import { Benefits } from "@components/Benefits";
import { Contacts } from "@components/Contacts";
import { Footer } from "@components/Footer";

const HomePage = ({ lang, selectLang }) => {
  const [isPlayButtonClicked, setIsPlayButtonClicked] = useState(false);

  const handleSelect = (value, e) => {
    selectLang(value || e.target.value);
  };

  const handlePlayVideo = () => {
    document.body.classList.add("modal--open");
    setIsPlayButtonClicked(true);
  };

  const handleCloseVideo = () => {
    document.body.classList.remove("modal--open");
    setIsPlayButtonClicked(false);
  };

  return (
    <>
      <Header onPlay={handlePlayVideo} onSelect={handleSelect} lang={lang} />

      {isPlayButtonClicked && (
        <Video onClose={handleCloseVideo} isClick={isPlayButtonClicked} />
      )}

      <main>
        <More />
        <PageScroll />
        <About onPlay={handlePlayVideo} />
        <Techspecs />
        <Benefits />
        <Contacts />
      </main>

      <Footer />
    </>
  );
};

HomePage.propTypes = {
  lang: PropTypes.string,
  selectLang: PropTypes.func,
};

export default HomePage;
