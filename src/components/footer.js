import { Link } from "gatsby";
import React from "react";

/* Import Icons */
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedinIn } from "react-icons/fa";
import { TiHeart } from "react-icons/ti";

const Footer = () => {

    return (
        <footer>
            <div className="footer-wrapper"> 
            <div className="contact-icons">
               <a href="https://github.com/darrien-c" target="_blank" rel="nofollow noopener noreferrer"><DiGithubBadge /></a>
               <a href="https://www.linkedin.com/in/darrien-chow/" target="_blank" rel="nofollow noopener noreferrer"><FaLinkedinIn /></a>
            </div>
             <p> Developed with <span><TiHeart /></span> by Darrien Chow </p>       
            </div>
        </footer>
    )
}


export default Footer
