import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { MenuIcon } from "../MenuIcon/MenuIcon";
import { ExitIcon } from "../ExitIcon/ExitIcon";
import { LanguageIcons } from "../LanguageIcons/LanguageIcons";

import "./Navigation.scss";
import CONTENT from "../../components-content.json";

const { PL_NAV, PL_LANGUAGE } = CONTENT.PL;
const { EN_NAV } = CONTENT.EN;

export const Navigation = ({ selectedLanguage, changeLanguage }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [positionMenu, setPositionMenu] = useState(-100);
  const animationSpeed = 8;

  //menu animation when mobile or width < 1024px
  const menuSlide = num => {
    setPositionMenu(positionMenu + `${num}` * 1);
  };

  if (isMenuVisible && positionMenu < 0) {
    setTimeout(() => menuSlide(2), animationSpeed);
  }
  if (!isMenuVisible && positionMenu > -100) {
    setTimeout(() => menuSlide(-2), animationSpeed);
  }
  //--

  //initial look of menu (when web load and window resize)
  //I must do here setPositionMenu, because on desktop I need 'right: auto'
  //And after resize window < 1024px value must back to Number
  window.onload = () => {
    if (window.innerWidth >= 1024 && !isMenuVisible) {
      setPositionMenu("auto");
      setMenuVisible(true);
    } else {
      setPositionMenu(-100);
      setMenuVisible(false);
    }

    if (window.innerWidth >= 800 && window.innerHeight >= 600) {
      window.addEventListener("resize", () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1024) {
          setPositionMenu("auto");
          setMenuVisible(true);
        } else if (windowWidth < 1024) {
          setPositionMenu(-100);
          setMenuVisible(false);
        }
      });
    }
  };
  // --

  let NAV_TO_SHOW = selectedLanguage === PL_LANGUAGE ? PL_NAV : EN_NAV;

  NAV_TO_SHOW = NAV_TO_SHOW.map(item => (
    <li className="nav__item" key={item.name}>
      <NavLink
        className="nav__link"
        to={item.path}
        exact={item.exact}
        onClick={() => setMenuVisible(false)}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  //Delete "ERROR" from array, I need it in header but not here
  NAV_TO_SHOW.pop();

  return (
    <>
      <ul
        className="nav"
        style={{
          right: [positionMenu === "auto" ? positionMenu : positionMenu + "vw"]
        }}
      >
        <ExitIcon hideMenu={() => setMenuVisible(false)} />
        <LanguageIcons
          changeLanguage={changeLanguage}
          selectedLanguage={selectedLanguage}
        />
        {NAV_TO_SHOW}
      </ul>
      <MenuIcon
        isMenuVisible={isMenuVisible}
        setMenuVisible={() => setMenuVisible(true)}
      />
    </>
  );
};
