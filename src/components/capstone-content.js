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
  <Layout>
     <SEO title="Codium" />
    <section className="project-intro-container">
      <div>
   <Img fluid={data.headerSolo.childImageSharp.fluid} alt="Codium" /> </div> 
    {/* <Img fluid={data.headerImage.childImageSharp.fluid} alt="Codium" /> </div> */}
      <p><cite>Template by AlwaysSunday</cite></p>
      <Link to="#">View Live</Link>
    </section>

    <section className="project-description">
        <h1>Codium</h1>
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
            <a href="http://www.tiffanytang.ca/" target="_blank"><li>Tiffany Tang</li></a>
            <a href="#" target="_blank"><li>Tin Lau</li></a>
            <a href="#" target="_blank"><li>Wynonna Moo</li></a>
          </ul>
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
    <Link to="/portfolio">View Portfolio Project</Link>
    
  </Layout>
  )
}

export default CapstoneContent
