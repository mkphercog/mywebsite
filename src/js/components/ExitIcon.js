import React from "react";
import "../../styles/ExitIcon.scss";

const ExitIcon = props => {
  return (
    <div onClick={props.click} className="exit-icon">
      <i className="fas fa-times"></i>
    </div>
  );
};

export default ExitIcon;
