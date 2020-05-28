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
        <section className="works-showcase">
            <div className="container">
                <section id="projects" className="section-01">

                    <div className="project-wrapper">
                    <h3 className="works-title">  <span>01.</span>  Some Things I've Built</h3>

                      {/* --- Capstone Card --- */}
                      <div className="capstone-container">
                          <div className="capstone-thumbnail">
                        {/*     <Img className="swift-feature" fluid={data.swiftFeatured.childImageSharp.fluid} alt="Swift Project" />   */}
                             <a href="#"><img className="capstone-feature" src={comingSoon} /> 
                              <div className="capstone-overlay"></div></a>
                          </div>

                          <div className="capstone-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <h5><a href="#" target="_blank">Capstone</a></h5>
                            </div>
                         
                               <p className="capstone-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <div className="capstone-tools">
                                  <div className="capstone-tech">
                                      <i><DiGit /></i>
                                      <i><DiHtml5 /></i>
                                      <i><DiSass /></i>
                                  </div>

                                  <div className="featured-links">
                                    <a href="https://github.com/darrien-c" target="_blank"><DiGithubBadge /></a>   
                                    <a href="#" target="_blank"><BsBoxArrowInUpRight /></a>                         
                                  </div> 
                              </div>                            
                            </div>

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
                                <h5><a href="#" target="_blank">Portfolio</a></h5>
                            </div>

                           
                              <p className="port-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                              <div className="port-tools">
                                <div className="port-tech">
                                    <i><DiGit /></i>
                                    <i><DiHtml5 /></i>
                                    <i><DiSass /></i>
                                </div>

                                <div className="featured-links">
                                  <a href="https://github.com/darrien-c" target="_blank"><DiGithubBadge /></a>   
                                  <a href="#"><BsBoxArrowInUpRight /></a>                         
                                </div>
                            </div>
                          </div>
                      </div> {/* ---- End of Portfolio ---- */}

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
                                <h5><a href="#" target="_blank">Swift</a></h5>
                            </div>
                            
                               <p className="swift-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                               
                               <div className="swift-tools">
                                  <div className="swift-tech">
                                      <i><DiGit /></i>
                                      <i><DiHtml5 /></i>
                                      <i><DiSass /></i>
                                  </div>

                                  <div className="featured-links">
                                    <a href="https://github.com/darrien-c" target="_blank"><DiGithubBadge /></a>   
                                    <a href="#"><BsBoxArrowInUpRight /></a>                         
                                  </div> 
                            </div>                            
                          </div>                     
                      </div> {/* ---- End of Swift ----- */}
                    </div>
               </section>            
            </div>        

            <div className="fixed-social">
              <ul class="social-media">
                <li><a href="https://github.com/darrien-c" target="_blank"><DiGithubBadge /></a></li>  
                <li><a href="#"><FaLinkedinIn /></a></li>
              </ul>
            </div>
            <div className="fixed-contact">darrien@gmail.com</div>    
        </section>
    )
}

export default Works