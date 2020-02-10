import React from "react";
import "../../styles/Header.scss";
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";

const Header = () => {
  return (
    <div className="sliders">
      <img src={slider2} alt="slider2" />
    </div>
  );
};

export default Header;
