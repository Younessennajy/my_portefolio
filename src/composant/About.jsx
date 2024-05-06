import React from 'react'
import profile_img from './../assets/img/emg2.jpeg'
import {motion} from 'framer-motion'
function About() {
  
  const AnimateAbout={
    initial:{
      opacity : 0,
      x:100
    },
    animate:()=>({
      opacity:1,
      x:0,
      transition:{
        duration:0.8,
      },
      
    }),
  }
  const animateimg={
    initial:{
      opacity : 0,
      x:-100
    },
    animate:()=>({
      opacity:1,
      x:0,
      transition:{
        duration:0.8,
      },
      
    })}
  return (
    <section id="about" className="about">
    <div className="container">
      <div className="section-title">
        <h2>About</h2>
        <p>Greetings ! I'm ENNAJY, a dedicated Full Stack Developer on a mission to craft immersive and innovative digital experiences. With a strong foundation in both front-end and back-end technologies, I bring a unique blend of creativity and technical prowess to every project.</p>
      </div>

      <div className="row">
        <motion.div className="col-lg-4" 
        variants={animateimg}
        initial ="initial"
        whileInView ="animate"
        viewport={{
          once:true,
        }}
>
        <img src={profile_img} className="img-fluid" alt="profile"/>
        </motion.div>
        <motion.div className="col-lg-8 pt-4 pt-lg-0 content"
        variants={AnimateAbout}
        initial ="initial"
        whileInView ="animate"
        viewport={{
          once:true,
        }}

        >
          <h3>Developer Full Stack .</h3>
          <p className="fst-italic">
          I am interested in pursuing opportunities for internships, employment, collaborations, new projects, and freelance work. I bring a total commitment to my endeavors, coupled with excellent interpersonal skills, a keen ability to listen, and a high level of dedication. I am deeply engaged with ambitious career aspirations and welcome any chance to contribute and grow within a dynamic professional environment.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i></i> <strong>Status:</strong> <span>Single</span></li>
                <li><i></i> <strong>Phone:</strong> <span>+212 649962806</span></li>
                <li><i></i> <strong>City:</strong> <span>Morroco, Fés</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><></> <strong>Degree:</strong> <span>BAC +2</span></li>
                <li><i></i> <strong>Email:</strong> <span>younessennajy30@gmail.com</span></li>
                <li><i></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          
        </motion.div>
      </div>

    </div>
  </section>
  )
}

export default About