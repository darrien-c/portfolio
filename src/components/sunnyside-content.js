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
    sunnysideHeader: file(relativePath: { eq: "sunnysafari-1920x1080.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    sunnysideWebMockups: file(relativePath: { eq: "sunnyagency-web-mockup-front.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    sunnysideDesktopPreview: file(relativePath: { eq: "sunnyside-desktop-preview.jpg" }) {
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

            <h1>SunnySide Agency</h1>

            <div className="main-image custom">
              <Img fluid={data.sunnysideHeader.childImageSharp.fluid} /> 
            </div>
            
              <div className="cta-links">
                  <a href="https://darrien-c.github.io/sunnyside-agency/" target="_blank" rel="noreferrer nofollow noopener" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
                                      
              </div>
            </div>
          </section>

    <section className="project-description custom">
      <div className="proj-scope">  
      <h2>Scope</h2>
        <p>☀️Sunnyside agency landing page solution to the Sunnyside agency landing page challenge on Frontend Mentor. Frontend Mentor is a dedicated hub for challenges to help improve coding skills by building realistic projects.</p>

        <div className="techstack">
          <h2>Technologies Used</h2>
          <ul>
            <li>JavaScript</li>
            <li>SASS</li>
            <li>HTML5</li>
          </ul>
        </div>  

        </div>
    </section>
    <section class="showcase-section">
        <div className="design-image dual-clay">      
            <Img fluid={data.sunnysideWebMockups.childImageSharp.fluid} /> 
        </div>
      </section>

      <section className="design-process">
        <h2>Design</h2>
        <Img fluid={data.sunnysideDesktopPreview.childImageSharp.fluid} /> 
      </section>

      <div className="prev-next-container">
        <div className="prev-next-subtitle">Next Project</div>
        <AniLink cover direction="left"  bg="#0e101bfc" to="/react-movie" className="link-title">Movie App</AniLink>
      </div>
    </main>
  )
}

export default SunnySideContent;
