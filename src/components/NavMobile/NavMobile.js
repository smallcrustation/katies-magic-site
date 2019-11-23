import React, { useContext } from 'react'
import './NavMobile.css'
import { NavContext } from '../../contexts/NavContext'

const NavMobile = () => {
  const { expanded, toggleExpanded, scrollTo } = useContext(NavContext)

  return (
    <div className="NavMobile">
      <div className="menu-icon" onClick={toggleExpanded}>
        <div
          className={`menu-icon-top ${
            expanded ? 'menu-icon-top-expanded' : ''
          }`}
        ></div>
        <div
          className={`menu-icon-bottom ${
            expanded ? 'menu-icon-bottom-expanded' : ''
          }`}
        ></div>
      </div>
      <ul
        className={`NavMobile-ul-hidden ${
          expanded ? 'NavMobile-ul-visible' : ''
        }`}
      >
        {/* <li><a href="#About">About</a></li>
        <li><a href="#ProjectsList">Projects</a></li>
        <li><a href="#Contact">Contact</a></li> */}
        <li onClick={() => scrollTo('About')}>About</li>
        <li onClick={() => scrollTo('ProjectsList')}>Projects</li>
        <li onClick={() => scrollTo('Contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default NavMobile
