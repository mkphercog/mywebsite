import React, { useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import { About } from "../../pages/About/About";
import { Experience } from "../../pages/Experience/Experience";
import { Skills } from "../../pages/Skills/Skills";
import { Hobbies } from "../../pages/Hobbies/Hobbies";
import { Portfolio } from "../../pages/Portfolio/Portfolio";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";

import CONTENT from "../../components-content.json";

const { PL_NAV, PL_LANGUAGE } = CONTENT.PL;
const { EN_LANGUAGE } = CONTENT.EN;

const scrollAnimate = () => {
  if (window.scrollY > 0) {
    window.scrollTo(0, window.scrollY - 10);
    setTimeout(scrollAnimate, 0.5);
  }
};

export const Page = ({ selectedLanguage }) => {
  const pages = useMemo(
    () => [
      {
        component: <About selectedLanguage={selectedLanguage} />,
      },
      {
        component: <Experience selectedLanguage={selectedLanguage} />,
      },
      {
        component: <Skills selectedLanguage={selectedLanguage} />,
      },
      {
        component: <Hobbies selectedLanguage={selectedLanguage} />,
      },
      {
        component: <Portfolio selectedLanguage={selectedLanguage} />,
      },
      {
        component: <ErrorPage selectedLanguage={selectedLanguage} />,
      },
    ],
    [selectedLanguage]
  );

  const pagesRender = useMemo(
    () =>
      pages.map((page, index) => (
        <Route
          key={index}
          exact={PL_NAV[index].exact}
          path={PL_NAV[index].path}
          render={() => {
            scrollAnimate();
            return page.component;
          }}
        />
      )),
    [pages]
  );

  return (
    <section>
      <Switch>{pagesRender}</Switch>
    </section>
  );
};

Page.propTypes = {
  selectedLanguage: PropTypes.oneOf([PL_LANGUAGE, EN_LANGUAGE]),
};
