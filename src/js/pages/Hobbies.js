import React from "react";
import "../../styles/Hobbies.scss";
import coding from "../../images/coding.jpg";
import cooking from "../../images/cooking.jpg";
import books from "../../images/books.jpg";
import rolls from "../../images/rolls.jpg";
import music from "../../images/music.jpg";

const hobbiesIMG = [
  {
    url: coding,
    alt: "Coding",
    descriptionPL: "Programowanie wciąga i jest moją pasją, ale...",
    descriptionEN: "Programming is addictive and this is my passion, but..."
  },
  {
    url: cooking,
    alt: "Cooking",
    descriptionPL:
      "...nie samym programowaniem człowiek żyje. Jeść trzeba! Tak, lubię gotować. :)",
    descriptionEN:
      "...it's hard to live just programming. We need to eat! Yes, I like cooking. :)"
  },
  {
    url: books,
    alt: "Books",
    descriptionPL: "Lubię też dobrą książkę, głównie fantastykę.",
    descriptionEN: "I like good book, often it's a fantastic genre."
  },
  {
    url: rolls,
    alt: "Rolls",
    descriptionPL:
      "Trochę aktywności też się znajdzie w tym wszystkim np. jazda na rolkach.",
    descriptionEN:
      "A bit of activity will also be found in all this, e.g. rollerblading."
  },
  {
    url: music,
    alt: "Music",
    descriptionPL:
      "I muzyka, która zwykle mi towarzyszy! Czasem nawet zdarza mi się grywać na instrumentach.",
    descriptionEN:
      "And the music that usually accompanies me! Sometimes I even play instruments."
  }
];

const Hobbies = props => {
  const hobbiesImgArr = hobbiesIMG.map(item => (
    <div className="hobbies__wrapper" key={item.alt}>
      <p className="hobbies__description">
        {props.lang === "PL" ? item.descriptionPL : item.descriptionEN}
      </p>
      <img className="hobbies__img" src={item.url} alt={item.alt} />
    </div>
  ));

  return <div className="hobbies">{hobbiesImgArr}</div>;
};

export default Hobbies;
