import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";

/* Images */
import Img from 'gatsby-image'
import swiftImage from '../images/swift.png';
import comingSoon from '../images/coming-soon.jpg';

/* Icons */
import { DiGithubBadge /* , DiGit , DiHtml5, DiSass  */} from 'react-icons/di';
/* import {  BsBoxArrowInUpRight} from "react-icons/bs"; */
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";

/* Animations */
import Reveal from 'react-reveal/Reveal';
import HeadShake from 'react-reveal/HeadShake';
import Slide from 'react-reveal/Slide';
import Particles from 'react-particles-js';


/* About Section */
import About from '../components/about'


const Works = () => {
    const data = useStaticQuery(graphql`
    query {
      swiftFeatured: file(relativePath: { eq: "swift.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          
        }
      }
    }
  `)
    return (
     
        <section className="works-showcase" >  
         <Particles className="particles"  params={{"retina_detect": true}}/>               
            <div className="container">
                <div id="projects" className="section-01">
                    <div className="project-wrapper" >
                      <HeadShake>
                    <Reveal>
                      <h3 className="works-title"><span>01.</span> Projects I've Built</h3>
                    </Reveal></HeadShake>
                      {/* --- Capstone Card --- */}
                      <Reveal>
                      <div className="capstone-container">
                          <div className="capstone-thumbnail">
                            <Link to="/capstone" target="_blank"><img className="capstone-feature" src={comingSoon} /> 
                              <div className="capstone-overlay"></div></Link>
                          </div>

                          <div className="capstone-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <h5><a href="#" target="_blank">Capstone</a></h5>
                            </div>
                         
                               <p className="capstone-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

               {/*              <div className="capstone-tools">
                                  <div className="capstone-tech">
                                      <i><DiGit /></i>
                                      <i><DiHtml5 /></i>
                                      <i><DiSass /></i>
                                  </div>

                                  <div className="featured-links">
                                    <a href="https://github.com/darrien-c" target="_blank"><DiGithubBadge /></a>   
                                    <a href="#" target="_blank"><BsBoxArrowInUpRight /></a>                         
                                  </div> 
                              </div>     */}                        
                            </div>
                      </div>{/* ---- End of Capstone ---- */}
                    </Reveal>


                    {/* ---- Portfolio Card ---- */}
                    <Reveal >
                    <div className="portfolio-container">
                          <div className="port-thumbnail">
                          <Link to="/portfolio"><img className="port-feature" src={comingSoon} /> 
                              <div className="port-overlay"></div>
                          </Link>
                          </div>
                          <div className="port-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <h5><a href="#" target="_blank">Portfolio</a></h5>
                            </div>

                           
                              <p className="port-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                         {/*      <div className="port-tools">
                                <div className="port-tech">
                                    <i><DiGit /></i>
                                    <i><DiHtml5 /></i>
                                    <i><DiSass /></i>
                                </div>

                                <div className="featured-links">
                                  <a href="https://github.com/darrien-c" target="_blank"><DiGithubBadge /></a>   
                                  <a href="#"><BsBoxArrowInUpRight /></a>                         
                                </div>
                            </div> */}
                          </div>
                      </div> {/* ---- End of Portfolio ---- */}
                      </Reveal>


                    {/* ---- Swift Card ----- */}
                <Reveal>
                    <div className="swift-container">
                        <div className="project-thumbnail">
                            <Link to="/match-the-memes"><img className="swift-feature" src={swiftImage} />
                              <div className="swift-overlay"></div></Link>
                          </div>

                          <div className="swift-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <h5><a href="#" target="_blank">Match the Memes</a></h5>
                            </div>
                            
                               <p className="swift-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                               
                       {/*         <div className="swift-tools">
                                  <div className="swift-tech">
                                      <i><DiGit /></i>
                                      <i><DiHtml5 /></i>
                                      <i><DiSass /></i>
                                  </div>

                                  <div className="featured-links">
                                    <a href="https://github.com/darrien-c" target="_blank"><DiGithubBadge /></a>   
                                    <a href="#"><BsBoxArrowInUpRight /></a>                         
                                  </div> 
                            </div>     */}                        
                          </div>                     
                      </div> {/* ---- End of Swift ----- */}

                      {/*  About Component*/}
                      <About />
                      </Reveal>
                    </div>
               </div>            
            </div>        
           
          <Slide bottom>
            <div className="fixed-social">
              <ul class="social-media" >
                <li><a href="mailto:darrienchow_@hotmail.com"><AiOutlineMail /></a></li>
                <li><a href="https://github.com/darrien-c" target="_blank" rel="nofollow noopener noreferrer"><DiGithubBadge /></a></li>  
                <li><a href="https://www.linkedin.com/in/darrien-chow/" target="_blank" rel="nofollow noopener noreferrer"><FaLinkedinIn /></a></li>            
                
              </ul>
            </div>
            </Slide>
     {/*        
            <div className="fixed-contact"><Slide bottom><p>darrien@gmail.com </p></Slide>
            </div>   */}
            
        </section>

    )
}

export default Works