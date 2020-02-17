import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Hobbies from "../pages/Hobbies";
import Portfolio from "../pages/Portfolio";
import ErrorPage from "../pages/ErrorPage";

const Page = props => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <About lang={props.lang} />} />
        <Route
          path="/experience"
          render={() => <Experience lang={props.lang} />}
        />
        <Route path="/skills" render={() => <Skills lang={props.lang} />} />
        <Route path="/hobbies" render={() => <Hobbies lang={props.lang} />} />
        <Route
          path="/portfolio"
          render={() => <Portfolio lang={props.lang} />}
        />
        <Route render={() => <ErrorPage lang={props.lang} />} />
      </Switch>
    </>
  );
};

export default Page;
