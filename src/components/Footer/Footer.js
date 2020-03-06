import React from "react";

import "./Footer.scss";
import CONTENT from "../../components-content.json";

const { PL_NAME, PL_LANGUAGE } = CONTENT.PL;
const { EN_NAME } = CONTENT.EN;

export const Footer = ({ selectedLanguage }) => (
  <div className="footer">
    <p className="footer__name">
      &copy; {selectedLanguage === PL_LANGUAGE ? PL_NAME : EN_NAME} Hercog
    </p>
  </div>
);
