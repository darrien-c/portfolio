// Gatsby supports TypeScript natively!
import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphq } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useEffect } from "react"

/* Transitions */
import AniLink from "gatsby-plugin-transition-link/AniLink";

//import the Prism package
import Prism from "prismjs";

//import icons
import {  BsBoxArrowInUpRight} from "react-icons/bs";



const SunnySideContent = () => {
  
  const data = useStaticQuery(graphql`
  query {
    laidbackHeader: file(relativePath: { eq: "laidbacksnacks-mockup.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    
    lbsDesktopMockup: file(relativePath: { eq: "laidback-desktop-mockup.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }

    lbsMobileMockup: file(relativePath: { eq: "laidback-mobile-mockup.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
  }
`)


  return (
    <main>
          <section className="project-intro-container">
            <div className="project-header">

            <h1>Laid Back Snacks</h1>

            <div className="main-image">
              <Img fluid={data.laidbackHeader.childImageSharp.fluid} /> 
            </div>
            
              <div className="cta-links">
                  <a href="https://laidbacksnacks.com/" target="_blank" rel="noreferrer nofollow noopener" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
                                      
              </div>
            </div>
          </section>

    <section className="project-description">
      <div className="proj-scope">  
      <h2>Scope</h2>
        <p>Rebranding from Naked Snacks to Laid Back Snacks required a fresh homepage along with the entire website. The process of changing the corporate organisation. Creating a fully responsive and engaging home page based on designs produced by WillCreative.</p>

        <div className="techstack">
          <h2>Technologies Used</h2>
          <ul>
            <li>WordPress</li>
            <li>PHP</li>
            <li>jQuery</li>
            <li>CSS</li>
          </ul>
        </div>  

        <div className="role-section">
          <h2>Prototype</h2>
          <ul>
            <li><a href="https://projects.invisionapp.com/share/KWZ8NZ8YZA7#/screens/436107801" target="_blank" rel="noreferrer nofollow noopener" >View Desktop</a></li>
            <li><a href="https://projects.invisionapp.com/share/PGZBRU9KHBS#/screens/436807177_Home_Mobile" target="_blank" rel="noreferrer nofollow noopener" >View Mobile</a></li>
          </ul>
        </div>


        </div>
    </section>

    <section className="design-process">
      <h2>Design</h2>
      <div className="design-container">
        <div className="design-image">
          <Img fluid={data.lbsDesktopMockup.childImageSharp.fluid} /> 
        </div>
        <div className="design-image">
          <Img fluid={data.lbsMobileMockup.childImageSharp.fluid} /> 
        </div>
      </div>
    </section>

    

      <div className="prev-next-container">
        <div className="prev-next-subtitle">Next Project</div>
        <AniLink cover direction="left"  bg="#0e101bfc" to="/react-movie" className="link-title">Movie App</AniLink>
      </div>
    </main>
  )
}

export default SunnySideContent;
