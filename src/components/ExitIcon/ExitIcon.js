import React from "react";
import "./ExitIcon.scss";

export const ExitIcon = props => (
  <div onClick={props.click} className="exit-icon">
    <i className="fas fa-times"></i>
  </div>
);
