import './ContentProject.css'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

//Images
import Clima from '../../assets/climaJS.png'
import Discord from '../../assets/discord.jpg'
import ControleFinanceiro from '../../assets/controleFinanceiro.png'
import VendasPizza from '../../assets/pizzaStore.png'
import PortfolioSass from '../../assets/portSass.png'
import JogoMemoria from '../../assets/jogodamemoria.png'

export const ContentProject = () => {
  return (
    <div>
      
      <div className="back-link">
        <Link to='/'><BiArrowBack/>Voltar</Link>
      </div>
      <div className='geral-content'>
        <h1>Meus Projetos</h1>
        <div className="container-projects">
          <div className="project-1">
            <img src={Clima} alt="Clima da sua cidade"/>
            <span>Clima</span>
            <div className="container-desc-lang">
              <div className='container-lang'>
                <div className='html'>HTML</div>
                <div className='css'>CSS</div>
                <div className='js'>JS</div>
              </div>
              <a href="https://gguife.github.io/Clima-JS/" target={'_blank'}>Clique Aqui!</a>
            </div>
          </div>
          <div className="project-2">
            <img src={Discord} alt="Bot Discord" />
            <span>Bot Discord</span>
            <div className="container-desc-lang">
              <div className='container-lang'>
                <div className='js'>JS</div>
              </div>
              <a href="https://github.com/Gguife/bot-discord" target={'_blank'}>Clique Aqui!</a>
            </div>
          </div>
          <div className="project-3">
            <img src={ControleFinanceiro} alt="controle financeiro"/>
            <span>Controle Financeiro</span>
            <div className="container-desc-lang">
              <div className='container-lang'>
                <div className='html'>HTML</div>
                <div className='css'>CSS</div>
                <div className='js'>JS</div>
                <div className='react'>REACT</div>
                <div className='type'>TS</div>
              </div>
              <a href="https://controle-financeiro-ten-kappa.vercel.app/" target={'_blank'}>Clique Aqui!</a>
            </div>
          </div>
          <div className="project-4">
            <img src={VendasPizza} alt="Vendas de pizza" />
            <span>Vendas de Pizza</span>
            <div className="container-desc-lang">
              <div className='container-lang'>
                <div className='html'>HTML</div>
                <div className='css'>CSS</div>
                <div className='js'>JS</div>
              </div>
              <a href="https://gguife.github.io/Vendas-pizza/" target={'_blank'}>Clique Aqui!</a>
            </div>
          </div>
          <div className="project-5">
            <img src={PortfolioSass} alt="Portifolio com sass" />
            <span>Portfolio com Sass</span>
            <div className="container-desc-lang">
              <div className='container-lang'>
                <div className='html'>HTML</div>
                <div className='css'>CSS</div>
                <div className='js'>JS</div>
                <div className='react'>SASS</div>
              </div>
              <a href="https://github.com/Gguife/meu-portfolio" target={'_blank'}>Clique Aqui!</a>
            </div>
          </div>
          <div className="project-6">
            <img src={JogoMemoria} alt="Jogo da Memória" />
            <span>Jogo da Memória</span>
            <div className="container-desc-lang">
              <div className='container-lang'>
                <div className='html'>HTML</div>
                <div className='css'>CSS</div>
                <div className='js'>JS</div>
                <div className='react'>REACT</div>
              </div>
              <a href="https://github.com/Gguife/Jogo-da-Memoria" target={'_blank'}>Clique Aqui!</a>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1680384323">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}
