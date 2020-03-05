import React from "react";
import "./Hobbies.scss";
import coding from "../../images/coding.jpg";
import cooking from "../../images/cooking.jpg";
import books from "../../images/books.jpg";
import rolls from "../../images/rolls.jpg";
import music from "../../images/music.jpg";
import INFO from "../../web-content.json";

const { PL_DESCRIPTION } = INFO.PL.HOBBIES;
const { EN_DESCRIPTION } = INFO.EN.HOBBIES;

const hobbiesIMG = [
  {
    url: coding,
    alt: "Coding"
  },
  {
    url: cooking,
    alt: "Cooking"
  },
  {
    url: books,
    alt: "Books"
  },
  {
    url: rolls,
    alt: "Rolls"
  },
  {
    url: music,
    alt: "Music"
  }
];

export const Hobbies = props => {
  const HOBBIES_TO_SHOW = hobbiesIMG.map((item, index) => (
    <div className="hobbies__wrapper" key={item.alt}>
      <p className="hobbies__description">
        {props.lang === "PL"
          ? PL_DESCRIPTION[index].description
          : EN_DESCRIPTION[index].description}
      </p>
      <img className="hobbies__img" src={item.url} alt={item.alt} />
    </div>
  ));

  return <div className="hobbies">{HOBBIES_TO_SHOW}</div>;
};
