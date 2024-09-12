import React from "react";
import { useStaticQuery, graphq } from "gatsby";

/* Import Icons */
import htmlSVG from '../images/html5.svg';
import cssSVG from '../images/css3.svg';
import reactSVG from '../images/react.svg';
import sassSVG from '../images/sass.svg';
import phpSVG from '../images/php-logo.svg';
import jsSVG from '../images/javascript.svg';

import { FaUser as AboutMe } from "react-icons/fa";

/* Import Animations */
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';

const About = () => {

    return (
        
        <Reveal>
            <section className="about-showcase" id="about" >
                <div className="container" >
                    <div className="about-wrapper">
                        <div className="about-content">
                            <h3 className="about-title"><span><AboutMe /></span> About</h3>
                            <Slide left>
                            <div className="about-desc">                            
                                <div>                   
                                    <p>Hello! I'm a front-end developer specializing in the creation of user-friendly, responsive web applications. My primary focus is on enhancing user experience through intuitive design and seamless performance.</p>
                                    <p>Tech I've been working with:</p>
                                    <ul className="skills-arrow">
                                        <li>HTML / CSS</li>
                                        <li>SaSS</li>
                                        <li>JavaScript</li>
                                        <li>PHP</li>
                                        <li>React</li>
                                        <li>MySQL</li>
                                </ul>             
                                </div>                            
                            </div>  

                            <a href="mailto:hello@devdarrien.com" rel="nofollow noopener noreferrer" className="contact">Email me</a>
                            
                             </Slide>
                            <Slide right>
                                <div className="about-box">
                                    <div className="about-cube">
                                        <img src={htmlSVG} />
                                        <img src={cssSVG} />
                                        <img src={reactSVG} />
                                        <img src={sassSVG} />
                                        <img src={phpSVG} />
                                        <img src={jsSVG} />
                                    </div>                                   
                                </div>                               
                            </Slide>                            
                        </div> 
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default About