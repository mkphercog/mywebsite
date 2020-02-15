import React from "react";
import "../../styles/Portfolio.scss";

const projects = [
  {
    name: "Budżet domowy",
    description: "Projek napisany w React.",
    urlWeb: "https://mkphercog.github.io/React-Apps/",
    urlCode: "https://github.com/mkphercog/React-Apps/tree/homeBudget"
  },
  {
    name: "Budżet domowy",
    description: "Projek napisany w React.",
    urlWeb: "https://mkphercog.github.io/React-Apps/",
    urlCode: "https://github.com/mkphercog/React-Apps/tree/homeBudget"
  }
];

const Portfolio = () => {
  const projectsArr = projects.map(project => {
    fetch(project.urlWeb)
      .then(res => console.log("Url działa poprawnie"))
      .catch(err => console.log(`błąd ${err}`));

    return (
      <>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <a href={project.urlWeb}>Zobacz projekt tutaj</a>
        <a href={project.urlCode}>Kod tutaj</a>
      </>
    );
  });

  return <div>{projectsArr}</div>;
};

export default Portfolio;
