import React, { useContext } from 'react'
import { NavContext } from '../../contexts/NavContext'
import './NavDesktop.css'

const NavDesktop = () => {
  const { expanded, toggleExpanded, scrollTo } = useContext(NavContext)

  return (
    <div className="NavDesktop">
      <div
        className={`menu-icon ${expanded ? 'NavDesktop-slide' : ''}`}
        onClick={toggleExpanded}
      >
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
        {/* <div className="verticalBar"></div> */}
      </div>
      <ul
        className={`NavDesktop-ul-hidden ${
          expanded ? 'NavDesktop-ul-visible' : ''
        }`}
      >
        <div className="verticalBar"></div>

        <li onClick={() => scrollTo('About')}>About</li>
        <li onClick={() => scrollTo('ProjectsList')}>Projects</li>
        <li onClick={() => scrollTo('Contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default NavDesktop
