import {GrMysql} from 'react-icons/gr'
import {FaHtml5, FaCss3Alt, FaReact, FaGithub} from 'react-icons/fa'
import {SiTypescript ,SiJavascript} from 'react-icons/si'
import { useState } from 'react'

export const Description = () => {
  const [htmlDescription, setHtmlDescription] = useState(false);
  const [cssDescription, setCssDescription] = useState(false);
  const [jsDescription, setJsDescription] = useState(false);
  const [tsDescription, setTsDescription] = useState(false);
  const [reactDescription, setReactDescription] = useState(false);
  const [githubDescription, setGithubDescription] = useState(false);
  const [mysqlDescription, setMysqlDescription] = useState(false);
  
  return (
    <div className='container-description'>
        <div className="container-icons-code">
          <div className="html icon-descripiton" onMouseOver={() => setHtmlDescription(true)} onMouseOut={() => setHtmlDescription(false)}>
            <FaHtml5 />
          </div>

          <div className="css icon-descripiton" onMouseOver={() => setCssDescription(true)} onMouseOut={() => setCssDescription(false)} >
            <FaCss3Alt/>
          </div>

          <div className="javascrpit icon-descripiton" onMouseOver={() => setJsDescription(true)} onMouseOut={() => setJsDescription(false)}>
            <SiJavascript />
          </div>

          <div className="typescript icon-descripiton" onMouseOver={() => setTsDescription(true)} onMouseOut={() => setTsDescription(false)}> 
            <SiTypescript />
          </div>

          <div className="react icon-descripiton" onMouseOver={() => setReactDescription(true)} onMouseOut={() => setReactDescription(false)}>
            <FaReact />
          </div>

          <div className="github icon-descripiton" onMouseOver={() => setGithubDescription(true)} onMouseOut={() => setGithubDescription(false)}>
            <FaGithub />
          </div>

          <div className="mysql icon-descripiton" onMouseOver={() => setMysqlDescription(true)} onMouseOut={() => setMysqlDescription(false)}>
            <GrMysql />
          </div>
        </div>
        <div className="container-spans">
          {htmlDescription && <span className='program-description' >HTML (Hypertext Markup Language) é uma linguagem de marcação utilizada para criar páginas web. </span>}
          {cssDescription && <span className='program-description'>CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada em conjunto com HTML para definir a aparência e a formatação de uma página web.</span>}  
          {jsDescription && <span className='program-description'>JavaScript (JS) é uma linguagem de programação utilizada para adicionar interatividade e dinamismo às páginas web. </span>}
          {tsDescription && <span className='program-description'>TypeScript é uma extensão de JavaScript que adiciona recursos de tipagem estática à linguagem, trazendo mais segurança e previsibilidade ao desenvolvimento de software.</span>}
          {reactDescription && <span className='program-description'>React é uma biblioteca de JavaScript utilizada para criar interfaces de usuário (UI) de alta performance e escaláveis. </span>}
          {githubDescription && <span className='program-description'>GitHub é uma plataforma de hospedagem de código-fonte baseada em nuvem, que permite o armazenamento, a colaboração e o controle de versão de projetos de software.</span>}
          {mysqlDescription && <span className='program-description'>MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto, utilizado para armazenar e gerenciar dados em aplicativos web.</span>}
        </div>
    </div>
  )
}

