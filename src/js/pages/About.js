import React from "react";
import "../../styles/About.scss";

const yearNow = new Date().getFullYear();
const yearOfMyBirth = 1993;

const textPL = `Nazywam się Marcin Hercog mam ${yearNow -
  yearOfMyBirth} lat. Swoją
przygodę z programowaniem zacząłem już w technikum. Jednak po drodze
wiele spraw przeszkadzało mi na skupieniu się jedynie na tej pasji. W
swoim życiu poznawałem Pascala i C# (w szkole), C# i Jave (we własnym
zakresie zaraz po szkole) jednak nie była to wiedza która pozwalałaby
rozpocząć pracę, dlatego programowanie zawsze bylo gdzieś na drugim
planie. Na początku września 2019r. postanowiłem ponownie wrócić do tematu
programowania, tym razem postawiłem na HTML, CSS i JavaScript (+ React)
za namową znajomego. Jest to mój wielki powrót do programowania po
latach z czego bardzo się cieszę! :)`;

const textEN = `My name is Martin Hercog. I'm ${yearNow -
  yearOfMyBirth} years old.I started my programming adventure in technical school. However, along the way many things prevented me from focusing only on this passion. In my life I met Pascal and C# (at school), C# and Java (on my own right after school) but it was not the knowledge that would allow me to start work, so programming has always been somewhere in the background. In september 2019 I decided to go back to the programming topic again, this time I focused on HTML, CSS and JavaScript (+ React) at the urging of a friend. This is my great return to programming after years of which I am very happy! :)`;

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
