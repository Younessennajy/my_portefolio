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
                <div onClick={() => setSelectedSection('experience')} className={selectsection === 'experience' ? 'active' : ''}>Experience</div>
                <div onClick={() => setSelectedSection('skills')} className={selectsection === 'skills' ? 'active' : ''}>Skills</div>
                <div onClick={() => setSelectedSection('OtherSkills')} className={selectsection === 'OtherSkills' ? 'active' : ''}>Other Skills</div>
              </nav>

              {selectsection === 'skills' ? (
                <div className="skills">
                  <ul>
                    <h3>Frontend Development -</h3>
                    {Frontend.map((item) => (<li key={item.name}>{item.icon}</li>))}
                  </ul>
                  <ul>
                    <h3>Database Management - </h3>
                    {Databases.map((item, index) => (<li key={index}>{item.name}</li>))}
                  </ul>
                  <ul>
                    <h3>Backend Development - </h3>
                    {Backend.map((item) => (<li key={item.name}>{item.icon}</li>))}
                  </ul>
                </div>
              ) : null}

              {selectsection === 'experience' ? (
                <div className='experience'>
                  <section id="resume" className="resume">
                    <div className="col-lg-12">
                      <h3 className="resume-title">Professional Experience</h3>
                      {/* <div className="resume-item">
                        <h4></h4>
                        <h5>01-10-2024 </h5>
                        <p><em>moenn technologies, Casablanca</em></p>
                      </div> */}
                      <div className="resume-item">
                        <h4>Pre-employment Internship</h4>
                        <h5>01-07-2024 - 01-10-2024</h5>
                        <p><em>moenn technologies, Casablanca</em></p>
                        - Analysis, design and development of a Project application development of an application for managing on-call pharmacies, with the following technologies: Angular, Symfony, Tailwind, Firestore. <br />
                      </div>
                      <div className="resume-item">
                        <h4>End of Studies Internship</h4>
                        <h5>01-03-2024 - 01-04-2024</h5>
                        <p><em>Centre Germany Language School Fès, Atlas, Fès</em></p>
                        <p>
                          Analysis, design, and development of a teaching center website to publish the center's services and allow students to easily access the courses provided by the teachers. Tools used: UML, MySQL, Laravel, Bootstrap, JS.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <h3 className="resume-title">Education</h3>
                      <div className="resume-item">
                        <h4>Full Stack Developer</h4>
                        <h5>2022 - 2024</h5>
                        <p><em>Training and Youth Integration Center, Atlas, Fès</em></p>
                        <p>
                          As a full-stack developer, I played a key role in the design, development, and deployment of comprehensive web solutions. My responsibilities spanned the entire development process, from user interface design to database management and performance optimization.
                        </p>
                      </div>
                      <div className="resume-item">
                        <h4>Bachelor of Science (Life and Earth Sciences)</h4>
                        <h5>2022</h5>
                        <p><em>Al Ahd Aljadid, Taounate</em></p>
                        <p>
                          Holder of a scientific baccalaureate specializing in Life and Earth Sciences from Al Ahd Aljadid High School, I achieved a grade of 12. My passion for Life and Earth Sciences reinforced my academic foundation and desire to contribute to scientific fields. Ready to pursue my studies with determination and commitment.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              ) : null}

              {selectsection === 'OtherSkills' ? (
                <div className="SkillsContainer">
                  {uniqueCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="CategoryContainer">
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

export default Skills;
