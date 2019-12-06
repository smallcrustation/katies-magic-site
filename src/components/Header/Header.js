import React, { useContext, useState } from "react";
import Nav from "../Nav/Nav";
import "./Header.css";
import { NavContext } from "../../contexts/NavContext";
import DayNight from "../DayNight/DayNight";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { expanded } = useContext(NavContext);
  const { dayNight } = useContext(ThemeContext);
  const [mobile, setMobile] = useState(true);

  const toggleMobile = bool => {
    setMobile(bool);
  };

  return (
    <header
    style={dayNight ?null:{borderBottomColor: "white"}}
      className={`Header fadeInDown-1 container ${expanded & mobile ? "Header-expanded" : ""}`} >
      <a className={`Logo ${dayNight?'':'Logo-night'}`} href="/">
        <span>CO</span>
      </a>
      <DayNight mobile={mobile} />
      <Nav toggleMobile={toggleMobile} />
    </header>
  );
};

export default Header;
