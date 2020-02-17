import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles//ErrorPage.scss";
import ErrorImg from "../../images/ErrorImg.jpg";

const ErrorPage = props => {
  const history = useHistory();
  return (
    <div className="errorPage">
      <img className="errorPage__img" src={ErrorImg} alt="Error!" />
      <div className="errorPage__wrapper">
        <p className="errorPage__text">
          {props.lang === "PL" ? "Zabłądziłeś??" : "Are you lost??"}
        </p>
        <button
          className="errorPage__backBtn"
          onClick={() => {
            history.push("/");
          }}
        >
          {props.lang === "PL" ? "Wróc na stronę główną" : "Back to main page"}
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
