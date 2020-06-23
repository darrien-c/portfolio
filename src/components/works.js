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
import Particles from 'react-particles-js'; 


/* /* Transitions */
import AniLink from "gatsby-plugin-transition-link/AniLink"; 

/* About Section */
import About from '../components/about'


const Works = () => {

    const data = useStaticQuery(graphql`
    query {
      codiumImg: file(relativePath: { eq: "codium-card.png" }) {
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
     
        <main className="works-showcase">           
            <div className="container">
                <div id="projects" className="section-01">
                    <div className="project-wrapper">
                      
                      <HeadShake>
                        <Reveal>
                          <h3 className="works-title"><span><Code /></span> Works </h3>
                        </Reveal>
                      </HeadShake>

                       {/* ==== React Movie Card ==== */}
                    <Reveal>
                      <div className="movieApp-container">
                            <div className="movieApp-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc" to="/react-movie">
                                <Img className="movieApp-feature" fluid={data.movieAppImg.childImageSharp.fluid} alt="darrien chow react movie app"/> 
                                <div className="movieApp-overlay"></div>
                            </AniLink>
                            </div>

                            <div className="movieApp-info">
                              <div className="featured-title">
                                  <h4>Featured Project</h4>
                                  <AniLink cover direction="down"  bg="#0e101bfc" to="/react-movie"><h5>React Movie App</h5></AniLink>
                              </div>                

                                <p className="movieApp-description">A dynamic movie website built using React and The Movie Database's API.</p>

                                <AniLink cover direction="down"  bg="#0e101bfc"  to="/react-movie" className="details-btn">View Details</AniLink>
                            </div>
                        </div> 
                      </Reveal>{/* ==== End of Portfolio ==== */}

                      {/* ==== Capstone Card ==== */}
                      <Reveal>
                        <div className="capstone-container">
                          <div className="capstone-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc"  to="/codium">
                              <Img className="capstone-feature" fluid={data.codiumImg.childImageSharp.fluid}  alt="darrien codium"/> 
                              <div className="capstone-overlay"></div>
                            </AniLink>
                          </div>

                          <div className="capstone-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <AniLink cover direction="down"  bg="#0e101bfc"  to="/codium"><h5>Codium</h5></AniLink>
                            </div>
                         
                               <p className="capstone-description">Codium is a fictious introductory coding e-Commerce website that allows users to purchase programming languages and learn at their own pace.</p>       

                               <AniLink cover direction="down"  bg="#0e101bfc" to="/codium" className="details-btn">View Details</AniLink>       
                            </div>
                      </div>
                    </Reveal>{/* ==== End of Capstone ==== */}


                    {/* ==== Portfolio Card ==== */}
                    <Reveal>
                      <div className="portfolio-container">
                            <div className="port-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc" to="/portfolio">
                                <Img className="port-feature" fluid={data.portfolioImg.childImageSharp.fluid} alt="darrien portfolio"/> 
                                <div className="port-overlay"></div>
                            </AniLink>
                            </div>

                            <div className="port-info">
                              <div className="featured-title">
                                  <h4>Featured Project</h4>
                                  <AniLink cover direction="down"  bg="#0e101bfc" to="/portfolio"><h5>Portfolio</h5></AniLink>
                              </div>                

                                <p className="port-description">Personal portfolio site built with GatsbyJS and hosted on Netlify.</p>

                                <AniLink cover direction="down"  bg="#0e101bfc"Link to="/portfolio" className="details-btn">View Details</AniLink>
                            </div>
                        </div> 
                      </Reveal>{/* ==== End of Portfolio ==== */}


                {/* ==== Swift Card ==== */}
                <Reveal>
                    <div className="swift-container">
                        <div className="project-thumbnail">
                            <AniLink cover direction="down"  bg="#0e101bfc" to="/match-the-memes">
                             <Img className="swift-feature" fluid={data.mtmImg.childImageSharp.fluid} alt="darrien match the memes"/> 
                              <div className="swift-overlay"></div>
                            </AniLink>
                          </div>

                          <div className="swift-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <AniLink cover direction="down" bg="#0e101bfc" to="/match-the-memes"><h5>Match the Memes</h5></AniLink>
                            </div>
                            
                               <p className="swift-description">A matching card game based on memes developed with JavaScript. </p>                                                         
                              <AniLink cover direction="down" bg="#0e101bfc" to="/match-the-memes" className="details-btn">View Details</AniLink>                                 
                      
                          </div>                     
                      </div> {/* ==== End of Swift ==== */}

                      {/*  ==== About Component ====*/}
                      <About />

                      </Reveal>
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
        </main>

    )
}

export default Works