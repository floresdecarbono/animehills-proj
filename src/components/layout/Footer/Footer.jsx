import './Footer.css';
import instagram from '../../../assets/icons/instagram-svgrepo-com.svg'
import facebook from '../../../assets/icons/facebook-svgrepo-com.svg'
import email from '../../../assets/icons/mail-svgrepo-com.svg'

const Footer = () => {
  return (
    <footer id='footer-contato'>
      <h2>Contatos</h2>

      <div className="contatos">
        <div className='contato-item'>
          <img src={email}/>
          <a href="mailto:animehills@blog.com">animehills@blog.com</a>
        </div>
        <div className='contato-item'>
          <img src={instagram} />
          <a href="">@animehills</a>
        </div>
        <div className='contato-item'>
          <img src={facebook} />
          <a href="">AnimeHills</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
