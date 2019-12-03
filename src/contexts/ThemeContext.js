import React, {createContext, useState} from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [dayNight, setDayNight] = useState(true)

  const toggleDayNight = () => {
    setDayNight(!dayNight)
  }

  const value = {
    dayNight,
    toggleDayNight
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
