import React from "react"
import { useStaticQuery, graphq } from "gatsby"
import Img from 'gatsby-image'
import swiftImage from '../images/swift.png';
import comingSoon from '../images/coming-soon.jpg';
import { DiGithubBadge, DiGit , DiHtml5, DiSass } from 'react-icons/di';
import {  BsBoxArrowInUpRight} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import sal from 'sal.js';
import { Link } from "gatsby";


const Works = () => {
  sal({
    threshold: 1,
    once: true,
  });
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
        <section className="works-showcase"  >
            <div className="container">
                <div id="projects" className="section-01">
                    <div className="project-wrapper" >
                    <h3 className="works-title" 
                          data-sal="fade"
                          data-sal-duration ="500"
                          data-sal-delay="300"
                          data-sal-easing="ease-out-back"><span>01.</span>  Some Things I've Built</h3>

                      {/* --- Capstone Card --- */}
                      <div className="capstone-container" 
                          data-sal="slide-up"
                          data-sal-duration ="500"
                          data-sal-delay="300"
                          data-sal-easing="ease-out-back">
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

                    {/* ---- Portfolio Card ---- */}
                    <div className="portfolio-container"   
                          data-sal="slide-up"
                          data-sal-duration ="500"
                          data-sal-delay="200"
                          data-sal-easing="ease-out-back">
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

                    {/* ---- Swift Card ----- */}
                    <div className="swift-container"  
                          data-sal="slide-up"
                          data-sal-duration ="500"
                          data-sal-delay="200"
                          data-sal-easing="ease-out-back">
                        <div className="project-thumbnail">
                        {/*     <Img className="swift-feature" fluid={data.swiftFeatured.childImageSharp.fluid} alt="Swift Project" />   */}
                            <Link to="/swift"><img className="swift-feature" src={swiftImage} />
                              <div className="swift-overlay"></div></Link>
                          </div>

                          <div className="swift-info">
                            <div className="featured-title">
                                <h4>Featured Project</h4>
                                <h5><a href="#" target="_blank">Swift</a></h5>
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
                    </div>
               </div>            
            </div>        

            <div className="fixed-social"  
                data-sal="slide-up"
                data-sal-duration ="500"
                data-sal-delay="300"
                data-sal-easing="ease-out-back">
              <ul class="social-media" >
                <li><a href="https://github.com/darrien-c" target="_blank"><DiGithubBadge /></a></li>  
                <li><a href="#"><FaLinkedinIn /></a></li>
              </ul>
            </div>
            
            <div className="fixed-contact"  
                data-sal="slide-up"
                data-sal-duration ="900"
                data-sal-delay="300"
                data-sal-easing="ease-out-back">darrien@gmail.com</div>    
        </section>
    )
}

export default Works