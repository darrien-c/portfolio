// Gatsby supports TypeScript natively!
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import { useEffect } from "react";

/* Transitions */
import AniLink from "gatsby-plugin-transition-link/AniLink";

/* import Animations */
import Particles from 'react-particles-js';

//import icons
import {  BsBoxArrowInUpRight} from "react-icons/bs";
import { DiGithubBadge, DiGit , DiHtml5, DiSass } from 'react-icons/di';



//import the Prism package
import Prism from "prismjs";



// The code we will be displaying
const code = `
const data = useStaticQuery(graphql\`
query {
  headerImage: file(relativePath: { eq: "portfolio-header.png" }) {
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

const stepOne = `npm install -g gatsby-cli
`

const stepTwo = `gatsby new portfolio-site
`

const stepThree = `npm install --save node-sass gatsby-plugin-sass
`

const stepFour = `plugins: [\`gatsby-plugin-sass\`],
`

const PortfolioContent = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const data = useStaticQuery(graphql`
  query {
    headerImage: file(relativePath: { eq: "portfolio-header.png" }) {
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
    <section className="project-intro-container">
    <div className="project-header">
      
          <h1>Portfolio</h1>      
       
       <div className="main-image">
          <Img fluid={data.headerImage.childImageSharp.fluid} /> 
        </div>

        <div className="cta-links">
            <a href="http://devdarrien.com" target="_blank" rel="noreferrer" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
            <a href="https://github.com/darrien-c/portfolio" target="_blank" rel="noreferrer" className="box-2"><span><DiGithubBadge /></span></a>                         
          </div>
      </div>
    </section>

    <section className="project-description">  
            <div className="proj-scope">        
              <h2>Scope</h2>
                <p>This personal portfolio was designed and created to serve as a platform for sharing my work. I chose to build this project with Gatsby because I wanted to learn a React framework to generate my static website.</p>
        
              <div className="techstack">
              <h2>Technologies Used</h2>
              <ul>
                  <li>GatsbyJS</li>
                  <li>SaSS</li>
                  <li>Adobe XD</li>
                  <li>Adobe Photoshop</li>
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
       
        <div className="code-wrapper">  
        <p>First I installed GatsbyCli</p>        
              <div className="code-container">                
              <pre>
                  <code className="language-javascript">{stepOne}</code>
              </pre>
              </div>
          </div>
         
          <div className="code-wrapper"> 
          <p>Here I created my project name</p>         
              <div className="code-container">
              <pre>
                  <code className="language-javascript">{stepTwo}</code>
              </pre>
              </div>
          </div>

          <div className="code-wrapper"> 
          <p>Next I needed to install node-sass and gatsby-plugin-sass dependency</p>         
              <div className="code-container">
              <pre>
                  <code className="language-javascript">{stepThree}</code>
              </pre>
              </div>
          </div>

          <div className="code-wrapper"> 
          <p>To use sass and other gatsby plugins, I had to include the plugin into my gatsby-config.js file</p>         
              <div className="code-container">
              <pre>
                  <code className="language-javascript">{stepFour}</code>
              </pre>
              </div>
          </div>
           
          <div className="code-wrapper">
            <p>The following code snippet is the query to access images to utilize gatsby-image plugin. Then using the query to create a fluid image component. When I first implemented the query, the image was very low quality and had loss of colours, so to fix it, I needed to the write the query parameters quality.</p>
              <div className="code-container">
              <pre>
                  <code className="language-javascript">{code}</code>
              </pre>
              </div>
          </div>
        </section>

        <div className="prev-next-container">
          <div className="prev-next-subtitle">Next Project</div>
          <AniLink cover direction="left"  bg="#0e101bfc" to="/match-the-memes" className="link-title">Match the Meme</AniLink>
        </div>
    </main>
  )
}

export default PortfolioContent
