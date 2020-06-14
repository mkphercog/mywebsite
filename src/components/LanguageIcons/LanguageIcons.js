import React, { useMemo } from "react";
import PropTypes from "prop-types";

import "./LanguageIcons.scss";
import CONTENT from "../../components-content.json";

const { PL_LANGUAGE } = CONTENT.PL;
const { EN_LANGUAGE } = CONTENT.EN;

export const LanguageIcons = ({ selectedLanguage, changeLanguage }) => {
  const isPolishLanguageChoosen = useMemo(
    () => selectedLanguage === PL_LANGUAGE,
    [selectedLanguage]
  );

  const stylePL = useMemo(
    () => ({
      backgroundColor: `${
        isPolishLanguageChoosen ? "goldenrod" : "transparent"
      }`,
    }),
    [isPolishLanguageChoosen]
  );

  const styleEN = useMemo(
    () => ({
      backgroundColor: `${
        !isPolishLanguageChoosen ? "goldenrod" : "transparent"
      }`,
    }),
    [isPolishLanguageChoosen]
  );

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

LanguageIcons.propTypes = {
  selectedLanguage: PropTypes.oneOf([PL_LANGUAGE, EN_LANGUAGE]),
  changeLanguage: PropTypes.func,
};
