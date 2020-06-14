import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./Skills.scss";
import CONTENT from "../../pages-content.json";

const { PL_LANGUAGE } = CONTENT.PL;
const { EN_LANGUAGE } = CONTENT.EN;
const {
  PL_PROGRAMMING_TITLE,
  PROGRAMMING,
  PL_OTHER_TITLE,
  PL_OTHER,
} = CONTENT.PL.SKILLS;
const { EN_PROGRAMMING_TITLE, EN_OTHER_TITLE, EN_OTHER } = CONTENT.EN.SKILLS;

const programmingSkillsRender = PROGRAMMING.map((item) => (
  <div key={item.name}>
    <h3 className="skills__name">{item.name}</h3>
    <div className="skills__bar">
      <div
        className="skills__progress"
        style={{
          width: `${item.progress}%`,
        }}
      ></div>
    </div>
  </div>
));

export const Skills = ({ selectedLanguage }) => {
  const isPolishLanguageChoosen = useMemo(
    () => selectedLanguage === PL_LANGUAGE,
    [selectedLanguage]
  );
  const otherSkillsRender = useMemo(
    () =>
      (isPolishLanguageChoosen ? PL_OTHER : EN_OTHER).map((item, index) => (
        <h3 key={index} className="skills__name skills__name--alone">
          {item.text}
        </h3>
      )),
    [isPolishLanguageChoosen]
  );

  return (
    <div className="skills">
      <h1 className="skills__title">
        {isPolishLanguageChoosen ? PL_PROGRAMMING_TITLE : EN_PROGRAMMING_TITLE}
      </h1>
      {programmingSkillsRender}

      <h1 className="skills__title">
        {isPolishLanguageChoosen ? PL_OTHER_TITLE : EN_OTHER_TITLE}
      </h1>
      {otherSkillsRender}
    </div>
  );
};

Skills.propTypes = {
  selectedLanguage: PropTypes.oneOf([PL_LANGUAGE, EN_LANGUAGE]),
};
