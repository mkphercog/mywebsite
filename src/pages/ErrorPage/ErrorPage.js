import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";

import "./ErrorPage.scss";
import ErrorImg from "../../images/ErrorImg.jpg";
import CONTENT from "../../pages-content.json";

const { PL_LANGUAGE } = CONTENT.PL;
const { PL_ARE_YOU_LOST, PL_BACK_TO_MAIN_PAGE } = CONTENT.PL.ERROR_PAGE;
const { EN_ARE_YOU_LOST, EN_BACK_TO_MAIN_PAGE } = CONTENT.EN.ERROR_PAGE;

export const ErrorPage = ({ selectedLanguage }) => {
  const isPolishLanguageChoosen = useMemo(
    () => selectedLanguage === PL_LANGUAGE,
    [selectedLanguage]
  );
  const history = useHistory();

  return (
    <div className="errorPage">
      <img className="errorPage__img" src={ErrorImg} alt="Error!" />
      <div className="errorPage__wrapper">
        <p className="errorPage__text">
          {isPolishLanguageChoosen ? PL_ARE_YOU_LOST : EN_ARE_YOU_LOST}
        </p>
        <button
          className="errorPage__backBtn"
          onClick={() => {
            history.push("/");
          }}
        >
          {isPolishLanguageChoosen
            ? PL_BACK_TO_MAIN_PAGE
            : EN_BACK_TO_MAIN_PAGE}
        </button>
      </div>
    </div>
  );
};
