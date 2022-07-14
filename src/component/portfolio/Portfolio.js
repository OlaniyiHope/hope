import React from 'react'
import "./portfolio.css"
import LET from "../../asset/try.jpg"
import TWO from "../../asset/2.jpeg"
import TMM from "../../asset/tmm.png"
import CAT from "../../asset/cat.jpg"
import LOD from "../../asset/loder.jpg"
import TAKE from "../../asset/my4.png"
 const Portfolio = () => {
  return (
<section id="portfolio">
<h5 style={{color: "#fff"}}>My Recent Work</h5>
<h2>Portfolio</h2>
<div className="container portfolio__container">
     <article className="portfolio__item">
<div className="portfolio__item-image"> 
<img src={LET} className="myimg" alt=""></img>
     <h3>Real Estate Website </h3>
     <div className="portfolio__item-cta">
     <a href="http://21let.com" className="btn" style={{backgroundColor: "#fff"}}  >Site</a>
   
     </div>
 
</div>
     </article>
     <article className="portfolio__item">
<div className="portfolio__item-image"> 
<img src={TWO} className="myimg" alt=""></img>
     <h3>School Website </h3>
     <div className="portfolio__item-cta">
     <a href="http://masterpieceschools.com.ng" className="btn" style={{backgroundColor: "#fff"}}>Site</a>
    
     </div>
 
</div>
     </article>
     <article className="portfolio__item">
<div className="portfolio__item-image"> 
<img src={TMM} className="myimg" alt=""></img>
     <h3>Transport Website </h3>
     <div className="portfolio__item-cta">
     <a href="https://themiraclemotorsng.com" className="btn" style={{backgroundColor: "#fff"}} >Site</a>
     
     </div>
 
</div>
     </article>
     <article className="portfolio__item">
<div className="portfolio__item-image"> 
<img src={CAT} className="myimg" alt=""></img>
     <h3>CrowdFunding Platform</h3>
     <div className="portfolio__item-cta">
     <a href="http://youfundafrica.com" className="btn" style={{backgroundColor: "#fff"}}>Site</a>
   
     </div>
 
</div>
     </article>
     <article className="portfolio__item">
<div className="portfolio__item-image"> 
<img src={LOD} className="myimg" alt=""></img>
     <h3>Valuables for safekeeping site </h3>
     <div className="portfolio__item-cta">
     <a href="#" className="btn" target="_blank" style={{backgroundColor: "#fff"}} >Site</a>

     </div>
 
</div>
     </article>
     <article className="portfolio__item">
<div className="portfolio__item-image"> 
<img src={TAKE} className="myimg" alt=""></img>
     <h3>Investment Mobile App </h3>
     <div className="portfolio__item-cta">
 
     </div>
</div>
     </article>
</div>
</section>
   
  )
}
export default Portfolio;