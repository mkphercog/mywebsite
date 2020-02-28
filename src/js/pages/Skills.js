import React from "react";
import "../../styles/Skills.scss";

const programing = [
  {
    name: "HTML",
    progress: 28
  },
  {
    name: "CSS/SCSS",
    progress: 29
  },
  {
    name: "JavaScript",
    progress: 25
  },
  {
    name: "React",
    progress: 23
  },
  {
    name: "GIT",
    progress: 24
  }
];

const otherSkills = [
  {
    textPL: "Prawo jazdy kategorii B (od 10.2012)",
    textEN: "Category B driving license (since 10.2012)"
  },
  {
    textPL: "Dobra znajomość programu Corel Draw i Photoshop",
    textEN: "Good knowledge of Corel Draw and Photoshop"
  },
  {
    textPL: "Pracowitość, dokładność",
    textEN: "Diligence, accuracy"
  },
  {
    textPL: "Szybkie przyswajanie wiedzy, zaangażowanie",
    textEN: "Fast learning, involvement"
  },
  {
    textPL: "Łatwość w nawiązywaniu kontaktów",
    textEN: "Easy to make contacts"
  },
  {
    textPL: "Język angielski - komunikatywny",
    textEN: "Communicative English level"
  }
];

const Skills = props => {
  const skillsArr = programing.map(item => (
    <div key={item.name}>
      <h3 className="skills__name">{item.name}</h3>
      <div className="skills__bar">
        <div
          style={{
            width: `${item.progress}%`,
            height: "100%",
            backgroundColor: "goldenrod",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px"
          }}
        ></div>
      </div>
    </div>
  ));

  const otherArr = otherSkills.map(item => (
    <h3 key={item.textPL} className="skills__name skills__name--alone">
      {props.lang === "PL" ? item.textPL : item.textEN}
    </h3>
  ));

  return (
    <div className="skills">
      <h1 className="skills__title">
        {props.lang === "PL" ? "Programowanie" : "Programming"}
      </h1>
      {skillsArr}
      <h1 className="skills__title">
        {props.lang === "PL" ? "Inne" : "Other"}
      </h1>
      {otherArr}
    </div>
  );
};

export default Skills;
