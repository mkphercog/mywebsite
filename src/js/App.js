import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.scss";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app__header">{<Header />}</header>
        <nav className="app__nav">{<Navigation />}</nav>
        <section className="app__page">{<Page />}</section>
        <footer className="app__footer">{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
