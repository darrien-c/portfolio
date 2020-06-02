import { Link } from "gatsby"
import React from "react"


const Header = () => {

  return (
  <header>
      <div className="inner-header">
        <div className="logo">
            <Link to="/">DDLogo</Link>
          </div>

          <div className="navigation">
            <nav>
            <Link to="#projects"><span>01.</span>Works</Link>
             {/* <a href="#about" onClick={() => scrollTo('#about')}><span>02.</span>About</a> */}
             <Link to="#about"><span>02.</span>About</Link>
            </nav>
          </div>
      </div>

  </header>
  )
}


export default Header
