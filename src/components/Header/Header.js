import React, {useContext} from 'react'
import Nav from '../Nav/Nav'
import './Header.css'
import { NavContext } from '../../contexts/NavContext'

const Header = () => {
  const {expanded} = useContext(NavContext)

  return (
    <div className="Header" >
      <header className={`fadeInDown-1 ${expanded?"Header-expanded":""}`}>
        <a className="Logo" href="/">
          CO
        </a>
        {/* <div className="test"></div> */}
        <Nav />
      </header>
    </div>
  )
}

export default Header
