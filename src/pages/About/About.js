import React from "react";
import "./About.scss";

const yearNow = new Date().getFullYear();
const yearOfMyBirth = 1993;

const textPL = `Nazywam się Marcin Hercog i mam ${yearNow -
  yearOfMyBirth} lat. Swoją przygodę z programowaniem zacząłem już w technikum, jednak po drodze wiele spraw przeszkadzało mi w skupieniu się wyłącznie na tej pasji. W szkole zaznajomiłem się z Pascalem i C++, a po jej ukończeniu, już we własnym zakresie, z C# i Javą. Nie była to jednak wiedza na poziomie, który pozwoliłby rozpocząć pracę zawodową, dlatego też programowanie zawsze było gdzieś na drugim planie. Na początku września 2019 postanowiłem wrócić do programowania. Tym razem postawiłem na HTML, CSS i, za namową znajomego, JavaScript (+ React). Jest to mój wielki powrót do programowania po latach, z czego bardzo się cieszę! :)`;

const textEN = `Translation in near future... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ratione possimus, temporibus nisi vero laborum officia animi quos dicta deserunt quisquam id obcaecati totam quasi perferendis natus incidunt explicabo debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ratione possimus, temporibus nisi vero laborum officia animi quos dicta deserunt quisquam id obcaecati totam quasi perferendis natus incidunt explicabo debitis.`;

const About = props => {
  return (
    <div className="about">
      <div className="about__foto"></div>
      <div className="about__wrapText">
        <h1 className="about__welcome">
          {props.lang === "PL" ? "Witaj!" : "Hello!"}
        </h1>
        <p className="about__description">
          {props.lang === "PL" ? textPL : textEN}
        </p>
      </div>
    </div>
  );
};

export default About;
