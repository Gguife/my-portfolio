import './Footer.css'
import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Gguife</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className='footer-link'>About</a>
          </li>
          <li>
            <a href="#projects" className='footer-link'>Projects</a>
          </li>
          <li>
            <a href="#skills" className='footer-link'>Skills</a>
          </li>
        </ul>

        <div className="footer-social">
          <a href="https://www.instagram.com/gguife/" className="footer-social-link" target='_blank'> <AiFillInstagram /> </a>
          <a href="https://github.com/Gguife" className="footer-social-link" target='_blank'> <AiFillGithub/> </a>
          <a href="https://www.linkedin.com/in/guilherme-gomes-b09444254/" className="footer-social-link" target='_blank'> <AiFillLinkedin /> </a>
        </div>
        <div className='arroba'>
        <p>© 2023 Gguife</p>
      </div>
      </div>
    </footer>
  )
}