import { Link } from "gatsby";
import { useStaticQuery, graphq } from "gatsby";
import React from "react";
import Logo  from '../images/d-logo.png';

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
        <div className="logo"  
                data-sal="slide-right"
                data-sal-duration ="500"
                data-sal-delay="200"
                data-sal-easing="ease-out-back">
       
            <Link to="/">  <img src={Logo} alt="logo"></img> 
            </Link>

          </div>

          <div className="navigation">
            <nav   
                data-sal="slide-left"
                data-sal-duration ="500"
                data-sal-delay="200"
                data-sal-easing="ease-out-back">
            <Link to="#projects"><span>01.</span>Works</Link>
             <Link to="#about"><span>02.</span>About</Link>
            </nav>
          </div>
      </div>

  </header>
  )
}


export default Header
