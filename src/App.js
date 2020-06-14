import React, { useState } from "react";
import { HashRouter } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Page } from "./components/Page/Page";
import { Footer } from "./components/Footer/Footer";

import "./App.scss";
import CONTENT from "./pages-content.json";

const { PL_LANGUAGE } = CONTENT.PL;

export const App = () => {
  const [language, setLanguage] = useState(PL_LANGUAGE);

  const handleBtnChangeLang = (lang) => {
    setLanguage(lang);
  };

  return (
    <HashRouter basename="/">
      <div className="app">
        <nav className="app__nav">
          <Navigation
            changeLanguage={handleBtnChangeLang}
            selectedLanguage={language}
          />
        </nav>
        <header className="app__header">
          <Header selectedLanguage={language} />
        </header>
        <section className="app__page">
          <Page selectedLanguage={language} />
        </section>
        <footer className="app__footer">
          <Footer selectedLanguage={language} />
        </footer>
      </div>
    </HashRouter>
  );
};
