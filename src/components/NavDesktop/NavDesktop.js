import React, { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";
import "./NavDesktop.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const NavDesktop = () => {
  const { expanded, toggleExpanded, scrollTo } = useContext(NavContext);
  const {dayNight} = useContext(ThemeContext)

  return (
    <div className={`NavDesktop ${expanded ? "NavDesktop-active" : ""}`}>
      <div
        className="menu-icon"
        onClick={toggleExpanded}
      >
        <div
          className={`menu-icon-top ${
            expanded ? "menu-icon-top-expanded" : ""
          } ${dayNight?"":"menu-icon-night"}`}
        ></div>
        <div
          className={`menu-icon-bottom ${
            expanded ? "menu-icon-bottom-expanded" : ""
          } ${dayNight?"":"menu-icon-night"}`}
        ></div>
    
      </div>

      <div className="NavDesktop-overflow">
        <div className="verticalBar"></div>
        <ul
          className="NavDesktop-ul"
        >
    

          <li onClick={() => scrollTo("About")}>About</li>
          <li onClick={() => scrollTo("ProjectsList")}>Projects</li>
          <li onClick={() => scrollTo("Contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavDesktop;
