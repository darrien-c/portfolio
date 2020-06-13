// Gatsby supports TypeScript natively!
import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphq } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useEffect } from "react";

/* import Animations */
import Particles from 'react-particles-js';

//import icons
import {  BsBoxArrowInUpRight} from "react-icons/bs";
import { DiGithubBadge, DiGit , DiHtml5, DiSass } from 'react-icons/di';

//import images
import mtmHeader from '../images/mtm-header.png';

/* Codium Wireframe */
import homewireframe from '../images/codium-home-wireframe.png';

//import the Prism package
import Prism from "prismjs";



// The code we will be displaying
const code = `const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`

const PortfolioContent = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const data = useStaticQuery(graphql`
  query {
    headerSolo: file(relativePath: { eq: "header-template.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
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
<Particles className="particles"  params={{"retina_detect": true}}/>    
    <section className="project-intro-container">
    <div className="project-header">
          <h1>Portfolio</h1>
      {/* <Img fluid={data.headerSolo.childImageSharp.fluid} alt="Codium" /> </div>  */}
        {/* <Img fluid={data.headerImage.childImageSharp.fluid} alt="Codium" /> </div> */}
        <img src={mtmHeader} alt="Match the Meme"/>  
        <div className="cta-links">
            <a href="http://dchow.bcitwebdeveloper.ca/match-the-memes/" target="_blank" rel="noreferrer" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
            <a href="#" target="_blank" rel="noreferrer" className="box-2"><span><DiGithubBadge /></span></a>                         
          </div>
      </div>
    </section>

    <section className="project-description">  
            <div className="proj-scope">        
              <h2>Scope</h2>
                <p>This personal portfolio was designed and created to serve as a platform for sharing my work. I chose to build this project with Gatsby because I wanted to learn a React framework to generate my static website.</p>
        
              <div className="techstack">
              <h2>Technologies Used</h2>
              <ul >
                  <li>GatsbyJS</li>
                  <li>SaSS</li>
                  <li>Adobe XD</li>
              </ul>
              </div>     
            </div>
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
          <Link to="/match-the-memes" className="link-title">Match the Meme</Link>
        </div>
    </main>
  )
}

export default PortfolioContent
