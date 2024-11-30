import React from 'react'
import { FaProjectDiagram, FaSchool,  FaStar } from 'react-icons/fa';
import {motion} from 'framer-motion'

function Facts() {
  const inimatfact={
    initial:{
      opacity : 0,
      y:100
    },
    animate:()=>({
      opacity:1,
      y:0,
      transition:{
        duration:0.8,
      },
      
    }),
  }
  return (
    <section id="facts" className="facts">
      <div className="container">

        <div className="section-title">
          <h2>Facts</h2>
          <p>A highly motivated front-end developer with a substantial background in responsive web design for e-commerce platforms. Demonstrates a track record of successfully creating interactive and user-centric web designs that are adaptable to varying scales and requirements.</p>
        </div>

        <motion.div className="row no-gutters"
        variants={inimatfact}
        initial ="initial"
        whileInView ="animate"
        viewport={{
          once:true,
        }}
        >

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i><FaSchool/></i>
              <span>+2</span>
              <p><strong>Years </strong> Of Experience</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i><FaStar /></i>
<<<<<<< HEAD
              <span>+8</span>
=======
              <span>+5</span>
>>>>>>> 50badf2542c7f857aa32cdebe145319a6a5960e5
              <p><strong>BEST </strong> WEBSITE </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i><FaProjectDiagram/></i>
<<<<<<< HEAD
              <span>+14</span>
=======
              <span>+8</span>
>>>>>>> 50badf2542c7f857aa32cdebe145319a6a5960e5
              <p><strong>FINISHED </strong> PROJECTS</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Facts