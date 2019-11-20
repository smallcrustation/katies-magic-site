import React, { createContext, useState } from 'react'

export const NavContext = createContext()

const NavContextProvider = props => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const value = { expanded, toggleExpanded: toggleExpanded }

  return (
    <NavContext.Provider value={value}>{props.children}</NavContext.Provider>
  )
}

export default NavContextProvider
