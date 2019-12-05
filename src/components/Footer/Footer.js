import React, {useContext} from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const Footer = () => {
  const {dayNight} = useContext(ThemeContext)

  return (
    <footer style={dayNight?null:{borderTopColor: "white"}} className="Footer container">
      <span>2019 Hello</span>
    </footer>
  )
}

export default Footer
