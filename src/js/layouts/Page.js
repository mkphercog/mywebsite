import React from "react";
import { Switch, Route } from "react-router-dom";
import "../../styles/Page.scss";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";

const Page = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
      </Switch>
    </>
  );
};

export default Page;
