import React from "react";
import "../../styles/Language.scss";

const Language = props => {
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
      <span className="language__icon">&#151;</span>
    </div>
  );
};

export default Language;
