import React from "react";
import { Switch, Route } from "react-router-dom";
import "../../styles/Header.scss";
// import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";

const Header = props => {
  return (
    <div className="sliders">
      <img className="sliders__image" src={slider2} alt="slider2" />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <h1 className="sliders__title">
              {props.lang === "PL" ? "Marcin" : "Martin"} Hercog
            </h1>
          )}
        />
        <Route
          path="/experience"
          component={() => (
            <h1 className="sliders__title">
              {props.lang === "PL" ? "Doświadczenie" : "Experience"}
            </h1>
          )}
        />
        <Route
          path="/skills"
          component={() => (
            <h1 className="sliders__title">
              {props.lang === "PL" ? "Umiejętności" : "Skills"}
            </h1>
          )}
        />
        <Route
          path="/hobbies"
          component={() => (
            <h1 className="sliders__title">
              {props.lang === "PL" ? "Zainteresowania" : "Hobbies"}
            </h1>
          )}
        />
        <Route
          path="/portfolio"
          component={() => <h1 className="sliders__title">Portfolio</h1>}
        />
        <Route component={() => <h1 className="sliders__title">Error!</h1>} />
      </Switch>
    </div>
  );
};

export default Header;
