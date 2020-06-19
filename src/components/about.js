import React from "react";
import { useStaticQuery, graphq } from "gatsby";

/* Import Icons */
import aboutSVG from '../images/dark-code-editor-window.svg';
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
                                    <p>Hi, my name is Darrien Chow - a front-end web developer based in British Columbia. I'm a passionate and ambitious developer who strives to build beautilful and responsive websites with clean code.                                    
                                    <br />
                                    <br />
                                    Thank you for taking the time to check out my website. I'm currently looking to join a team where I can delve into and soak up all I can about new technologies and am open to collaborations!
                                    <br />
                                    <br />
                                    Tech I've been working with:
                                    </p>                                    
                                </div>
                            
                            </div>
                            <ul className="skills-arrow">
                                    <li>HTML / CSS</li>
                                    <li>SaSS</li>
                                    <li>JavaScript</li>
                                    <li>PHP</li>
                                    <li>React</li>
                                    <li>MySQL</li>
                            </ul>     

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