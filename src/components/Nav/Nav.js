import React, { useState, useEffect } from 'react'
import './Nav.css'
import NavMobile from '../NavMobile/NavMobile'
import NavDesktop from '../NavDesktop/NavDesktop'

// export default class Nav extends Component {
//   state = { mobile: true }

//   componentDidMount() {
//     this.handleWindowSizeChange()
//     window.addEventListener('resize', this.handleWindowSizeChange.bind(this))
//   }

//   handleWindowSizeChange() {
//     if (window.innerWidth < 600) {
//       this.setState({ mobile: true })
//     } else {
//       this.setState({ mobile: false })
//     }
//   }

//   render() {
//     console.log(this.props)
//     const { mobile } = this.state
//     return <nav className="Nav">{mobile ? <NavMobile /> : <NavDesktop />}</nav>
//   }
// }

const Nav = () => {
  const [mobile, setMobile] = useState(true)

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange.bind())
  }, [])

  const handleWindowSizeChange = () => {
    if (window.innerWidth < 600) {
      setMobile(true)
    } else {
      setMobile(false)
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
