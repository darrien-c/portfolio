// Gatsby supports TypeScript natively!
import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphq } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useEffect } from "react";

//import icons
import {  BsBoxArrowInUpRight} from "react-icons/bs";
import { DiGithubBadge, DiGit , DiHtml5, DiSass } from 'react-icons/di';

//import images
import swiftHeader from '../images/swift-header.png';
import swiftWireframes from '../images/swift-wireframes.png';
import swiftVideo from '../assets/swift-homepage.mp4'

//import the Prism package
import Prism from "prismjs";

// The code we will be displaying
const code = `const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`


const SwiftContent = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const data = useStaticQuery(graphql`
  query {
    swiftHeader: file(relativePath: { eq: "swift-header.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    headerImage: file(relativePath: { eq: "header-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }        
      }
    }
  }
`)

  return (
      <main>
        <section className="project-intro-container">
            <img src={swiftHeader} alt="Swift Multiscreen"/> 
            <cite>Template by AlwaysSunday</cite>
            <div className="cta-links">
                <a href="http://dchow.bcitwebdeveloper.ca/swift/index.html" target="_blank" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
                <a href="#" target="_blank" className="box-2"><span><DiGithubBadge /></span></a>                         
            </div> 
        </section>

        <section className="project-description">
            <h1>Swift</h1>
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
            <p>Codium is a fictional online coding school. The website is built with HTML, SaSS, WordPress, PHP, and version-controlled with Git. The project involved multiple meetings, discussions, wire-framing, development planning, actual development and design process, and site hosting.  </p>

            <h3>Role</h3>
            <p></p>

            <div className="team">
            <ul>
                <a href="#" target="_blank"><li>Denise Nguyen</li></a>
                <a href="#" target="_blank"><li>Tin Lau</li></a>
            </ul>
            </div>
        </section>

        <section className="dev-process">
        <img src={swiftWireframes} alt=""/> 
            <div className="case-study__video">
                <video autoplay="true" loop="true" muted="true" className="case-study__video">
                <source src={swiftVideo} type="video/mp4" />      
                </video>
            </div>
        </section>
        <div
            style={{
            display: "flex",
            alignItems: "center",
            flexFlow: "column nowrap",
            margin: "6px 10px",
            maxWidth: "800px",
            }}
        >

            <div className="code-container">
            <pre>
                <code className="language-javascript">{code}</code>
            </pre>
            </div>
        </div>
        <Link to="/portfolio">Portfolio Project</Link>
        <Link to="/capstone">Codium Project</Link>
    </main>
  )
}

export default SwiftContent
