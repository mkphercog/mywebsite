import React from "react";
import "./LanguageIcons.scss";

const LanguageIcons = props => {
  const stylePL =
    props.lang === "PL"
      ? { backgroundColor: "goldenrod" }
      : { backgroundColor: "transparent" };
  const styleEN =
    props.lang === "EN"
      ? { backgroundColor: "goldenrod" }
      : { backgroundColor: "transparent" };

  return (
    <div className="language">
      <button
        style={stylePL}
        onClick={() => props.click("PL")}
        className="language__btn"
      >
        PL
      </button>
      <button
        style={styleEN}
        onClick={() => props.click("EN")}
        className="language__btn"
      >
        EN
      </button>

      <span className="language__icon">
        <i className="fas fa-globe"></i>
      </span>
    </div>
  );
};

export default LanguageIcons;
