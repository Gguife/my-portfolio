import {FaGithub} from 'react-icons/fa'
import './Project.css'
import { Link } from 'react-router-dom'
import Netflix from '../../assets/netflix.png'
import Phonestore from '../../assets/phonestore.png'

export const Projects = () => {
  return (
    <section className='projects section' id='projects'>
      <h2 className='section__title'>Projects</h2>
      <span className='section__subtitle'>Ultimos Projetos</span>
      <div className="projects-container">
        <div className="project1">
          <img src={Netflix} alt="clone netflix" />
          <span>Clone Netflix</span>
          <div className="content-desc">
            <h3>O que eu utilizei?</h3>
            <p>
              - Nesse projeto utilizamos API do site TMDB onde fizemos a requisição dos dados. <br />
              - Requisições fetch a uma api utlizando useEffect. <br />
              - Utilizando o useState. <br />
              - Utilizando react-icos para icones. <br />
              - Completamente responsivo
            </p>
          </div>
          <div className="container-desc-lang">
            <div className='container-lang'>
              <div className='html'>HTML</div>
              <div className='css'>CSS</div>
              <div className='js'>JS</div>
              <div className='react'>REACT</div>
            </div>
            <a href="https://gguife-net-clone-jbgd.vercel.app/" target={'_blank'}>Clique Aqui!</a>
          </div>
        </div>
        <div className="project2">
          <img src={Phonestore} alt="phone store" />
          <span>Phone Store</span>
          <div className="content-desc">
          <h3>O que eu utilizei?</h3>
            <p>- Requisições fetch a uma api utlizando useEffect. <br />
              - React-router-dom para criação de rotas e navegação entre paginas.<br />
              - Usando useState para salvar dados.<br />
              - Utilizando local Storage para salvar e recuperar informações.<br />
              - Utilização da biblioteca de icons do React com react-icons.<br />
            </p>
          </div>
          <div className="container-desc-lang">
            <div className='container-lang'>
              <div className='html'>HTML</div>
              <div className='css'>CSS</div>
              <div className='js'>JS</div>
              <div className='react'>REACT</div>
            </div>
            <a href="https://celular-store.vercel.app/" target={'_blank'}>Clique Aqui!</a>
          </div>
        </div>
      </div>
      <div className="position-button">
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text"><Link to='/projetos'>Veja mais</Link></span>
        </button>
      </div>
      <div className="project-git">
        <a href="https://github.com/Gguife" target={'_blank'}> <FaGithub className='git-repo' /><br/>Clique aqui para acessar meu repositório!</a>
      </div>
    </section>
  )
}
