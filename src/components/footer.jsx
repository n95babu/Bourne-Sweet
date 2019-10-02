import React from 'react';
import fb from './fb.png'

const footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com/" target='blank'><img src={fb} className="footer-icon" alt="fb-icon" /></a>
      <a href="https://www.instgram.com/" target='blank'><img src={fb} className="footer-icon" alt="instgram-icon" /></a>
      <a href="https://www.pinterest.com" target='blank'><img src={fb} className="footer-icon" alt="Pinterest-icon" /></a>
    </footer>
  )
}

export default footer;