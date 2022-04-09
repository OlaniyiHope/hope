import React from 'react'
import './header.css'
import ME from "../../asset/good.JPG"
import CTA from './CTA'
import HeaderSocials from "./HeaderSocials"
 const Header = () => {
   return(

  
    <header>
 <div className="container header__container">
<h5>Hello</h5>
<h1>Hope Olaniyi</h1>
<h5 className="text-light" >Front-End Developer</h5>
<CTA />
<HeaderSocials />
</div>
<div className='me'>
<img src={ME} alt=""></img>
</div>
<a href='#' className='scroll__down'>Scroll Down</a>
    </header>
   
   )
}
export default Header;