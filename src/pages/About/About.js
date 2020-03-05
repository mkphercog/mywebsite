import React from "react";
import "./About.scss";
import INFO from "../../web-content.json";

const myAge = new Date().getFullYear() - 1993;
const { PL_HELLO, PL_DESCRIPTION1, PL_DESCRIPTION2 } = INFO.PL.ABOUT;
const { EN_HELLO, EN_DESCRIPTION1, EN_DESCRIPTION2 } = INFO.EN.ABOUT;

export const About = props => (
  <div className="about">
    <div className="about__foto"></div>
    <div className="about__wrapText">
      <h1 className="about__welcome">
        {props.lang === "PL" ? PL_HELLO : EN_HELLO}
      </h1>
      <p className="about__description">
        {props.lang === "PL"
          ? `${PL_DESCRIPTION1}${myAge}${PL_DESCRIPTION2}`
          : `${EN_DESCRIPTION1}${myAge}${EN_DESCRIPTION2}`}
      </p>
    </div>
  </div>
);
