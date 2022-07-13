import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

 const HeaderSocials = () => {
  return (
    <div className='header__socials'>
<a href="https://linkedin.com/in/olaniyi-hope-7a2ab41a6" target="_blank"><BsLinkedin /></a>
<a href="https://github.com/OlaniyiHope" target="_blank"><FaGithub /></a>
<a href="https://instagram.com/olaniyihoppee" target="_blank"><FaInstagram /></a>

    </div>
  )
}
export default HeaderSocials;