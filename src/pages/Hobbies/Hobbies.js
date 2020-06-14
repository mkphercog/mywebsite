import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./Hobbies.scss";

import coding from "../../images/coding.jpg";
import cooking from "../../images/cooking.jpg";
import books from "../../images/books.jpg";
import rolls from "../../images/rolls.jpg";
import music from "../../images/music.jpg";

import CONTENT from "../../pages-content.json";

const { PL_LANGUAGE } = CONTENT.PL;
const { EN_LANGUAGE } = CONTENT.EN;
const { PL_DESCRIPTION } = CONTENT.PL.HOBBIES;
const { EN_DESCRIPTION } = CONTENT.EN.HOBBIES;

const hobbiesImages = [
  {
    url: coding,
    alt: "Coding",
  },
  {
    url: cooking,
    alt: "Cooking",
  },
  {
    url: books,
    alt: "Books",
  },
  {
    url: rolls,
    alt: "Rolls",
  },
  {
    url: music,
    alt: "Music",
  },
];

export const Hobbies = ({ selectedLanguage }) => {
  const isPolishLanguageChoosen = useMemo(
    () => selectedLanguage === PL_LANGUAGE,
    [selectedLanguage]
  );

  const hobbiesToRender = useMemo(
    () =>
      hobbiesImages.map((item, index) => (
        <div className="hobbies__wrapper" key={index}>
          <p className="hobbies__description">
            {isPolishLanguageChoosen
              ? PL_DESCRIPTION[index].description
              : EN_DESCRIPTION[index].description}
          </p>
          <img className="hobbies__img" src={item.url} alt={item.alt} />
        </div>
      )),
    [isPolishLanguageChoosen]
  );

  return <div className="hobbies">{hobbiesToRender}</div>;
};

Hobbies.propTypes = {
  selectedLanguage: PropTypes.oneOf([PL_LANGUAGE, EN_LANGUAGE]),
};
