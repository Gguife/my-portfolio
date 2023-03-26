import './Header.css'
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlinePhone} from 'react-icons/ai'
import { BiBrain } from 'react-icons/bi'
import { useState } from 'react'
import LogoImage from '../../assets/eucartoon.png'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <div>
       <header className="header">
        <nav className="nav container">
          <a href="index.html" className='nav-logo'>Gguife</a>

          <div className={showMenu ? 'nav-menu show-menu' : 'nav-menu'}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className='nav-link active-link'><AiOutlineHome className='nav-icon'/>Home</a>
              </li>

              <li className="nav-item">
                <a href="#about" className='nav-link'><AiOutlineUser className='nav-icon'/>About</a>
              </li>

              <li className="nav-item">
                <a href="#skills" className='nav-link'><BiBrain className='nav-icon'/>Skills</a>
              </li>

              <li className="nav-item">
                <a href="#projects" className='nav-link'><AiOutlineProject className='nav-icon'/>Projects</a>
              </li>

              <li className="nav-item">
                <a href="#contact" className='nav-link'><AiOutlinePhone className='nav-icon'/>Contact</a>
              </li>
              <li className='nav-item'>
                <a href="https://www.linkedin.com/in/guilherme-gomes-b09444254/" target="_blank" className='nav-link'><img src={LogoImage} alt=""  width={25}/></a>
              </li>
            </ul>
            <div className="nav-close" onClick={() => setShowMenu(!showMenu)}><AiOutlineClose className='nav-icon'/></div>
          </div>

          <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}><AiOutlineMenu /></div>

        </nav>
      </header> 
    </div>
  )
}