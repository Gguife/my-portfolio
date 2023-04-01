import { About } from '../../components/about/About'
import { Contact } from '../../components/contact/Contact'
import { Home } from '../../components/Home/Home'
import { Projects } from '../../components/projects/Projects'
import { Skills } from '../../components/skills/Skills'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'

export function HomePage() {

  return (
    <div>
      <Header />
      <section>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </section>
      <Footer />
    </div>
  )
}
