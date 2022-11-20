import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Somewhere in the ogun state bushes, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Somewhere in the ogun state bushes, All Rights Reserved</p>
          <p>09059033199</p>
          <p>yhung10en@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
        <h3>The Pandemic!!!</h3>
      </div>
    </div>
  )
}

export default Footer