import React from 'react'
import './assets/css/Footer.css';

const Footer = () => {
  return (
    <footer id='footer-contato'>
      <h2>Contatos</h2>

      <span id='span-contatos'>
        <p>
          <img src="./assets/icons/mail-svgrepo-com.svg"/>
          <a href="mailto:animehills@blog.com">animehills@blog.com</a>
        </p>
        <p>
          <img src="./assets/icons/instagram-svgrepo-com.svg"/>
          <a href="">@animehills</a>
        </p>
        <p>
          <img src="./assets/icons/facebook-svgrepo-com.svg"/>
          <a href="">AnimeHills</a>
        </p>
      </span>

    </footer>
  )
}

export default Footer
