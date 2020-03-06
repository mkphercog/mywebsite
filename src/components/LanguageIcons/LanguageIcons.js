import React from "react";
import "./LanguageIcons.scss";
import CONTENT from "../../components-content.json";

const { PL_LANGUAGE } = CONTENT.PL;
const { EN_LANGUAGE } = CONTENT.EN;

export const LanguageIcons = ({ selectedLanguage, changeLanguage }) => {
  const langBool = selectedLanguage === PL_LANGUAGE ? true : false;

  const stylePL = {
    backgroundColor: `${langBool ? "goldenrod" : "transparent"}`
  };

  const styleEN = {
    backgroundColor: `${!langBool ? "goldenrod" : "transparent"}`
  };

  return (
    <div className="language">
      <button
        style={stylePL}
        onClick={() => changeLanguage(PL_LANGUAGE)}
        className="language__btn"
      >
        {PL_LANGUAGE}
      </button>

      <button
        style={styleEN}
        onClick={() => changeLanguage(EN_LANGUAGE)}
        className="language__btn"
      >
        {EN_LANGUAGE}
      </button>

      <span className="language__icon">
        <i className="fas fa-globe"></i>
      </span>
    </div>
  );
};
