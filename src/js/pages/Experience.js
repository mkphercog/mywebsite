import React from "react";
import "../../styles/Experience.scss";

const expInfo = [
  {
    id: 1,
    companyName: `Studio Reklamy "Prymus II"`,
    profession: "Montażysta reklam",
    date: "10.2013 - 12.2014",
    description:
      "Praca manualna przy tworzeniu i montowaniu reklam, oklejanie samochodów, tworzenie podstawowych grafik, obsługa klienta detalicznego, przyjmowanie zamówień."
  },
  {
    id: 2,
    companyName: "Donaco Sp z o.o.",
    profession: "Pracownik biurowy",
    date: "10.2015 - 11.2017",
    description:
      "Administracja sklepów internetowych, przyjmowanie zamówień, kontakt mailowy i telefoniczny z klientem polskim i zagranicznym, wystawianie faktur i paragonów, podstawowa obróbka zdjęć i wykonywanie prostych grafik."
  },
  {
    id: 3,
    companyName: "Eko Okna S.A.",
    profession: "Pracownik biurowy",
    date: "02.2018 - obecnie",
    description:
      "Przygotowywanie ofert stolarki otworowej dla klienta włoskiego, dbanie o prawidłowe przygotowanie oferty pod względem technologicznym, dokumentacja ofert, współpraca z technologami, obsługa biura."
  }
];

const schoolInfo = [
  {
    id: 1,
    schoolName: "Technikum nr 2 w ZSE, Wodzisław Śl.",
    profile: "Profil informatyczny",
    date: "09.2009 - 04.2013"
  }
];

const Experience = () => {
  const expArr = expInfo.map((item, index) => {
    const side =
      index % 2 ? "experience__wrapper--right" : "experience__wrapper--left";
    return (
      <article key={item.id} className={`experience__wrapper ` + side}>
        <h3 className="experience__companyName">{item.companyName}</h3>
        <p className="experience__text experience__text--italic">
          {item.profession}
        </p>
        <p className="experience__text experience__text--boldGolden">
          {item.date}
        </p>
        <p className="experience__text experience__text--fz">
          {item.description}
        </p>
      </article>
    );
  });

  const schoolArr = schoolInfo.map((item, index) => {
    const side =
      index % 2 ? "experience__wrapper--right" : "experience__wrapper--left";
    return (
      <article key={item.id} className={`experience__wrapper ` + side}>
        <h3 className="experience__companyName">{item.schoolName}</h3>
        <p className="experience__text experience__text--italic">
          {item.profile}
        </p>
        <p className="experience__text experience__text--boldGolden">
          {item.date}
        </p>
      </article>
    );
  });

  return (
    <>
      <section className="experience">
        <h1 className="experience__title">Doświadczenie zawodowe</h1>
        {expArr.reverse()}
      </section>
      <section className="experience">
        <h1 className="experience__title">Ukończone szkoły</h1>
        {schoolArr.reverse()}
      </section>
    </>
  );
};

export default Experience;
