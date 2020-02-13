import React from "react";
import "../../styles/About.scss";

const yearNow = new Date().getFullYear();
const yearOfMyBirth = 1993;

const About = () => {
  return (
    <div className="about">
      <div className="about__foto"></div>
      <div className="about__wrapText">
        <h1 className="about__welcome">Witaj!</h1>
        <p className="about__description">
          Nazywam się Marcin Hercog mam {yearNow - yearOfMyBirth} lat. Swoją
          przygodę z programowaniem zacząłem już w technikum. Jednak po drodze
          wiele spraw przeszkadzało mi na skupieniu się jedynie na tej pasji. W
          swoim życiu poznawałem Pascala i C# (w szkole), C# i Jave (we własnym
          zakresie zaraz po szkole) jednak nie była to wiedza która pozwalałaby
          rozpocząć pracę, dlatego programowanie zawsze bylo gdzieś na drugim
          planie. We wrześniu 2019r. postanowiłem ponownie wrócić do tematu
          programowania, tym razem postawiłem na HTML, CSS i JavaScript (+React)
          za namową znajomego. Jest to mój wielki powrót do programowania po
          latach z czego bardzo się cieszę! :)
        </p>
      </div>
    </div>
  );
};

export default About;
