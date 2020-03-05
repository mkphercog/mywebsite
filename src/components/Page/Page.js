import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../../pages/About/About";
import Experience from "../../pages/Experience/Experience";
import Skills from "../../pages/Skills/Skills";
import Hobbies from "../../pages/Hobbies/Hobbies";
import Portfolio from "../../pages/Portfolio/Portfolio";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

function scrollAnimate() {
  if (window.scrollY > 0) {
    window.scrollTo(0, window.scrollY - 10);
    setTimeout(scrollAnimate, 0.5);
  }
}

const Page = props => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            scrollAnimate();
            return <About lang={props.lang} />;
          }}
        />
        <Route
          path="/experience"
          render={() => {
            scrollAnimate();
            return <Experience lang={props.lang} />;
          }}
        />
        <Route
          path="/skills"
          render={() => {
            scrollAnimate();
            return <Skills lang={props.lang} />;
          }}
        />
        <Route
          path="/hobbies"
          render={() => {
            scrollAnimate();
            return <Hobbies lang={props.lang} />;
          }}
        />
        <Route
          path="/portfolio"
          render={() => {
            scrollAnimate();
            return <Portfolio lang={props.lang} />;
          }}
        />
        <Route
          render={() => {
            scrollAnimate();
            return <ErrorPage lang={props.lang} />;
          }}
        />
      </Switch>
    </>
  );
};

export default Page;
