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
import { DiGithubBadge, DiGit , DiHtml5, DiSass } from 'react-icons/di';


//import the Prism package
import Prism from "prismjs";

// The code we will be displaying
const code = `
//Set movie paramaters
const movieId = props.match.params.movieId

//Set State
const [movie, setMovie] = useState([]);


useEffect(() => {
    const movieId = props.match.params.movieId;

    // fetch the movie API
    const fetchMovie = async () => {
        const response = await fetch(\`$\\{API_URL}movie/$\\{movieId}?api_key=$\\{API_KEY}\`);
        const data = await response.json();
        setMovie(data);   
        }
        fetchMovie();
    }, [movie]); 
`


const ReactMovieContent = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const data = useStaticQuery(graphql`
  query {
    movieHeader: file(relativePath: { eq: "react-movieApp-header.png" }) {
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

          <h1>React Movie Database</h1>

          <div className="main-image">
            <Img fluid={data.movieHeader.childImageSharp.fluid} /> 
           </div>

            <div className="cta-links">
                <a href="https://darrien-c.github.io/movie-app" target="_blank" rel="noreferrer nofollow noopener" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
                <a href="https://github.com/darrien-c/movie-app" target="_blank" rel="noreferrer nofollow noopener" className="box-2"><span><DiGithubBadge /></span></a>                         
            </div>
            {/* <cite>Template by AlwaysSunday</cite> */}
          </div>
        </section>
        
        <section className="project-description">  
            <div className="proj-scope">        
              <h2>Scope</h2>
                <p>React Movie Database is a web app that uses TMDB's API. It's functionality consists of allowing users to sort movies by type and create a favourites list. The goal was to create a React app that utilizes a REST API to display movies through filters and favourite each movie with local storage. </p>
        
              <div className="techstack">
              <h2>Technologies Used</h2>
              <ul >
                  <li>React</li>
                  <li>Sass</li>
                  <li>TMDB API</li>
              </ul>
              </div>     
            </div>
        </section>


        <section className="dev-process">
        <h2>Development</h2>
            <p>In the following code snippet, I used React Effect Hook to fetch the movie's API</p>
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
          <AniLink cover direction="left"  bg="#0e101bfc" to="/react-weather-app" className="link-title">React Weather App</AniLink>
      </div>
    </main>
  )
}

export default ReactMovieContent
