import React from 'react'
import CV from '../../asset/RESUME.pdf'
 const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className="btn" style={{backgroundColor: "#fff"}}>Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}
export default CTA