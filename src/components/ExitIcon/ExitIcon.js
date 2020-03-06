import React from "react";
import "./ExitIcon.scss";

export const ExitIcon = ({ hideMenu }) => (
  <div onClick={hideMenu} className="exit-icon">
    <i className="fas fa-times"></i>
  </div>
);
