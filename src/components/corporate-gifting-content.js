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

import wireframeImage from '../images/cg-admin-wireframe.png';
import CorporatePortalUserFlow from '../images/corporate-customer-flow.png';
import CustomerUserPurchaseFlow from '../images/customer-flow.png';


const CorporateGiftingContent = () => {
  
  const data = useStaticQuery(graphql`
  query {
    ComponentWireframeHeader: file(relativePath: { eq: "cg-admin-wireframe.png" }) {
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

            <h1>Corporate Gifting Portal</h1>

            <div className="main-image wireframes">
              <img src={wireframeImage} alt="Admin Corporate Gift Portal" title="Admin Corporate Gift Portal"/>
            </div>
            
            </div>
          </section>

    <section className="project-description custom">
      <div className="proj-scope">  
        <h2>Brief</h2>
            <p>Corporate gifting is when companies have a need to send snack boxes to a large number of recipients, employees, and clients. The Corporate gifting project automates the workflow to allow recipients claim their box. Companies will also have access to their own portal display a dashboard of all the necessary information. </p>

            <div className="techstack">
            <h2>Technologies Used</h2>
                <ul>
                    <li>Figma</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </div>

            <div>
                <h2>Wireframes - Corporate Portal</h2>
                <p>The ideal automated workflow for a corporate user would signing in, and which they will land on their personalized dashboard that will display all their orders and details attached to each purchase.</p>
            </div>

        </div>
    </section>

    <section class="showcase-section wireframes">
        <div className="design-image wireframes-presentation">      
            <img src={CorporatePortalUserFlow} alt="Corporate Gifting Customer Portal" title="Corporate Gifting Customer Portal"/>
        </div>
    </section>
    
      <section className="design-process wireframes">
        <h2>Wireframe - Corporate Order Flow</h2>
        <p>Simply the customer will land on a specific landing page that will guide them to selecting their desired size and pricing, following they will either upload a list of their clients or manually input to their desire. Upon submission, they will be shown details to enhance their order, such as a personalized gift message and their company; a calendar where they will select a date to determine when emails will be sent out to the lucky clients.</p>
      </section>

      <section class="showcase-section wireframes">
        <div className="design-image wireframes-presentation">      
            <img src={CustomerUserPurchaseFlow} alt="Corporate Gifting Customer Portal" title="Corporate Gifting Customer Portal"/>
        </div>
    </section>

      <div className="prev-next-container">
        <div className="prev-next-subtitle">Next Project</div>
        <AniLink cover direction="left"  bg="#0e101bfc" to="/sunnysideagency" className="link-title">SunnySide</AniLink>
      </div>
    </main>
  )
}

export default CorporateGiftingContent;
