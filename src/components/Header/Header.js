import React, { useMemo } from "react";
import { Switch, Route } from "react-router-dom";

import "./Header.scss";
import slider from "../../images/slider.jpg";
import CONTENT from "../../components-content.json";

const { PL_NAV, PL_LANGUAGE } = CONTENT.PL;
const { EN_NAV } = CONTENT.EN;

export const Header = ({ selectedLanguage }) => {
  const isPolishLanguageChoosen = useMemo(
    () => selectedLanguage === PL_LANGUAGE,
    [selectedLanguage]
  );

  const navigationToRender = useMemo(
    () =>
      (isPolishLanguageChoosen ? PL_NAV : EN_NAV).map((item) => (
        <Route
          key={item.name}
          exact={item.exact}
          path={item.path}
          component={() => <h1 className="sliders__title">{item.name}</h1>}
        />
      )),
    [isPolishLanguageChoosen]
  );

  return (
    <header className="sliders">
      <img className="sliders__image" src={slider} alt="Slider" />
      <Switch>{navigationToRender}</Switch>
    </header>
  );
};
