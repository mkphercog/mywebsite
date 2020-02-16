import React from "react";
import "../../styles/Portfolio.scss";

const projects = [
  {
    name: "Budżet domowy",
    description:
      "Mini projekt do obliczania swoich wydatków. Całość projektu napisałem z wykorzystaniem biblioteki React.",
    urlWeb: "https://mkphercog.github.io/React-Apps/",
    urlCode: "https://github.com/mkphercog/React-Apps/tree/homeBudget"
  },
  {
    name: "Saper",
    description: "Gra saper, niestety kodu się wstydzę, ale... działa.",
    urlWeb: "https://mkphercog.github.io/SapperTestingVersion/",
    urlCode: "https://github.com/mkphercog/SapperTestingVersion"
  },
  {
    name: "Kalkulator",
    description: "Prosty kalkulator napisany w HTML, CSS i JS",
    urlWeb: "https://mkphercog.github.io/calculator/",
    urlCode: "https://github.com/mkphercog/calculator"
  },
  {
    name: "Pierwsza wizytówka",
    description:
      "Pierwsza wizytówka to moje początki przygody z HTML, CSS i trochę JS.",
    urlWeb: "https://mkphercog.github.io/my-first-web-JS/",
    urlCode: "https://github.com/mkphercog/my-first-web-JS"
  }
];

const Portfolio = () => {
  const projectsArr = projects.map(project => (
    <div key={project.name} className="portfolio__wrapper">
      <h1 className="portfolio__title">{project.name}</h1>
      <p className="portfolio__description">{project.description}</p>
      <a
        className="portfolio__link"
        href={project.urlWeb}
        target="_blank"
        rel="noreferrer noopener"
      >
        Zobacz projekt tutaj
      </a>
      <a
        className="portfolio__link"
        href={project.urlCode}
        target="_blank"
        rel="noreferrer noopener"
      >
        Kod dostępny tutaj
      </a>
    </div>
  ));

  return <div className="portfolio">{projectsArr}</div>;
};

export default Portfolio;
