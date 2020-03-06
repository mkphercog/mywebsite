import React from "react";
import "./Experience.scss";
import CONTENT from "../../pages-content.json";

const { PL_LANGUAGE } = CONTENT.PL;
const {
  PL_WORK_TITLE,
  PL_EXPERIENCE_LIST,
  PL_EDUCATION_TITLE,
  PL_SCHOOLS_LIST
} = CONTENT.PL.EXPERIENCE;

const {
  EN_WORK_TITLE,
  EN_EXPERIENCE_LIST,
  EN_EDUCATION_TITLE,
  EN_SCHOOLS_LIST
} = CONTENT.EN.EXPERIENCE;

export const Experience = ({ selectedLanguage }) => {
  let EXPERIENCE_TO_SHOW =
    selectedLanguage === PL_LANGUAGE ? PL_EXPERIENCE_LIST : EN_EXPERIENCE_LIST;

  EXPERIENCE_TO_SHOW = EXPERIENCE_TO_SHOW.map(item => (
    <article key={item.id} className={`experience__wrapper`}>
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
  ));

  let SCHOOLS_TO_SHOW =
    selectedLanguage === PL_LANGUAGE ? PL_SCHOOLS_LIST : EN_SCHOOLS_LIST;

  SCHOOLS_TO_SHOW = SCHOOLS_TO_SHOW.map(item => (
    <article key={item.id} className={`experience__wrapper`}>
      <h3 className="experience__companyName">{item.schoolName}</h3>
      <p className="experience__text experience__text--italic">
        {item.profile}
      </p>
      <p className="experience__text experience__text--boldGolden">
        {item.date}
      </p>
    </article>
  ));

  return (
    <>
      <section className="experience">
        <h1 className="experience__title">
          {selectedLanguage === PL_LANGUAGE ? PL_WORK_TITLE : EN_WORK_TITLE}
        </h1>
        {EXPERIENCE_TO_SHOW.reverse()}
      </section>
      <section className="experience">
        <h1 className="experience__title">
          {selectedLanguage === PL_LANGUAGE
            ? PL_EDUCATION_TITLE
            : EN_EDUCATION_TITLE}
        </h1>
        {SCHOOLS_TO_SHOW.reverse()}
      </section>
    </>
  );
};
