import React from "react";
import "./Footer.scss";

export const Footer = props => (
  <div className="footer">
    <p className="footer__name">
      &copy; {props.lang === "PL" ? "Marcin" : "Martin"} Hercog
    </p>
  </div>
);
