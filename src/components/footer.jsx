import React from 'react';
import fb from '../assets /fb.png'
import pin from '../assets /pin.png'
import insta from '../assets /insta.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="menu-footer-container"></div>
        <a href="https://www.facebook.com/" target='blank'><img src={fb} className="footer-icon" alt="fb-icon" /></a>
        <a href="https://www.instgram.com/" target='blank'><img src={insta} className="footer-icon" alt="instgram-icon" /></a>
        <a href="https://www.pinterest.com" target='blank'><img src={pin} className="footer-icon" alt="Pinterest-icon" /></a>
        <li>© 2019 Bourne</li>
      </footer>

    </>
  )
}

export default Footer;