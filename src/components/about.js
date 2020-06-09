import React from "react";
import { useStaticQuery, graphq } from "gatsby";
import aboutSVG from '../images/dark-code-editor-window.svg';
import htmlSVG from '../images/html5.svg';
import cssSVG from '../images/css3.svg';
import reactSVG from '../images/react.svg';
import sassSVG from '../images/sass.svg';
import phpSVG from '../images/php-logo.svg';
import jsSVG from '../images/javascript.svg';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import Particles from 'react-particles-js';

const About = () => {
    
    return (
        
        <Reveal>
            <section className="about-showcase" id="about" >
                <div className="container" >
                    <div className="about-wrapper">
                        <div className="about-content">
                            <h3 className="about-title"><span>02.</span> About</h3>
                            <Slide left>
                            <div className="about-desc">                            
                                <div>                   
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                    </p>
                                </div>
                            
                            </div>
                            <ul className="skills-arrow">
                                    <li>HTML</li>
                                    <li>S<span>(C)</span>SS</li>
                                    <li>JavaScript</li>
                                    <li>PHP</li>
                                    <li>SaSS</li>
                                </ul>
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
                            <div className="contact">
                                <a href="mailto:darrienchow_@hotmail.com">Contact</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default About