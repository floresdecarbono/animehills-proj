import React from 'react'
import './assets/css/Header.css';

const Header = () => {
  
  return (
    <header>
      <h1 id='header-logo'>AnimeHills</h1>

      <span id='nav-links'>
        <a href="">Home</a>
        <a href="">Notícias</a>
        <a href="">Resenhas </a>
        <a href="">Contato</a>
      </span>
    </header>
  )
}

export default Header
