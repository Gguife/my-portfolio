import React from 'react'
import {FaAward, FaBriefcase, FaBook} from 'react-icons/fa'

export const Info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <FaBriefcase className='about-icon' />
        <h3 className="about-title">Experiência</h3>
        <span className="about-subtitle">1 ano</span>
      </div>

      <div className="about-box">
        <FaAward className='about-icon' />
        <h3 className="about-title">Certificados</h3>
        <span className="about-subtitle">Todos em meu Cv</span>
      </div>

      <div className="about-box">
        <FaBook className='about-icon' />
        <h3 className="about-title">Estudos</h3>
        <span className="about-subtitle">software engineer</span>
      </div>
    </div>
  )
}