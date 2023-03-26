import './Skills.css'
import { Frontend } from './Frontend'
import { Backend } from './Backend'
import { Description } from './Description'

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className='section__title'>Skills</h2>
      <span className="section__subtitle">Minhas linguagens</span>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>

      <div className="container-description">
        <Description />
      </div>
    </section>
  )
}