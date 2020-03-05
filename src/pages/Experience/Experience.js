import React from "react";
import "./Experience.scss";
import INFO from "../../web-informations.json";

const {
  PL_WORK_TITLE,
  PL_EXPERIENCE_LIST,
  PL_EDUCATION_TITLE,
  PL_SCHOOLS_LIST
} = INFO.PL.EXPERIENCE;

const {
  EN_WORK_TITLE,
  EN_EXPERIENCE_LIST,
  EN_EDUCATION_TITLE,
  EN_SCHOOLS_LIST
} = INFO.EN.EXPERIENCE;

let EXPERIENCE_TO_SHOW = [];
let SCHOOLS_TO_SHOW = [];

export const Experience = props => {
  const setLangExperienceList = lang => {
    EXPERIENCE_TO_SHOW =
      lang === "PL" ? PL_EXPERIENCE_LIST : EN_EXPERIENCE_LIST;

    EXPERIENCE_TO_SHOW = EXPERIENCE_TO_SHOW.map((item, index) => {
      //popraw do CSS????????????/
      const side =
        index % 2 ? "experience__wrapper--right" : "experience__wrapper--left";
      return (
        <article key={item.id} className={`experience__wrapper ` + side}>
          <h3 className="experience__companyName">{item.companyName}</h3>
          <p className="experience__text experience__text--italic">
            {item.profession}
          </p>
          <p className="experience__text experience__text--boldGolden">
            {item.date}
          </p>
          <p className="experience__text experience__text--fz">
            {item.description}
          </p>
        </article>
      );
    });
  };

  const setLangSchoolsList = lang => {
    SCHOOLS_TO_SHOW = lang === "PL" ? PL_SCHOOLS_LIST : EN_SCHOOLS_LIST;

    SCHOOLS_TO_SHOW = SCHOOLS_TO_SHOW.map((item, index) => {
      const side =
        index % 2 ? "experience__wrapper--right" : "experience__wrapper--left";
      return (
        <article key={item.id} className={`experience__wrapper ` + side}>
          <h3 className="experience__companyName">{item.schoolName}</h3>
          <p className="experience__text experience__text--italic">
            {item.profile}
          </p>
          <p className="experience__text experience__text--boldGolden">
            {item.date}
          </p>
        </article>
      );
    });
  };

  setLangSchoolsList(props.lang);
  setLangExperienceList(props.lang);

  return (
    <>
      <section className="experience">
        <h1 className="experience__title">
          {props.lang === "PL" ? PL_WORK_TITLE : EN_WORK_TITLE}
        </h1>
        {EXPERIENCE_TO_SHOW.reverse()}
      </section>
      <section className="experience">
        <h1 className="experience__title">
          {props.lang === "PL" ? PL_EDUCATION_TITLE : EN_EDUCATION_TITLE}
        </h1>
        {SCHOOLS_TO_SHOW.reverse()}
      </section>
    </>
  );
};
