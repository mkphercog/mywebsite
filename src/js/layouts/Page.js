import React from "react";
import { Switch, Route } from "react-router-dom";
import "../../styles/Page.scss";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Hobbies from "../pages/Hobbies";
import Portfolio from "../pages/Portfolio";

const Page = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </>
  );
};

export default Page;
