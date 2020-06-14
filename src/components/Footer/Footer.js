import React, { useMemo } from "react";

import "./Footer.scss";
import CONTENT from "../../components-content.json";

const { PL_NAME, PL_LANGUAGE } = CONTENT.PL;
const { EN_NAME } = CONTENT.EN;

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
    </footer>
  );
};
