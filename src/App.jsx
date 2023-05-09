import React, { useState } from "react";
import './App.scss';

import { LangContext } from "./context/LangContext";

import Video from "./components/Video/Video";
import PageScroll from "./components/PageScroll/PageScroll";
import Header from "./components/Header/Header";
import More from "./components/More/More";
import About from "./components/About/About";
import Techspecs from "./components/Techspecs/Techspecs";
import Benefits from "./components/Benefits/Benefits";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


const App = () => {
  const [isPlayButtonClicked, setIsPlayButtonClicked] = useState(false);
  const [lang, setLang] = useState('en');

  console.log(lang)

  const handleSelect = (e) => {
    setLang(e.target.value);
  }

  const handlePlayVideo = () => {
    document.body.classList.add('modal--open');
    setIsPlayButtonClicked(true);
  }

  const handleCloseVideo = () => {
    document.body.classList.remove('modal--open');
    setIsPlayButtonClicked(false);
  }

  return (
    <LangContext.Provider value={lang}>
      <Header 
        onPlay={handlePlayVideo} 
        onSelect={handleSelect}
        lang={lang}
      />

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
    </LangContext.Provider>
  )
}

export default App;