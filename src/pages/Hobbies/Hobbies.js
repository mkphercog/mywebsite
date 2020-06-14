import React, { useMemo } from "react";
import "./Hobbies.scss";

import coding from "../../images/coding.jpg";
import cooking from "../../images/cooking.jpg";
import books from "../../images/books.jpg";
import rolls from "../../images/rolls.jpg";
import music from "../../images/music.jpg";

import CONTENT from "../../pages-content.json";

const { PL_LANGUAGE } = CONTENT.PL;
const { PL_DESCRIPTION } = CONTENT.PL.HOBBIES;
const { EN_DESCRIPTION } = CONTENT.EN.HOBBIES;

const hobbiesIMG = [
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
      hobbiesIMG.map((item, index) => (
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
