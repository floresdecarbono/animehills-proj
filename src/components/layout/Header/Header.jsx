import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <header>
      <h1 id='header-logo'>AnimeHills</h1>

      <span id='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/busca?categoria=Notícia">Notícias</Link>
        <Link to="/busca?categoria=Resenha">Resenhas </Link>
        <a href="#footer-contato">Contato</a>
      </span>
    </header>
  )
}

export default Header
