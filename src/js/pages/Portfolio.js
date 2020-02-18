import React from "react";
import "../../styles/Portfolio.scss";

const projects = [
  {
    namePL: "Budżet domowy",
    nameEN: "Home budget",
    descriptionPL:
      "Budżet domowy to mini aplikacja do obliczania swoich wydatków. Jest to mój pierwszy samodzielny projekt z wykorzystaniem biblioteki React. ",
    descriptionEN:
      "A mini project to calculate your expenses. I wrote the whole project using the React library.",
    urlWeb: "https://mkphercog.github.io/React-Apps/",
    urlCode: "https://github.com/mkphercog/React-Apps/tree/homeBudget"
  },
  {
    namePL: "Saper",
    nameEN: "Sapper",
    descriptionPL:
      "Gra saper to przede wszystkim ćwiczenie JavaScriptu, kod nie jest idealny, ale... działa!",
    descriptionEN: "Sapper game, code sucks, but... works!",
    urlWeb: "https://mkphercog.github.io/SapperTestingVersion/",
    urlCode: "https://github.com/mkphercog/SapperTestingVersion"
  },
  {
    namePL: "Kalkulator",
    nameEN: "Calculator",
    descriptionPL: "Prosty kalkulator.",
    descriptionEN: "A simple calculator.",
    urlWeb: "https://mkphercog.github.io/calculator/",
    urlCode: "https://github.com/mkphercog/calculator"
  },
  {
    namePL: "Pierwsza wizytówka",
    nameEN: "My first card",
    descriptionPL:
      "Ten projekt to moje początki przygody z HTML, CSS i trochę JS. Uczyłem się tutaj jak zrobić responsywną stonę à la wizytówka.",
    descriptionEN:
      "The first business card is my beginnings with HTML, CSS and some JS.",
    urlWeb: "https://mkphercog.github.io/my-first-web-JS/",
    urlCode: "https://github.com/mkphercog/my-first-web-JS"
  }
];

const Portfolio = props => {
  const projectsArr = projects.map(project => (
    <div key={project.namePL} className="portfolio__wrapper">
      <h1 className="portfolio__title">
        {props.lang === "PL" ? project.namePL : project.nameEN}
      </h1>
      <p className="portfolio__description">
        {props.lang === "PL" ? project.descriptionPL : project.descriptionEN}
      </p>
      <a
        className="portfolio__link"
        href={project.urlWeb}
        target="_blank"
        rel="noreferrer noopener"
      >
        {props.lang === "PL" ? "Zobacz projekt tutaj" : "See project here"}
      </a>
      <a
        className="portfolio__link"
        href={project.urlCode}
        target="_blank"
        rel="noreferrer noopener"
      >
        {props.lang === "PL" ? "Kod dostępny tutaj" : "Code available here"}
      </a>
    </div>
  ));

  return <div className="portfolio">{projectsArr}</div>;
};

export default Portfolio;