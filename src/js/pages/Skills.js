import React from "react";
import "../../styles/Skills.scss";

const programing = [
  {
    name: "HTML",
    progress: 44
  },
  {
    name: "CSS/SCSS",
    progress: 49
  },
  {
    name: "JavaScript",
    progress: 40
  },
  {
    name: "React",
    progress: 36
  }
];

const Skills = () => {
  const skillsArr = programing.map(item => (
    <div key={item.name}>
      <h3 className="skills__name">{item.name}</h3>
      <div className="skills__bar">
        <div
          style={{
            width: `${item.progress}%`,
            height: "100%",
            backgroundColor: "goldenrod"
          }}
        ></div>
      </div>
    </div>
  ));
  return (
    <div className="skills">
      <h1 className="skills__title">Programowanie</h1>
      {skillsArr}
      <h1 className="skills__title">Inne</h1>
      <h3 className="skills__name skills__name--alone">
        Prawo jazdy kategorii B (od 10.2012)
      </h3>
      <h3 className="skills__name skills__name--alone">
        Dobra znajomość programu Corel Draw i Photoshop
      </h3>
      <h3 className="skills__name skills__name--alone">
        Pracowitość, dokładność
      </h3>
      <h3 className="skills__name skills__name--alone">
        Szybkie przyswajanie wiedzy, zaangażowanie
      </h3>
      <h3 className="skills__name skills__name--alone">
        Łatwość w nawiązywaniu kontaktów
      </h3>
      <h3 className="skills__name skills__name--alone">
        Język angielski - komunikatywny
      </h3>
    </div>
  );
};

export default Skills;
