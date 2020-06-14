import React, { useMemo } from "react";
import "./Portfolio.scss";
import CONTENT from "../../pages-content.json";

const { PL_LANGUAGE } = CONTENT.PL;
const {
  PL_PROJECTS_LIST,
  PL_BTN_SEE_HERE,
  PL_BTN_CODE_HERE,
} = CONTENT.PL.PORTFOLIO;
const {
  EN_PROJECTS_LIST,
  EN_BTN_SEE_HERE,
  EN_BTN_CODE_HERE,
} = CONTENT.EN.PORTFOLIO;

export const Portfolio = ({ selectedLanguage }) => {
  const isPolishLanguageChoosen = useMemo(
    () => selectedLanguage === PL_LANGUAGE,
    [selectedLanguage]
  );

  const projectsToRender = useMemo(
    () =>
      (isPolishLanguageChoosen ? PL_PROJECTS_LIST : EN_PROJECTS_LIST).map(
        (project) => (
          <div key={project.name} className="portfolio__wrapper">
            <h1 className="portfolio__title">{project.name}</h1>
            <p className="portfolio__description">{project.description}</p>
            <a
              className="portfolio__link"
              href={project.urlWeb}
              target="_blank"
              rel="noreferrer noopener"
            >
              {isPolishLanguageChoosen ? PL_BTN_SEE_HERE : EN_BTN_SEE_HERE}
            </a>
            <a
              className="portfolio__link"
              href={project.urlCode}
              target="_blank"
              rel="noreferrer noopener"
            >
              {isPolishLanguageChoosen ? PL_BTN_CODE_HERE : EN_BTN_CODE_HERE}
            </a>
          </div>
        )
      ),
    [isPolishLanguageChoosen]
  );

  return <div className="portfolio">{projectsToRender}</div>;
};
