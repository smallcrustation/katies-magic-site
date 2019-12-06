import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [dayNight, setDayNight] = useState(getInitialDayNight());

  const toggleDayNight = () => {
    setDayNight(!dayNight);
  };

  function getInitialDayNight() {
    const savedDayNight = JSON.parse(localStorage.getItem("dayNight"));
    if('dayNight' in localStorage){
      return savedDayNight
    }
    return true
  }

  useEffect(() => {
      localStorage.setItem("dayNight", JSON.stringify(dayNight));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dayNight]);

  const value = {
    dayNight,
    toggleDayNight
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
