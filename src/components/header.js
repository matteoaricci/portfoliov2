import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className='container'>
     <div className='inner-header'>

      <div className='logo'>
        <Link to='/'>MATTEO RICCI</Link>
      </div>
      <div className='navigation'>
        <nav>
          <Link to='/currentwork'>Currently-Working-On</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>

     </div>
    </div>
  </header>
)

export default Header
