import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"
 const Services = () => {
  return (
<section id="services">

<h2>Services</h2>
<div className="container services__container">
<article className="service">
<div className="service__head">
<h3>UI/UX Design</h3>
</div>
<ul className="service__list">
     <li>
     <BiCheck className="service__list-icon"/>
     <p>Website UI</p>
     </li>
     <li>
     <BiCheck className="service__list-icon"/>
     <p>Mobile App UI </p>
     </li>
     <li>
     <BiCheck className="service__list-icon"/>
     <p>Figma Tutorials</p>
     </li>
     <li>
     <BiCheck className="service__list-icon"/>
     <p>Crypto UI</p>
     </li>
    
  
</ul>
</article>
<article className="service">
<div className="service__head">
<h3>Web Development</h3>
</div>
<ul className="service__list">
     <li>
     <BiCheck className="service__list-icon"/>
     <p>Web Design</p>
     </li>
     <li>
     <BiCheck className="service__list-icon"/>
     <p>Web Development</p>
     </li>
     <li>
     <BiCheck className="service__list-icon"/>
     <p>API's</p>
     </li>
     <li>
     <BiCheck className="service__list-icon"/>
     <p>SEO</p>
     </li>
     <li>
     <BiCheck className="service__list-icon"/>
     <p>SEO</p>
     </li>
     
</ul>
</article>
<article className="service">
<div className="service__head">
<h3>Mobile App Development</h3>
</div>
<ul className="service__list">
     <li>
     <BiCheck className="service__list-icon"/>
     <p>React Native CLI</p>
     </li>
     <li>
     <BiCheck className="service__list-icon"/>
     <p>Expo CLI</p>
     </li>
    
</ul>
</article>
</div>
</section>
   
  )
}
export default Services;