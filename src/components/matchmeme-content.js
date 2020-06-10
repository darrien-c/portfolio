import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphq } from "gatsby";
import { useEffect } from "react";

/* import Animations */
import Particles from 'react-particles-js';

//import icons
import {  BsBoxArrowInUpRight} from "react-icons/bs";
import { DiGithubBadge, DiGit , DiHtml5, DiSass } from 'react-icons/di';

//import images
import mtmHeader from '../images/mtm-header.png';


//import the Prism package
import Prism from "prismjs";

// The code we will be displaying
const code = `let correct = 0;
totalMatched = [];


function checkMatch(){
    if(firstChoice.dataset.image === secondChoice.dataset.image) {
        correct++    
        totalMatched.push(correct);
        total.innerHTML = correct;
        if(totalMatched.length == 6){           
            victory();
        };
        disableCards();
        
    } else {   
        unflip();
    }
}
`


const MatchMemesContent = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const data = useStaticQuery(graphql`
  query {
    mtmHeader: file(relativePath: { eq: "mtm-header.png" }) {
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
        <Particles className="particles"  params={{"retina_detect": true}}/>    
        <section className="project-intro-container">
          <div className="project-header">
          <h1>Match the Memes</h1>
         {/*  <Img fluid={data.mtmHeader.childImageSharp.fluid} /> */}
            <img src={mtmHeader} alt="Match the Meme"/>  
            <div className="cta-links">
                <a href="http://dchow.bcitwebdeveloper.ca/match-the-memes/" target="_blank" rel="noreferrer" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
                <a href="#" target="_blank" rel="noreferrer" className="box-2"><span><DiGithubBadge /></span></a>                         
            </div>
            {/* <cite>Template by AlwaysSunday</cite> */}
          </div>
        </section>
        
        <section className="project-description">  
            <div className="proj-scope">        
              <h2>Scope</h2>
                <p>Match the Memes is meme themed interactive desktop matching game developed with the basic front-end technologies.</p>
        
              <div className="techstack">
              <h2>Technologies Used</h2>
              <ul >
                  <li>HTML</li>
                  <li>SaSS</li>
                  <li>JavaScript</li>
                  <li>Git</li>
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
        <Link to="/portfolio">Portfolio Project</Link>
        <Link to="/capstone">Codium Project</Link>
    </main>
  )
}

export default MatchMemesContent
