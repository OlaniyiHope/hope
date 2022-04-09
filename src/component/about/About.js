import React from 'react'
import './about.css'
import ME from "../../asset/take.jpg"

const About = () => {
  return (
    <section id="about">
<h5>Get to Know</h5>
<h2>About Me</h2>
<div className="container about__container">
<div className="about__me">
<div className="about__me-image">
   <img src={ME} alt=""></img>
</div>
</div>
<div className="about__content">
   <div className="about__cards">
<article className="about__card">
  
<h5>Experience</h5>
<small>3+ Years Working</small>
</article>
   </div>
   <div className="about__cards">
<article className="about__card">

<h5>Clients</h5>
<small>Everyone</small>
</article>
   </div>
   <div className="about__cards">
<article className="about__card">

<h5>Projects</h5>
<small>10+ completed</small>
</article>
   </div>
   

  
</div>

</div>


    </section>
  )
}
export default About;