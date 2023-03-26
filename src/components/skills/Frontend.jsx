import React from 'react'
import {FaHtml5, FaCss3Alt, FaReact, FaGithub} from 'react-icons/fa'
import {SiTypescript ,SiJavascript} from 'react-icons/si'
import {HiBadgeCheck} from 'react-icons/hi'

export const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Front-end developer</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
          <HiBadgeCheck className='check-icon'/>

          <div className='skills-name-icon'>
            <h3 className="skills-name">HTML</h3>
            <span className="skills-icon"><FaHtml5 /></span>
          </div>
          </div>

          <div className="skills-data">
          <HiBadgeCheck className='check-icon' />

          <div className='skills-name-icon'>
            <h3 className="skills-name">CSS</h3>
            <span className="skills-icon"><FaCss3Alt/></span>
          </div>
          </div>

          <div className="skills-data">
          <HiBadgeCheck className='check-icon'/>

          <div className='skills-name-icon'>
            <h3 className="skills-name">Github</h3>
            <span className="skills-icon"><FaGithub/></span>
          </div>
          </div>

          <div className="skills-data">
          <HiBadgeCheck className='check-icon'/>

          <div className='skills-name-icon'>
            <h3 className="skills-name">TypeScript</h3>
            <span className="skills-icon"><SiTypescript/></span>
          </div>
          </div>

          <div className="skills-data">
          <HiBadgeCheck className='check-icon'/>

          <div className='skills-name-icon'>
            <h3 className="skills-name">React</h3>
            <span className="skills-icon"><FaReact/></span>
          </div>
          </div>

          
          <div className="skills-data">
          <HiBadgeCheck className='check-icon'/>

          <div className='skills-name-icon'>
            <h3 className="skills-name">JavaScript</h3>
            <span className="skills-icon"><SiJavascript/></span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}