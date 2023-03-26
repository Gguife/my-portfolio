import React from 'react'
import {HiBadgeCheck} from 'react-icons/hi'
import {GrMysql} from 'react-icons/gr'

export const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Back-end developer</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <HiBadgeCheck className='check-icon' />
          
            <div className='skills-name-icon'>
              <h3 className="skills-name">MySQL</h3>
              <span className='skills-icon'><GrMysql/></span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}