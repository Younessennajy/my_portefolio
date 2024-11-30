import React from 'react';
import services from '../assets/serviceItem'
import {motion} from 'framer-motion'
function Services() {
  const fadeAnimate={
    initial:{
      opacity : 0,
      y:100
    },
    animate:(index)=>({
      opacity:1,
      y:0,
      transition:{
        duration:0.8* index,
      },
      
    }),
  }
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>Welcome to my Full-Stack Development Services! As a seasoned Full-Stack Developer, I offer a range of services that span both front-end and back-end development, providing comprehensive solutions to meet your unique project requirements. Here's a glimpse of what I bring to the table .</p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <motion.div className="col-lg-4 col-md-6 icon-box" 
            key={index}
            variants={fadeAnimate}
            initial ="initial"
            whileInView ="animate"
            viewport={{
              once:true,
            }}
            custom={index}
            >
              <div className="icon">{service.icon}</div>
              <h4 className="title">{service.title}</h4>
              <p className="description">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
