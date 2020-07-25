import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { useEffect } from "react";
import Img from 'gatsby-image';

/* Transitions */
import AniLink from "gatsby-plugin-transition-link/AniLink";

/* import Animations */
import Particles from 'react-particles-js';

//import icons
import {  BsBoxArrowInUpRight} from "react-icons/bs";
import { DiGithubBadge } from 'react-icons/di';


//import the Prism package
import Prism from "prismjs";

// The code we will be displaying
const code = `
const fetchForecast = async ( query ) => {    

    const forecast = \`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=\${query}&APPID=\${API_KEY}&units=metric\`; 

    // Get the response once a call is being made to forecast with the API   
    try {
        const { data } =  await axios.get(forecast, {        
                params: {
                    q: query,
                    APPID: API_KEY,
                }                   
            })  
            return data; 
        }  
        catch(error) {
            let responseData = '';
            if(error) {         
                responseData = "Oops! Unable to find city, please try again!"; 
                setError(responseData);                 
            } else if (error.request) {    
                responseData = "Oops! Unable to find city, please try again!"; 
                setError(responseData); 
            } else {           
                responseData = "Oops! Unable to find city, please try again!"; 
                setError(responseData);
            }
            return error;  
        };  
    }

`


const ReactWeatherContent = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const data = useStaticQuery(graphql`
  query {
    weatherHeader: file(relativePath: { eq: "weather-header.png" }) {
      childImageSharp {
        fluid(quality: 100) {
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
          <div className="project-header">

          <h1>React Weather App</h1>

          <div className="main-image">
            <Img fluid={data.weatherHeader.childImageSharp.fluid} /> 
           </div>

            <div className="cta-links">
                <a href="https://darrien-c.github.io/React-Weather-App/" target="_blank" rel="noreferrer nofollow noopener" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
                <a href="https://github.com/darrien-c/React-Weather-App" target="_blank" rel="noreferrer nofollow noopener" className="box-2"><span><DiGithubBadge /></span></a>                         
            </div>
            {/* <cite>Template by AlwaysSunday</cite> */}
          </div>
        </section>
        
        <section className="project-description">  
            <div className="proj-scope">        
              <h2>Scope</h2>
                <p>React Weather app is a responsive web app that uses OpenWeatherMap's API. This was the first project where I used axios. The reason why I used axios over fetch() was to narrow down the steps, and axios cuts the step of passing a request to a .json() method; returning only an object.</p>
        
              <div className="techstack">
              <h2>Technologies Used</h2>
              <ul >
                  <li>React</li>
                  <li>Sass</li>
                  <li>OpenWeatherMap API</li>
              </ul>
              </div>     
            </div>
        </section>


        <section className="dev-process">
        <h2>Development</h2>
            <p>In the following code snippet, I used the try and catch error handling for axios to fetch the OpenWeatherMap's API  error</p>
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
          <AniLink cover direction="left"  bg="#0e101bfc" to="/portfolio" className="link-title">Portfolio</AniLink>
      </div>
    </main>
  )
}

export default ReactWeatherContent
