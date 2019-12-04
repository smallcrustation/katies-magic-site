import React, { useState, useEffect, useContext } from 'react'
import './Nav.css'
import NavMobile from '../NavMobile/NavMobile'
import NavDesktop from '../NavDesktop/NavDesktop'
import {NavContext} from '../../contexts/NavContext'


const Nav = ({toggleMobile}) => {
  const [mobile, setMobile] = useState(true)
  const { expanded, toggleExpanded } = useContext(NavContext);

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange.bind())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleWindowSizeChange = () => {
    if (window.innerWidth < 705) {
      setMobile(true)
      toggleMobile(true)
      if(expanded){
        toggleExpanded()
      }
    } else {
      setMobile(false)
      toggleMobile(false)
      if(expanded){
        toggleExpanded()
      }
    }
  }

  return (
    <nav className="Nav">
      {mobile ? (
        <NavMobile />
      ) : (
        <NavDesktop />
      )}
    </nav>
  )
}

export default Nav
