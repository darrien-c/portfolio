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



const LaidBackContent = () => {
  
  const data = useStaticQuery(graphql`
  query {
    laidbackHeader: file(relativePath: { eq: "laidbacksnacks-mockup-2.png" }) {
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

    lbsSafariScreen01: file(relativePath: { eq: "lbs-gift-safari.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }

    lbsSafariScreen02: file(relativePath: { eq: "lbs-snackshop-safari.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }

    lbsDesktopMday: file(relativePath: { eq: "lbs-mothersday-desktop.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }

    lbsMobileMday: file(relativePath: { eq: "lbs-mothersday-mobile.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    lbsMobileDual: file(relativePath: { eq: "lbs-getsnacks-mobile-mockups.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    lbsMultiDevice: file(relativePath: { eq: "lbs-multi.png" }) {
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

    <section className="project-description custom">
      <div className="proj-scope">  
      <h2>Scope</h2>
        <p>Rebranding from Naked Snacks to Laid Back Snacks required a fresh homepage along with the entire website's subscription user interface and interaction transaction flow. Creating a fully responsive and engaging home page based on designs produced by WillCreative.</p>

        <div className="techstack">
          <h2>Technologies Used</h2>
          <ul>
            <li>WordPress</li>
            <li>WooCommerce</li>
            <li>PHP</li>
            <li>jQuery</li>
            <li>CSS</li>
          </ul>
        </div>  

        </div>
    </section>
    <section class="showcase-section">
        <div className="design-image dual-clay">      
            <Img fluid={data.lbsMultiDevice.childImageSharp.fluid} /> 
        </div>
      </section>

    <section className="design-process">
      <h2>Development & Design</h2>
      <p>Using WooCommerce to build the data-driven interface with functionality to: add, remove, and increment/decrement items; shopping cart indicators; quick view for additional info. Ensure that functionality works across desktop and mobile.</p>
      
      <div className="design-container custom">
        <div className="design-image duo-device">      
          <Img fluid={data.lbsMobileDual.childImageSharp.fluid} /> 
        </div>

       {/*    <div className="design-image safari-screen-01">
            <Img fluid={data.lbsSafariScreen01.childImageSharp.fluid} /> 
          </div>
          <div className="design-image safari-screen-02">
            <Img fluid={data.lbsSafariScreen02.childImageSharp.fluid} /> 
          </div>
        <div className="design-image screen-03">
          <Img fluid={data.lbsDesktopMday.childImageSharp.fluid} /> 
        </div>
        <div className="design-image screen-04">            
            <Img fluid={data.lbsMobileMday.childImageSharp.fluid} /> 
        </div>
        <div className="design-image screen-05">
          <Img fluid={data.lbsDesktopMockup.childImageSharp.fluid} /> 
        </div>
        <div className="design-image screen-06">
          <Img fluid={data.lbsMobileMockup.childImageSharp.fluid} />             
        </div> */}

      </div>
    </section>

    

      <div className="prev-next-container">
        <div className="prev-next-subtitle">Next Project</div>
        <AniLink cover direction="left"  bg="#0e101bfc" to="/react-movie" className="link-title">Movie App</AniLink>
      </div>
    </main>
  )
}

export default LaidBackContent;
