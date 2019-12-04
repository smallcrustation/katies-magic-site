import React, {useContext, useState} from 'react'
import Nav from '../Nav/Nav'
import './Header.css'
import { NavContext } from '../../contexts/NavContext'
import DayNight from '../DayNight/DayNight'

const Header = () => {
  const {expanded} = useContext(NavContext)
  const [mobile, setMobile] = useState(true) 

  const toggleMobile = (bool) => {
    setMobile(bool)
  }

  return (
      <header className={`Header fadeInDown-1 ${expanded&mobile?"Header-expanded":""}`}>
        <a className="Logo" href="/">
          <span className="neon-text-off">CO</span>
        </a>
        <DayNight mobile={mobile}/>
        <Nav toggleMobile={toggleMobile}/>
      </header>
  )
}

export default Header
