import React from "react";
import "../../styles/Experience.scss";

const expInfo = [
  {
    id: 1,
    companyName: `Studio Reklamy "Prymus II"`,
    professionPL: "Montażysta reklam",
    professionEN: "Ad fitter",
    datePL: "10.2013 - 12.2014",
    dateEN: "10.2013 - 12.2014",
    descriptionPL:
      "Praca manualna przy tworzeniu i montowaniu reklam, oklejanie samochodów, tworzenie podstawowych grafik, obsługa klienta detalicznego, przyjmowanie zamówień.",
    descriptionEN:
      "Manual work on creating and fitting ads, wrapping cars, creating basic graphics, retail customer service, taking orders."
  },
  {
    id: 2,
    companyName: "Donaco Sp z o.o.",
    professionPL: "Pracownik biurowy",
    professionEN: "Office worker",
    datePL: "10.2015 - 11.2017",
    dateEN: "10.2015 - 11.2017",
    descriptionPL:
      "Administracja sklepów internetowych, przyjmowanie zamówień, kontakt mailowy i telefoniczny z klientem polskim i zagranicznym, wystawianie faktur i paragonów, podstawowa obróbka zdjęć i wykonywanie prostych grafik.",
    descriptionEN:
      "Administration of online stores, taking orders, e-mail and telephone contact with Polish and foreign customers, issuing invoices and receipts, basic photo processing and making simple graphics."
  },
  {
    id: 3,
    companyName: "Eko Okna S.A.",
    professionPL: "Pracownik biurowy",
    professionEN: "Office worker",
    datePL: "02.2018 - obecnie",
    dateEN: "02.2018 - now",
    descriptionPL:
      "Przygotowywanie ofert stolarki otworowej dla klienta włoskiego, dbanie o prawidłowe przygotowanie oferty pod względem technologicznym, dokumentacja ofert, współpraca z technologami, obsługa biura.",
    descriptionEN:
      "Preparing offers for joinery for an Italian customer, taking care of the correct preparation of the offer in terms of technology, documentation of offers, cooperation with technologists, office service."
  }
];

const schoolInfo = [
  {
    id: 1,
    schoolName: "Technikum nr 2 w ZSE, Wodzisław Śl.",
    profilePL: "Profil informatyczny",
    profileEN: "IT profile",
    date: "09.2009 - 04.2013"
  }
];

const Experience = props => {
  const expArr = expInfo.map((item, index) => {
    const side =
      index % 2 ? "experience__wrapper--right" : "experience__wrapper--left";
    return (
      <article key={item.id} className={`experience__wrapper ` + side}>
        <h3 className="experience__companyName">{item.companyName}</h3>
        <p className="experience__text experience__text--italic">
          {props.lang === "PL" ? item.professionPL : item.professionEN}
        </p>
        <p className="experience__text experience__text--boldGolden">
          {props.lang === "PL" ? item.datePL : item.dateEN}
        </p>
        <p className="experience__text experience__text--fz">
          {props.lang === "PL" ? item.descriptionPL : item.descriptionEN}
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
          {props.lang === "PL" ? item.profilePL : item.profileEN}
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
        <h1 className="experience__title">
          {props.lang === "PL" ? "Doświadczenie zawodowe" : "Work history"}
        </h1>
        {expArr.reverse()}
      </section>
      <section className="experience">
        <h1 className="experience__title">
          {props.lang === "PL" ? "Ukończone szkoły" : "Finished schools"}
        </h1>
        {schoolArr.reverse()}
      </section>
    </>
  );
};

export default Experience;
