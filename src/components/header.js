import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>

      <div className="inner-header">
        <div className="logo">
            <Link to="/">DDLogo</Link>
          </div>

          <div className="navigation">
            <nav>
              <Link to="/Works"><span>01.</span>Works</Link>
              <Link to="/About"><span>02.</span>About</Link>
            </nav>
          </div>
      </div>

  </header>
)


export default Header
