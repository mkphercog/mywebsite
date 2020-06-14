import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { MenuIcon } from "../MenuIcon/MenuIcon";
import { ExitIcon } from "../ExitIcon/ExitIcon";
import { LanguageIcons } from "../LanguageIcons/LanguageIcons";

import "./Navigation.scss";
import CONTENT from "../../components-content.json";

const { PL_NAV, PL_LANGUAGE } = CONTENT.PL;
const { EN_NAV, EN_LANGUAGE } = CONTENT.EN;
const navShowClass = "nav--show";
const navHideClass = "nav--hide";

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
            onClick={() => setMenuVisibilityClass(navHideClass)}
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
      <nav className={`nav ${menuVisibilityClass}`}>
        <ExitIcon hideMenu={() => setMenuVisibilityClass(navHideClass)} />
        <LanguageIcons
          changeLanguage={changeLanguage}
          selectedLanguage={selectedLanguage}
        />
        {navRender}
      </nav>
      <MenuIcon
        isMenuVisible={menuVisibilityClass === navShowClass ? true : false}
        setMenuVisible={() => setMenuVisibilityClass(navShowClass)}
      />
    </>
  );
};

Navigation.propTypes = {
  selectedLanguage: PropTypes.oneOf([PL_LANGUAGE, EN_LANGUAGE]),
  changeLanguage: PropTypes.func,
};
