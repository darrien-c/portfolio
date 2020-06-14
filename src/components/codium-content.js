// Gatsby supports TypeScript natively!
import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphq } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useEffect } from "react"

/* Codium Wireframe */
import homewireframe from '../images/codium-home-wireframe.png';

//import the Prism package
import Prism from "prismjs";

//import icons
import {  BsBoxArrowInUpRight} from "react-icons/bs";
import { DiGithubBadge, DiGit , DiHtml5, DiSass } from 'react-icons/di';

//import images
import mtmHeader from '../images/mtm-header.png';

/* import Animations */
import Particles from 'react-particles-js';


// The code we will be displaying
const code = `const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`

const CapstoneContent = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const data = useStaticQuery(graphql`
  query {
    headerImage: file(relativePath: { eq: "port-header.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    wireframeOne: file(relativePath: { eq: "port-wireframe-1.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    wireframeTwo: file(relativePath: { eq: "port-wireframe-2.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    colourPalette: file(relativePath: { eq: "port-colour-palette.png" }) {
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
      <Particles className="particles"  params={{"retina_detect": true}}/>    
          <section className="project-intro-container">
            <div className="project-header">

            <h1>Codium</h1>

            <div className="main-image">
              <Img fluid={data.headerImage.childImageSharp.fluid} /> 
            </div>
            
              <div className="cta-links">
                  <a href="http://dchow.bcitwebdeveloper.ca/match-the-memes/" target="_blank" rel="noreferrer" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
                  <a href="#" target="_blank" rel="noreferrer" className="box-2"><span><DiGithubBadge /></span></a>                         
              </div>
            </div>
          </section>

    <section className="project-description">
      <div className="proj-scope">  
        <h1>Codium</h1>
        <p>Codium is a fictional online coding school. The website is built with HTML, SaSS, WordPress, PHP, and version-controlled with Git. The project involved multiple meetings, discussions, wire-framing, development planning, actual development and design process, and site hosting.  </p>

        <div className="techstack">
          <h2>Technologies Used</h2>
          <ul>
            <li>Figma</li>
            <li>HTML</li>
            <li>SaSS</li>
            <li>WordPress</li>
            <li>PHP</li>
            <li>Git</li>
          </ul>
        </div>  
        <div className="role-section">   

          <h3>My Role</h3>
          <p>Working closely with in team of 5 to create a fully responsive and e ngaging instructors page. Building an ACF carousel that can retrieve users review posts.</p>
        </div>
          <div className="team">
            <ul>
              <a href="#" target="_blank"><li>Denise Nguyen</li></a>
              <a href="http://www.tiffanytang.ca/" target="_blank"><li>Tiffany Tang</li></a>
              <a href="#" target="_blank"><li>Tin Lau</li></a>
              <a href="#" target="_blank"><li>Wynonna Moo</li></a>
            </ul>
          </div>
        </div>
    </section>

    <section className="dev-process">
            {/*       
                <div className="case-study__video">
                    <video autoplay="true" loop="true" muted="true" className="case-study__video">
                    <source src={swiftVideo} type="video/mp4" />      
                    </video> 
                </div> */}
    </section>

      <section className="dev-process">
        <h2>Development</h2>
            <p>The following code snippet is the matching logic to check if first card and second card match</p>
          <div className="code-wrapper">
              <div className="code-container">
              <pre>
                  <code className="language-javascript">{code}</code>
              </pre>
              </div>
          </div>
        </section>

      <div className="prev-next-container">
        <div className="prev-next-subtitle">Next Project</div>
        <Link to="/portfolio" className="link-title">Portfolio</Link>
      </div>
    </main>
  )
}

export default CapstoneContent
