import React, { useMemo } from "react";
import PropTypes from "prop-types";

import "./Footer.scss";
import CONTENT from "../../components-content.json";

const { PL_NAME, PL_LANGUAGE } = CONTENT.PL;
const { EN_NAME, EN_LANGUAGE } = CONTENT.EN;

export const Footer = ({ selectedLanguage }) => {
  const isPolishLanguageChoosen = useMemo(
    () => selectedLanguage === PL_LANGUAGE,
    [selectedLanguage]
  );

  return (
    <footer className="footer">
      <p className="footer__name">
        &copy; {isPolishLanguageChoosen ? PL_NAME : EN_NAME} Hercog
      </p>
      <a
        className="footer__web-code"
        href="https://github.com/mkphercog/mywebsite/tree/master"
        target="_blank"
        rel="noopener noreferrer"
      >
        {isPolishLanguageChoosen ? "{ Kod strony }" : "{ Website code }"}
      </a>
    </footer>
  );
};

Footer.propTypes = {
  selectedLanguage: PropTypes.oneOf([PL_LANGUAGE, EN_LANGUAGE]),
};
