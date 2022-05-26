import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";


/* Images */
import Img from 'gatsby-image';


/* Icons */
import { GoMarkGithub } from "react-icons/go";
import { BsCodeSlash as Code } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

/* Animations */
import Reveal from 'react-reveal/Reveal';
import HeadShake from 'react-reveal/HeadShake';
import Slide from 'react-reveal/Slide';



/* /* Transitions */
import AniLink from "gatsby-plugin-transition-link/AniLink"; 


const Works = (props) => {

    const data = useStaticQuery(graphql`
    query {
      lbsImg: file(relativePath: { eq: "lbs-screen.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }          
        }
      }
      codiumImg: file(relativePath: { eq: "codium-card.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }          
        }
      }
      pokemonImg: file(relativePath: { eq: "Pokemon-Thumbnail.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }          
        }
      }
      movieAppImg: file(relativePath: { eq: "movieApp-card.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }          
        }
      }
      weatherImg: file(relativePath: { eq: "weather-app.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }          
        }
      }
      portfolioImg: file(relativePath: { eq: "portfolio-card.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }          
        }
      }
      mtmImg: file(relativePath: { eq: "mtm-card.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }          
        }
      }
    }
  `)
    return (
     
        <div className="works-showcase">           
            <div className="container">
                <div id="projects" className="section-01">
                    <div className="project-wrapper">
                      
                      <HeadShake>
                        <Reveal>
                          <h3 className="works-title"><span><Code /></span> Works </h3>
                        </Reveal>
                      </HeadShake>

                      {/* ==== LBS Card ==== */}
                      <Reveal>
                        <div className="project-container">
                          <div className="project-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc"  to="/laidback">
                              <Img className="project-feature" fluid={data.lbsImg.childImageSharp.fluid}  alt="Laid Back Snacks"/> 
                              <div className="project-overlay"></div>
                            </AniLink>
                          </div>

                          <div className="project-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <AniLink cover direction="down"  bg="#0e101bfc"  to="/laidback"><h5>Laid Back Snacks</h5></AniLink>
                            </div>
                         
                               <p className="project-description">Laid Back Snacks is an e-Commerce subscription service website built using WordPress CMS, WooCommerce, and GravityKit. </p>

                               <AniLink cover direction="down"  bg="#0e101bfc" to="/laidback" className="details-btn">View Details</AniLink>       
                            </div>
                      </div>
                    </Reveal>{/* ==== End of LBS ==== */}

                      {/* ==== Capstone Card ==== */}
                      <Reveal>
                        <div className="project-container">
                          <div className="project-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc"  to="/codium">
                              <Img className="project-feature" fluid={data.codiumImg.childImageSharp.fluid}  alt="darrien codium"/> 
                              <div className="project-overlay"></div>
                            </AniLink>
                          </div>

                          <div className="project-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <AniLink cover direction="down"  bg="#0e101bfc"  to="/codium"><h5>Codium</h5></AniLink>
                            </div>
                         
                               <p className="project-description">Codium is a fictious introductory coding e-Commerce website that allows users to purchase programming languages and learn at their own pace.</p>       

                               <AniLink cover direction="down"  bg="#0e101bfc" to="/codium" className="details-btn">View Details</AniLink>       
                            </div>
                      </div>
                    </Reveal>{/* ==== End of Capstone ==== */}

                       {/* ==== React Movie Card ==== */}
                    <Reveal>
                      <div className="project-container">
                            <div className="project-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc" to="/react-movie">
                                <Img className="project-feature" fluid={data.movieAppImg.childImageSharp.fluid} alt="darrien chow react movie app"/> 
                                <div className="project-overlay"></div>
                            </AniLink>
                            </div>

                            <div className="project-info">
                              <div className="featured-title">
                                  <h4>Featured Project</h4>
                                  <AniLink cover direction="down"  bg="#0e101bfc" to="/react-movie"><h5>Movie App</h5></AniLink>
                              </div>                

                                <p className="project-description">A dynamic movie website built using React and The Movie Database's API.</p>

                                <AniLink cover direction="down"  bg="#0e101bfc"  to="/react-movie" className="details-btn">View Details</AniLink>
                            </div>
                        </div> 
                      </Reveal>{/* ==== End of Movie Card ==== */}

                      {/* ==== Weather-app Card ==== */}
                      <Reveal>
                        <div className="project-container">
                          <div className="project-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc"  to="/react-weather-app">
                              <Img className="project-feature" fluid={data.weatherImg.childImageSharp.fluid}  alt="darrien weather app"/> 
                              <div className="project-overlay"></div>
                            </AniLink>
                          </div>

                          <div className="project-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <AniLink cover direction="down"  bg="#0e101bfc"  to="/react-weather-app"><h5>Weather App</h5></AniLink>
                            </div>
                         
                               <p className="project-description">A responsive web app to find the current weather and 5 day forecast of any city using OpenWeatherMap API.</p>       

                               <AniLink cover direction="down"  bg="#0e101bfc" to="/react-weather-app" className="details-btn">View Details</AniLink>       
                            </div>
                      </div>
                    </Reveal>{/* ==== End of Weather ==== */}

                {/* ==== Match the Memes Game Card ==== */}
                <Reveal>
                      <div className="project-container">
                            <div className="project-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc" to="/match-the-memes">
                             <Img className="project-feature" fluid={data.mtmImg.childImageSharp.fluid} alt="darrien match the memes game"/> 
                              <div className="project-overlay"></div>
                            </AniLink>
                          </div>

                          <div className="project-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <AniLink cover direction="down" bg="#0e101bfc" to="/match-the-memes"><h5>Match the Memes</h5></AniLink>
                            </div>
                            
                               <p className="project-description">A matching card game based on memes developed with JavaScript. </p>                                                         
                              <AniLink cover direction="down" bg="#0e101bfc" to="/match-the-memes" className="details-btn">View Details</AniLink>                                 
                      
                          </div>                     
                      </div> 

                    </Reveal>{/* ==== End of Match the Memes ==== */}

                    {/* ==== Portfolio Card ==== */}
                    <Reveal>
                      <div className="project-container">
                            <div className="project-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc" to="/portfolio">
                                <Img className="project-feature" fluid={data.portfolioImg.childImageSharp.fluid} alt="darrien portfolio"/> 
                                <div className="project-overlay"></div>
                            </AniLink>
                            </div>

                            <div className="project-info">
                              <div className="featured-title">
                                  <h4>Featured Project</h4>
                                  <AniLink cover direction="down"  bg="#0e101bfc" to="/portfolio"><h5>Portfolio</h5></AniLink>
                              </div>                

                                <p className="project-description">Personal portfolio site built with GatsbyJS and hosted on Netlify.</p>

                                <AniLink cover direction="down"  bg="#0e101bfc"Link to="/portfolio" className="details-btn">View Details</AniLink>
                            </div>
                        </div> 
                      </Reveal>{/* ==== End of Portfolio ==== */}


                    </div> {/* ==== End Project Wrapper ==== */}
               </div>  {/* ==== End Project Section ==== */}   
            </div> {/* ==== End Container ==== */}       
           
           {/* ==== Side Social Media ==== */}
          <Slide bottom>
            <div className="fixed-social">
              <ul class="social-media" >
                <li><a href="mailto:hello@devdarrien.com"><AiOutlineMail /></a></li>
                <li><a href="https://github.com/darrien-c" target="_blank" rel="nofollow noopener noreferrer"><GoMarkGithub /></a></li>  
                <li><a href="https://www.linkedin.com/in/darrien-chow/" target="_blank" rel="nofollow noopener noreferrer"><FaLinkedinIn /></a></li>            
                
              </ul>
            </div>
            </Slide>            
        </div>

    )
}

export default Works