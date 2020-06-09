import { Link } from "gatsby";
import { useStaticQuery, graphq } from "gatsby";
import React from "react";
import Logo  from '../images/d-logo.png';
import Slide from 'react-reveal/Slide';


const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    logoImg: file(relativePath: { eq: "d-favicon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
        
      }
    }
  }
`)

  return (
  <header>
      <div className="inner-header">
        <div className="logo">
          <Slide top>
              <Link to="/">  <img src={Logo} alt="logo"></img> 
              </Link>
          </Slide>
        </div>

          <Slide top>
            <div className="navigation">
              <nav>          
              <Link to="#projects"><span>01.</span>Works</Link>
              <Link to="#about"><span>02.</span>About</Link>             
              </nav>
            </div>
          </Slide>
      </div>

  </header>
  )
}


export default Header
