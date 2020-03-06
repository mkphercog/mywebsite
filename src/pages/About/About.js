import React from "react";
import "./About.scss";
import CONTENT from "../../pages-content.json";

const myAge = new Date().getFullYear() - 1993;
const { PL_LANGUAGE } = CONTENT.PL;
const { PL_HELLO, PL_DESCRIPTION1, PL_DESCRIPTION2 } = CONTENT.PL.ABOUT;
const { EN_HELLO, EN_DESCRIPTION1, EN_DESCRIPTION2 } = CONTENT.EN.ABOUT;

export const About = ({ selectedLanguage }) => (
  <div className="about">
    <div className="about__foto"></div>
    <div className="about__wrapText">
      <h1 className="about__welcome">
        {selectedLanguage === PL_LANGUAGE ? PL_HELLO : EN_HELLO}
      </h1>
      <p className="about__description">
        {selectedLanguage === PL_LANGUAGE
          ? `${PL_DESCRIPTION1}${myAge}${PL_DESCRIPTION2}`
          : `${EN_DESCRIPTION1}${myAge}${EN_DESCRIPTION2}`}
      </p>
    </div>
  </div>
);
