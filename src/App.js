import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page/Page";
import Footer from "./components/Footer/Footer";

function App() {
  const [language, setLanguage] = useState("PL");

  const handleClick = lang => {
    setLanguage(lang);
  };

  return (
    <HashRouter basename="/">
      <div className="app">
        <nav className="app__nav">
          {<Navigation click={handleClick} lang={language} />}
        </nav>
        <header className="app__header">{<Header lang={language} />}</header>
        <section className="app__page">{<Page lang={language} />}</section>
        <footer className="app__footer">{<Footer lang={language} />}</footer>
      </div>
    </HashRouter>
  );
}

export default App;
