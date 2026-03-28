import { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

const Header = () => {

  const { user, logout } = useContext(UserContext)

  const handleLogout = () => {
    logout()
  }
  
  return (
    <header>
      <h1 id='header-logo'>AnimeHills</h1>

      <span id='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/busca?categoria=Notícia">Notícias</Link>
        <Link to="/busca?categoria=Resenha">Resenhas </Link>
        <Link>Contato</Link>
        {user && <>
          <Link to="/busca?categoria=Notícia">Adicionar postagem</Link>
          <span onClick={handleLogout} style={{cursor: 'pointer', color: '#fff', fontWeight: 600}}>Logout</span>
        </>}
      </span>
    </header>
  )
}

export default Header
