import React from "react";
import "../../styles/Footer.scss";

const Footer = props => {
  return (
    <div className="footer">
      <p className="footer__name">
        &copy; {props.lang === "PL" ? "Marcin" : "Martin"} Hercog
      </p>
    </div>
  );
};

export default Footer;
