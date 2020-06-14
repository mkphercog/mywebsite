import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Header.scss";
import slider from "../../images/slider.jpg";
import CONTENT from "../../components-content.json";

const { PL_NAV, PL_LANGUAGE } = CONTENT.PL;
const { EN_NAV } = CONTENT.EN;

export const Header = ({ selectedLanguage }) => {
  let NAV_TO_SHOW = selectedLanguage === PL_LANGUAGE ? PL_NAV : EN_NAV;

  NAV_TO_SHOW = NAV_TO_SHOW.map((item) => (
    <Route
      key={item.name}
      exact={item.exact}
      path={item.path}
      component={() => <h1 className="sliders__title">{item.name}</h1>}
    />
  ));

  return (
    <div className="sliders">
      <img className="sliders__image" src={slider} alt="Slider" />
      <Switch>{NAV_TO_SHOW}</Switch>
    </div>
  );
};
