import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";

import { MenuIcon } from "../MenuIcon/MenuIcon";
import { ExitIcon } from "../ExitIcon/ExitIcon";
import { LanguageIcons } from "../LanguageIcons/LanguageIcons";

import "./Navigation.scss";
import CONTENT from "../../components-content.json";

const { PL_NAV, PL_LANGUAGE } = CONTENT.PL;
const { EN_NAV } = CONTENT.EN;
const navShow = "nav--show";
const navHide = "nav--hide";

export const Navigation = ({ selectedLanguage, changeLanguage }) => {
  const [menuVisibilityClass, setMenuVisibilityClass] = useState("");

  const navRender = useMemo(
    () =>
      (selectedLanguage === PL_LANGUAGE ? PL_NAV : EN_NAV).map((item) => (
        <li className="nav__item" key={item.name}>
          <NavLink
            className="nav__link"
            to={item.path}
            exact={item.exact}
            onClick={() => setMenuVisibilityClass(navHide)}
          >
            {item.name}
          </NavLink>
        </li>
      )),
    [selectedLanguage]
  );

  //I'm deleting here "Error" (last index) from array, because it's unnecessary here, but I need this "Error" in array to display it in header when path is wrong
  useMemo(() => navRender.pop(), [navRender]);

  return (
    <>
      <ul className={`nav ${menuVisibilityClass}`}>
        <ExitIcon hideMenu={() => setMenuVisibilityClass(navHide)} />
        <LanguageIcons
          changeLanguage={changeLanguage}
          selectedLanguage={selectedLanguage}
        />
        {navRender}
      </ul>
      <MenuIcon
        isMenuVisible={menuVisibilityClass === navShow ? true : false}
        setMenuVisible={() => setMenuVisibilityClass(navShow)}
      />
    </>
  );
};
