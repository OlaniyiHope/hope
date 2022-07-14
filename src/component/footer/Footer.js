import React from 'react'
import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () => {
  return (
   <footer>
     <a href="/">HOPPEE</a>
     <ul className="permalinks">
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Sevices</a></li>
       <li><a href="#portfolio">Porfolio</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>
     <div className="footer__socials">
<a href="http://facebook.com/HoppeeOlaniyi"><FaFacebookF /></a>
<a href="http://instagram.com/olaniyihoppee"><FiInstagram /></a>
<a href="http://twitter.com/olaniyihope8"><IoLogoTwitter /></a>
     </div>
     <div className="footer__copyright">
<small> HOPPEE. All rights reserved</small>
     </div>
   </footer>
  )
}
export default Footer; 