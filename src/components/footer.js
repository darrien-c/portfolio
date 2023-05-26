import { Link } from "gatsby";
import React from "react";

/* Import Icons */
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { TiHeart } from "react-icons/ti";

const Footer = () => {

    return (
        <footer>
            <div className="footer-wrapper"> 
            <div className="contact-icons">
               <a href="https://github.com/darrien-c" target="_blank" rel="nofollow noopener noreferrer"><GoMarkGithub /></a>
               <a href="https://www.linkedin.com/in/darrien-chow/" target="_blank" rel="nofollow noopener noreferrer"><FaLinkedinIn /></a>
            </div>
             <p> Developed with <span><TiHeart /></span></p>       
            </div>
        </footer>
    )
}


export default Footer
