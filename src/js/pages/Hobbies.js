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
    description: "Programowanie wciąga i jest moją pasją ale..."
  },
  {
    url: cooking,
    alt: "Cooking",
    description:
      "...nie samym programowaniem człowiek żyje. Jeść trzeba! Tak, lubię gotować. :)"
  },
  {
    url: books,
    alt: "Books",
    description: "Lubię też dobrą książkę, głównie fantastykę."
  },
  {
    url: rolls,
    alt: "Rolls",
    description:
      "Trochę aktywności też się zjadzie w tym wszystkim np. jazda na rolkach."
  },
  {
    url: music,
    alt: "Music",
    description:
      "I muzyka, która zwykle mi towarzyszy! Czasem nawet zdarza mi się grywać na instrumentach."
  }
];

const Hobbies = () => {
  const hobbiesImgArr = hobbiesIMG.map(item => (
    <div className="hobbies__wrapper" key={item.alt}>
      <p className="hobbies__description">{item.description}</p>
      <img className="hobbies__img" src={item.url} alt={item.alt} />
    </div>
  ));

  return <div className="hobbies">{hobbiesImgArr}</div>;
};

export default Hobbies;
