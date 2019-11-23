import React, { createContext, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()

export const NavContext = createContext()

const NavContextProvider = props => {
  const [expanded, setExpanded] = useState(false)
  const [sections, setSection] = useState({})

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const addSection = (navStr) => {
    setSection(prevState => ({
      ...prevState,
      [navStr]: document.getElementsByClassName(navStr)[0]
    }))
  }

  const scrollTo = className => {
    sections[className].scrollIntoView({behavior: "smooth"})
  }

  const value = {
    expanded,
    toggleExpanded,
    sections,
    addSection,
    scrollTo
  }

  return (
    <NavContext.Provider value={value}>{props.children}</NavContext.Provider>
  )
}

export default NavContextProvider
