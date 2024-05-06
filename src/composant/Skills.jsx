import React from 'react'
import { useState } from 'react';
import { Frontend, Backend, Databases, CMS, skills } from '../assets/skillsItem.jsx'
function Skills() {
const [selectsection, setSelectedSection] = useState('experience');
const uniqueCategories = Array.from(new Set(skills.map((item) => item.categorie)));

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
            <p>I am a seasoned full-stack developer with a broad range of skills and knowledge in frontend and backend development. My ability to work with a variety of technologies enables me to develop end-to-end solutions that satisfy the ever-changing needs of the contemporary digital landscape. Below is a summary of my key competencies:</p>
        </div>
        
        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="side2">
                  <nav className='nav'>
                    <div onClick={()=>setSelectedSection('experience')} className={selectsection ==='experience'?'active':''}>Experience</div>
                    <div onClick={()=>setSelectedSection('skills')} className={selectsection ==='skills'?'active':''}>Skills</div>
                    <div onClick={()=>setSelectedSection('OtherSkills')} className={selectsection ==='OtherSkills'?'active':''}>Other skills</div>
                  </nav>
                  {selectsection ==='skills'?(<div className="skills">
                    <ul>
                      <h3>Frontend Development -</h3>
                        {Frontend.map((item)=>(<li key={item.name}>{item.icon}</li>))}
                    </ul>
                    <ul>
                      <h3>Database Management - </h3>
                        {Databases.map((item,index)=>(<li key={index}>{item.name}</li>))}
                    </ul>
                    <ul>
                    <h3>Backend Development - </h3>
                      {Backend.map((item)=>(<li key={item.name}>{item.icon}</li>))}
                    </ul>
                    <ul>
                      <h3>CMS - </h3>
                        {CMS.map((item,index)=>(<li key={index}>{item.name}</li>))}
                    </ul>
              </div>):null}
            
                {selectsection ==='experience'?
                <div className='experience'>
                  <section id="resume" className="resume">
                        <div className="col-lg-12">
                            <h3 className="resume-title">Expérience Professionnelle</h3>
                            <div className="resume-item">
                                <h4>Stage PFE</h4>
                                  <h5>01-03-2024 - 01-04-2024</h5>
                                    <p><em>Centre Germany Lnaguage Scool Fès, Atlas, Fès</em></p>
                                      <p>
                                      Analysis, design and development of a teaching center website to publish the center's services and allow students to easily access the courses given by the teachers. Tools used: UML, MySQL, Laravel, Bootstrap, js.
                                      </p>
                            </div>
                        </div>
                    <div className="col-lg-12" >
                      <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                                <h4>Full stack Developer</h4>
                                  <h5>2022 - 2024</h5>
                                    <p><em>Centre de formation et d'aide à l'insertion des jeunes, Atlas, Fès</em></p>
                                      <p>
                                        As a FullStack developer with experience, I played a key role in the design, development, and deployment of comprehensive web solutions. My responsibilities encompassed the entire development process, from designing the user interface to database management and performance optimization.
                                      </p>
                              </div>
                        <div className="resume-item">
                          <h4>Bachelor SVT</h4>
                            <h5>2022</h5>
                              <p><em>Al Ahd Aljadid, Taounate</em></p>
                                <p>
                                  Détenteur d'un baccalauréat scientifique spécialisé en SVT du Lycée Al Ahd Al Jadid, j'ai obtenu une note de 12. Passionné par les Sciences de la Vie et de la Terre, cette formation a renforcé ma base académique et ma volonté de contribuer à des domaines scientifiques. Prêt à poursuivre mes études avec détermination et engagement.</p>
                        </div>
                    </div>
                  </section>
            </div>
            :null}
              {selectsection === 'OtherSkills' ? (
                <div className="SkillsContainer">
                  {uniqueCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="CategoryContainer ">
                    <h5 className="CategoryTitle">{category}</h5>
                    <div className="CategoryItems">
                      {skills
                        .filter((item) => item.categorie === category)
                        .map((skill, skillIndex) => (
                          <div key={skillIndex} className="SkillCard">
                            <p className="SkillName">{skill.name}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
              ) : null}

      </div>
    </div>
      </div>
      </div>
    </section>
  )
}

export default Skills