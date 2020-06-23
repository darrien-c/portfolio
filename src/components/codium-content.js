// Gatsby supports TypeScript natively!
import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphq } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useEffect } from "react"

/* Transitions */
import AniLink from "gatsby-plugin-transition-link/AniLink";

//import the Prism package
import Prism from "prismjs";

//import icons
import {  BsBoxArrowInUpRight} from "react-icons/bs";
import { DiGithubBadge, DiGit , DiHtml5, DiSass } from 'react-icons/di';


/* import Animations */
import Particles from 'react-particles-js';


// The code we will be displaying
const code = `
$coursesIds = get_field('instructors_courses', false, false);

$coursesQuery = new WP_Query(array(
  'post_type'      	=> 'product',
  'posts_per_page'	=> -1,
  'post__in'			=> $coursesIds,
  'post_status'		=> 'any',
  'orderby'        	=> 'post__in',
));

if($coursesQuery -> have_posts() ) {	
  echo '<section class="instructor-courses">';								
  echo '<h2>Courses Taught</h2>';
  while( $coursesQuery -> have_posts() ) {
    $coursesQuery -> the_post();		
    echo '<div>';
    echo '<h3>'. get_the_title() . '</h3>';								
    the_post_thumbnail('thumbnail');
    echo '</div>';						
  } 	
  echo '</section>';
  wp_reset_postdata();	
}
`

const CapstoneContent = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  const data = useStaticQuery(graphql`
  query {
    codiumHeader: file(relativePath: { eq: "codium-header.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    colourPalette: file(relativePath: { eq: "codium-colour-button.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    codiumMockupOne: file(relativePath: { eq: "codium-about-courses-mockup.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    codiumMockupTwo: file(relativePath: { eq: "codium-instructors-mockup.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }        
      }
    }
    codiumMockupThree: file(relativePath: { eq: "codium-home-singlec.png" }) {
      childImageSharp {
        fluid(quality: 100) {
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

            <h1>Codium</h1>

            <div className="main-image">
              <Img fluid={data.codiumHeader.childImageSharp.fluid} /> 
            </div>
            
              <div className="cta-links">
                  <a href="https://codium.bcitwebdeveloper.ca/" target="_blank" rel="noreferrer nofollow noopener" className="box-1"><span><BsBoxArrowInUpRight /></span></a>      
                                      
              </div>
            </div>
          </section>

    <section className="project-description">
      <div className="proj-scope">  
        <p>Codium is a ficticious e-Commerce online coding school built with WordPress, PHP, and version-controlled with Git in a collaborative team environment. The goal was to present a site with an intuitive way to navigate content, sell online courses, and provide lessons in various coding languages that are succinct for users; such as HTML, PHP, Java, and many more. Each course offers lessons via videos, quizzes, and additional materials for users to download. In order to provide this service, my team and I implemented the Woocomerce and Sensei plugin. </p>

        <div className="techstack">
          <h2>Technologies Used</h2>
          <ul>
            <li>Figma</li>
            <li>HTML</li>
            <li>SaSS</li>
            <li>WordPress</li>
            <li>PHP</li>
            <li>Git</li>
          </ul>
        </div>  
        <div className="role-section">   

          <h2>My Role</h2>
          <ul>
            <li>Contributed in creating wireframes</li>
            <li>Created Advanced Custom Fields for Instructors</li>
            <li>Connected Instructors per Woocommerce Products</li>
            <li>Developed and styled instructors page</li>
          </ul>

        </div>
          <div className="team">
            <h2>The Team</h2>
            <ul>
              <a href="https://denisenguyen.ca/" target="_blank"><li>Denise Nguyen</li></a>
              <a href="http://www.tiffanytang.ca/" target="_blank"><li>Tiffany Tang</li></a>
              <a href="#" target="_blank"><li>Tin Lau</li></a>
              <a href="#" target="_blank"><li>Wynonna Moo</li></a>
            </ul>
          </div>
        </div>
    </section>

    <section className="design-process">
      <h2>Design</h2>
      <h3>The design goal was to make the website visually professional and the feeling of trustworthy</h3>
      <div className="design-image">
          <Img fluid={data.colourPalette.childImageSharp.fluid} />         
      </div>
      <div className="design-image">
           <Img fluid={data.codiumMockupThree.childImageSharp.fluid} />         
      </div>
      <div className="design-image">
          <Img fluid={data.codiumMockupOne.childImageSharp.fluid} />         
      </div>
      <div className="design-image">
           <Img fluid={data.codiumMockupTwo.childImageSharp.fluid} />         
      </div>      
    </section>

{/*     Video code for codium once completed
<section className="dev-process">
                   
                <div className="case-study__video">
                    <video autoplay="true" loop="true" muted="true" className="case-study__video">
                    <source src={swiftVideo} type="video/mp4" />      
                    </video> 
                </div> 
    </section> */}

      <section className="dev-process">
        <h2>Development</h2>
            <p>The following code snippet exhibits the use of WP query in order to retrieve the relationship ACF between instructor and Woocomerce products. </p>
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

export default CapstoneContent
