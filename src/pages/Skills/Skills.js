import React from "react";
import "./Skills.scss";
import CONTENT from "../../pages-content.json";

const { PL_LANGUAGE } = CONTENT.PL;
const {
  PL_PROGRAMMING_TITLE,
  PROGRAMMING,
  PL_OTHER_TITLE,
  PL_OTHER
} = CONTENT.PL.SKILLS;
const { EN_PROGRAMMING_TITLE, EN_OTHER_TITLE, EN_OTHER } = CONTENT.EN.SKILLS;

export const Skills = ({ selectedLanguage }) => {
  const PROGRAMMING_TO_SHOW = PROGRAMMING.map(item => (
    <div key={item.name}>
      <h3 className="skills__name">{item.name}</h3>
      <div className="skills__bar">
        <div
          className="skills__progress"
          style={{
            width: `${item.progress}%`
          }}
        ></div>
      </div>
    </div>
  ));

  let SKILLS_TO_SHOW = selectedLanguage === PL_LANGUAGE ? PL_OTHER : EN_OTHER;

  SKILLS_TO_SHOW = SKILLS_TO_SHOW.map((item, index) => (
    <h3 key={index} className="skills__name skills__name--alone">
      {item.text}
    </h3>
  ));

  return (
    <div className="skills">
      <h1 className="skills__title">
        {selectedLanguage === PL_LANGUAGE
          ? PL_PROGRAMMING_TITLE
          : EN_PROGRAMMING_TITLE}
      </h1>
      {PROGRAMMING_TO_SHOW}
      <h1 className="skills__title">
        {selectedLanguage === PL_LANGUAGE ? PL_OTHER_TITLE : EN_OTHER_TITLE}
      </h1>
      {SKILLS_TO_SHOW}
    </div>
  );
};
