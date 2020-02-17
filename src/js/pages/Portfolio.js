import React from "react";
import "../../styles/Portfolio.scss";

const projects = [
  {
    namePL: "Budżet domowy",
    nameEN: "Home budget",
    descriptionPL:
      "Mini projekt do obliczania swoich wydatków. Całość projektu napisałem z wykorzystaniem biblioteki React.",
    descriptionEN:
      "A mini project to calculate your expenses. I wrote the whole project using the React library.",
    urlWeb: "https://mkphercog.github.io/React-Apps/",
    urlCode: "https://github.com/mkphercog/React-Apps/tree/homeBudget"
  },
  {
    namePL: "Saper",
    nameEN: "Sapper",
    descriptionPL: "Gra saper, niestety kodu się wstydzę, ale... działa.",
    descriptionEN:
      "Minesweeper game, unfortunately the code is ashamed, but ... works.",
    urlWeb: "https://mkphercog.github.io/SapperTestingVersion/",
    urlCode: "https://github.com/mkphercog/SapperTestingVersion"
  },
  {
    namePL: "Kalkulator",
    nameEN: "Calculator",
    descriptionPL: "Prosty kalkulator napisany w HTML, CSS i JS.",
    descriptionEN: "A simple calculator written in HTML, CSS and JS.",
    urlWeb: "https://mkphercog.github.io/calculator/",
    urlCode: "https://github.com/mkphercog/calculator"
  },
  {
    namePL: "Pierwsza wizytówka",
    nameEN: "My first card",
    descriptionPL:
      "Pierwsza wizytówka to moje początki przygody z HTML, CSS i trochę JS.",
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
