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
import wireframeOne from '../images/port-wireframe-1.png';

/* Codium Wireframe */
import homewireframe from '../images/codium-home-wireframe.png';

//import the Prism package
import Prism from "prismjs";



// The code we will be displaying
const code = `
const data = useStaticQuery(graphql\`
query {
  headerImage: file(relativePath: { eq: "port-header.png" }) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }        
    }
  }
}

\`);

<Img fluid={data.headerImage.childImageSharp.fluid} /> 

`

const PortfolioContent = () => {
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
          <h1>Portfolio</h1>      
       
       <div className="main-image">
          <Img fluid={data.headerImage.childImageSharp.fluid} /> 
        </div>

        {/* <img src={mtmHeader} alt="Match the Meme"/>   */}
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

    <section className="design-process">
      <h2>Design</h2>
      <div className="design-image">
          <Img fluid={data.colourPalette.childImageSharp.fluid} />         
      </div>
      <div className="design-image">
          <Img fluid={data.wireframeOne.childImageSharp.fluid} />          
      </div>
      <div className="design-image">
          <Img fluid={data.wireframeTwo.childImageSharp.fluid} />         
      </div>
    </section>


    <section className="dev-process">        
        <h2>Development</h2>
            <p>The following code snippet is the query to access images to utilize gatsby-image plugin. Then using the query to create a fluid image component.</p>
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
