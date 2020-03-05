import React from "react";
import "./Skills.scss";
import INFO from "../../web-informations.json";

const {
  PL_PROGRAMMING_TITLE,
  PROGRAMMING,
  PL_OTHER_TITLE,
  PL_OTHER
} = INFO.PL.SKILLS;
const { EN_PROGRAMMING_TITLE, EN_OTHER_TITLE, EN_OTHER } = INFO.EN.SKILLS;

let PROGRAMMING_TO_SHOW = [];
let SKILLS_TO_SHOW = [];

export const Skills = props => {
  PROGRAMMING_TO_SHOW = PROGRAMMING.map(item => (
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

  const setLangSkillsList = lang => {
    SKILLS_TO_SHOW = lang === "PL" ? PL_OTHER : EN_OTHER;

    SKILLS_TO_SHOW = SKILLS_TO_SHOW.map((item, index) => (
      <h3 key={index} className="skills__name skills__name--alone">
        {item.text}
      </h3>
    ));
  };

  setLangSkillsList(props.lang);

  return (
    <div className="skills">
      <h1 className="skills__title">
        {props.lang === "PL" ? PL_PROGRAMMING_TITLE : EN_PROGRAMMING_TITLE}
      </h1>
      {PROGRAMMING_TO_SHOW}
      <h1 className="skills__title">
        {props.lang === "PL" ? PL_OTHER_TITLE : EN_OTHER_TITLE}
      </h1>
      {SKILLS_TO_SHOW}
    </div>
  );
};
