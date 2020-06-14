import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./About.scss";
import CONTENT from "../../pages-content.json";

const myAge = new Date().getFullYear() - 1993;
const { PL_LANGUAGE } = CONTENT.PL;
const { EN_LANGUAGE } = CONTENT.EN;
const { PL_HELLO, PL_DESCRIPTION1, PL_DESCRIPTION2 } = CONTENT.PL.ABOUT;
const { EN_HELLO, EN_DESCRIPTION1, EN_DESCRIPTION2 } = CONTENT.EN.ABOUT;

export const About = ({ selectedLanguage }) => {
  const isPolishLanguageChoosen = useMemo(
    () => selectedLanguage === PL_LANGUAGE,
    [selectedLanguage]
  );

  return (
    <div className="about">
      <div className="about__foto"></div>
      <div className="about__wrapText">
        <h1 className="about__welcome">
          {isPolishLanguageChoosen ? PL_HELLO : EN_HELLO}
        </h1>
        <p className="about__description">
          {isPolishLanguageChoosen
            ? `${PL_DESCRIPTION1}${myAge}${PL_DESCRIPTION2}`
            : `${EN_DESCRIPTION1}${myAge}${EN_DESCRIPTION2}`}
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
  selectedLanguage: PropTypes.oneOf([PL_LANGUAGE, EN_LANGUAGE]),
};
