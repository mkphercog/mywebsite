import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles//ErrorPage.scss";
import ErrorImg from "../../images/ErrorImg.jpg";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <div className="errorPage">
      <img className="errorPage__img" src={ErrorImg} alt="Error!" />
      <div className="errorPage__wrapper">
        <p className="errorPage__text">Zabłądziłeś??</p>
        <button
          className="errorPage__backBtn"
          onClick={() => {
            history.push("/");
          }}
        >
          Wróc na stronę główną
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
