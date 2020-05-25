import React from "react"
import { useStaticQuery, graphq } from "gatsby"
import Img from 'gatsby-image'
import swiftImage from '../images/swift.png';
import comingSoon from '../images/coming-soon.jpg';
import { DiGithubBadge, DiGit , DiHtml5, DiSass } from 'react-icons/di';
import {  BsBoxArrowInUpRight} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

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
        <div className="works-showcase">
            <div className="container">
                <section id="projects" className="section-01">
                    <h3 className="works-title">  <span>01.</span>  Some Things I've Built</h3>

                    <div className="project-wrapper">


                      {/* ---- Swift Card ----- */}
                      <div className="swift-container">
                        <div className="project-thumbnail">
                        {/*     <Img className="swift-feature" fluid={data.swiftFeatured.childImageSharp.fluid} alt="Swift Project" />   */}
                              <img className="swift-feature" src={swiftImage} /> 
                              <div className="swift-overlay"></div>
                          </div>

                          <div className="swift-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <h5>Swift</h5>
                            </div>
                            <div className="swift-description">
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                               

                                <div className="swift-tech">
                                    <i><DiGit /></i>
                                    <i> <DiHtml5 /></i>
                                    <i><DiSass /></i>
                                </div>

                                <div className="featured-links">
                                  <a href="#"><DiGithubBadge /></a>   
                                  <a href="#"><BsBoxArrowInUpRight /></a>                         
                                </div> 
                            </div>

                            
                          </div>
                       {/* ---- End of Swift ----- */}
                      </div> 

                 {/* ---- Portfolio Card ---- */}
                 <div className="portfolio-container">
                          <div className="port-thumbnail">
                              <img className="port-feature" src={comingSoon} /> 
                              <div className="port-overlay"></div>
                          </div>
                          <div className="port-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <h5>Portfolio</h5>
                            </div>
                            <div className="port-description">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                              <div className="port-tech">
                                  <DiGit />
                                  <DiHtml5 />
                                  <DiSass />
                              </div>

                              <div className="featured-links">
                                <a href="#"><DiGithubBadge /></a>   
                                <a href="#"><BsBoxArrowInUpRight /></a>                         
                              </div>
                            </div>
                          </div>
                      </div> {/* ---- End of Portfolio ---- */}
                    </div>
               </section>            
            </div>        

            <div className="fixed-social">
              <ul class="social-media">
                <li><a href="#"><DiGithubBadge /></a></li>  
                <li><a href="#"><FaLinkedinIn /></a></li>
              </ul>
            </div>
            <div className="fixed-contact">darrien@gmail.com</div>    
        </div>
    )
}

export default Works