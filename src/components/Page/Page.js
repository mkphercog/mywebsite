import React from "react";
import { Switch, Route } from "react-router-dom";

import { About } from "../../pages/About/About";
import { Experience } from "../../pages/Experience/Experience";
import { Skills } from "../../pages/Skills/Skills";
import { Hobbies } from "../../pages/Hobbies/Hobbies";
import { Portfolio } from "../../pages/Portfolio/Portfolio";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import CONTENT from "../../components-content.json";

const { PL_NAV } = CONTENT.PL;

const scrollAnimate = () => {
  if (window.scrollY > 0) {
    window.scrollTo(0, window.scrollY - 10);
    setTimeout(scrollAnimate, 0.5);
  }
};

export const Page = ({ selectedLanguage }) => {
  const pages = [
    {
      component: <About selectedLanguage={selectedLanguage} />
    },
    {
      component: <Experience selectedLanguage={selectedLanguage} />
    },
    {
      component: <Skills selectedLanguage={selectedLanguage} />
    },
    {
      component: <Hobbies selectedLanguage={selectedLanguage} />
    },
    {
      component: <Portfolio selectedLanguage={selectedLanguage} />
    },
    {
      component: <ErrorPage selectedLanguage={selectedLanguage} />
    }
  ];

  const PAGES_TO_SHOW = pages.map((page, index) => (
    <Route
      key={index}
      exact={PL_NAV[index].exact}
      path={PL_NAV[index].path}
      render={() => {
        scrollAnimate();
        return page.component;
      }}
    />
  ));

  return (
    <>
      <Switch>{PAGES_TO_SHOW}</Switch>
    </>
  );
};
