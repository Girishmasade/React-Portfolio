import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <wrapper>    
       <section className="contact-short">
        <div className="footer-contain">
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <Link to="/contact"><button type="button" class="btn btn-primary">Click Here</button></Link>
          </div>
      </section>

<footer>
  <div className="footer-data">
    <div className="footer-item">
      <h2>Girish Masade</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, enim.</p>
    </div>
  </div>

  {/* 2nd */}

  <div className="footer-about">
    <p>Subscribe to get updates</p>
    <form action="#">
      <input type="email" 
        required
        autoComplete="off"
        placeholder="Email"
      />
      <input type="submit" value="Subscribe" />
    </form>
  </div>

  {/* 3rd */}

  <div className="footer-social">
    <h3>Follow Me</h3>
    <div className="social-icons">
      <div className='icons-footer'>
        <Link><FaInstagram style={{color: "white"}}/></Link>
      </div>
      <div className='icons-footer'>
        <Link to="https://github.com/Girishmasade"><FaGithub style={{color: "white"}}/></Link>
      </div>
      <div className='icons-footer'>
        <Link to="https://www.facebook.com/girish.masade.9" target='_blank'><FaFacebook style={{color: "white"}}/></Link>
      </div>
      <div className='icons-footer'>
        <Link><FaLinkedin style={{color: "white"}}/></Link>
      </div>
    </div>
  </div>

    {/* 4th */}

    <div className="footer-contact">
      <h4>Email</h4>
      <h5>girishmasade22@gamil.com</h5>
    </div>

</footer>
<div className="footer-end">
          <div className="container-end">
            <p>
              @{new Date().getFullYear()} GirishMasade. All Rights Reserved
            </p>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
        </div>
      </wrapper>
  )
}

export default Footer
