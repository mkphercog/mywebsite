import React from "react";
import { Switch, Route } from "react-router-dom";
import "../../styles/Page.scss";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Hobbies from "../pages/Hobbies";
import Portfolio from "../pages/Portfolio";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/portfolio" component={Portfolio} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
