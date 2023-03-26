import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


export const Social = () => {
  return (
    <div className="home-social">
      <a href="https://www.instagram.com/gguife/" className="home-social-icon" target='_blank'> <AiFillInstagram /> </a>
      <a href="https://github.com/Gguife" className="home-social-icon" target='_blank'> <AiFillGithub/> </a>
      <a href="https://www.linkedin.com/in/guilherme-gomes-b09444254/" className="home-social-icon" target='_blank'> <AiFillLinkedin /> </a>
    </div>    
  )
}