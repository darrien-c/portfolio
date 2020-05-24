import React from "react"
import { useStaticQuery, graphq } from "gatsby"
import Img from 'gatsby-image'
import swiftImage from '../images/swift.png';

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
                        <div className="project-thumbnail">
                      {/*     <Img className="swift-feature" fluid={data.swiftFeatured.childImageSharp.fluid} alt="Swift Project" />   */}
                            <img className="swift-feature" src={swiftImage} /> 
                            <div className="overlay"></div>
                        </div>
                        
                        <div className="swift-info">
                          <div className="featured-title">
                              <h4>Featured Project</h4>
                              <h5>Swift</h5>
                          </div>
                          <div className="swift-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                    </div>
               </section>            
            </div>        

            <div className="fixed-contact">darrien@gmail.com</div>    
        </div>
    )
}

export default Works