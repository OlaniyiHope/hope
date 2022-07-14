import React from 'react'
import './header.css'
import ME from "../../asset/kingg.png"
import CTA from './CTA'
import HeaderSocials from "./HeaderSocials"
import About from '../about/About'
import Experience from '../experience/Experience'
import Services from '../services/Service'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'


 const Header = () => {
   return(

  
    <div className='cast'>
 <div className="container header__container">
<h5>Hello</h5>
<h1>Hope Olaniyi</h1>
<h5 className="bye" >Front-End Developer</h5>
<h5 className="bye" ><a href="/" className="btn-primary"  style={{color: "#fff", padding: "6px", borderRadius: "6px"}}>Blog</a></h5>


<CTA />
<HeaderSocials />
<div className='me'>
<img src={ME} alt=""></img>
</div>
</div>

<a href='/' className='scroll__down'>Scroll Down</a>
<About />
<Experience />
<Services />
<Portfolio />
<Contact />
<Footer />
</div>

  
   
   )
   
}
export default Header;