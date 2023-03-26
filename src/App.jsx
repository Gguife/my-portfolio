import './App.css'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './components/Home/Home'
import { Projects } from './components/projects/Projects'
import { Skills } from './components/skills/Skills'


function App() {

  return (
    <div>
      <Header />    
      <section>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </div>
  )
}

export default App
