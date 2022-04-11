import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Logo  from '../images/d-logo.png';
import Slide from 'react-reveal/Slide';

/* Import Icons */
import { BsCodeSlash as Code } from "react-icons/bs";
import { FaUser as About } from "react-icons/fa";

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
        <div className="logo" >
          <Slide top>
              <Link to="/">  <img src={Logo} alt="logo"></img> 
              </Link>
          </Slide>
        </div> 

          <Slide top>
            <div className="navbar" >
              <nav className="nav-list">
                <ul>
                  <Link to="#projects"><li><span><Code /></span>Work</li></Link>
                  <Link  to="#about"  ><li ><span><About /></span>About</li></Link>
                </ul>
              </nav>
            </div>
          </Slide>
      </div>

  </header>
  )
}


export default Header
