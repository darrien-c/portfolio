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
                                    <p>Hi! I'm Darrien Chow - a front-end web developer based in British Columbia. I'm a passionate and ambitious developer who strives to build intuiutive UIs, responsive, and easy to use websites.                                    
                                    <br />
                                    <br />
                                    I began my journey by graduating from BCIT's Technical Web Design program where I built skills and grew experiences in front-end programming. Discovering that I could be creative without a talent in classical arts and finding myself immersed in the code made me realize that this was quite enjoyable(usually). Luckily, I'm just a person who loves making things work! Currently, I am practicing my skills to create progressive web apps using JavaScript's framework ReactJS. 
                                    <br />
                                    <br />
                                    When I'm not working, I'm usually still found on my computer playing PC games and trying out new hobbies!
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