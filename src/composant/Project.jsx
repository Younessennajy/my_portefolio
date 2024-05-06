import React, { useState } from 'react';
import '../style/style.css';
import { motion } from 'framer-motion';
// import { faTimes } from 'react-icons/fa';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { pro1, portefolio, homepageGLS, about_fact, contact, edit, Activities, ajouter_cours, chercher_par_nom, login, filtrer_niveaux, footer, Galeries, page_Etudiant, page_Prof, profile_user, pagination } from './imageImports'; // Importe les images

function Project() {
  const inimateproject = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    }),
  };

  const items = [
    { id: 1, img: pro1, href: 'https://logiciel-de-caisse-pour-les-restaurant-ennajys-projects.vercel.app/', title: 'Logiciel de caisse', desc: '\"Reactjs/tailwindCSS\"' },
    { id: 2, img: portefolio, href: 'https://my-portefolio-rust.vercel.app/', title: 'Portefolio', desc: '\"Reactjs(Redux)/bootstrap\"' },
    { 
      id: 3, 
      img: homepageGLS, 
      listeimg: [homepageGLS, about_fact, Activities, Galeries, contact, footer, login, page_Etudiant, profile_user, filtrer_niveaux, pagination, page_Prof, chercher_par_nom, ajouter_cours, edit],
      title: 'Project e-learning de centre Allemande', 
      desc: 'Laravel/TailwindCss/bladePHP/' 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleClick = (index, href) => {
    if (href) {
      window.open(href, '_blank');
    } else {
      setActiveIndex(index);
    }
  };

  const handleCloseCarousel = () => {
    setActiveIndex(-1); 
  };

  return (
    <section id="Project" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Greetings! Step into the realm of innovation and seamless functionality as I proudly present my latest project. I am a highly motivated full-stack developer proficient in a spectrum of front-end and back-end technologies, and I am excited to share a glimpse of my expertise through this unique portfolio showcase.</p>
        </div>

        <motion.div className="row"
          variants={inimateproject}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}>
          <div className="col-lg-12">
            <div className="row">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-4 mb-4 project-item text-center"
                  onClick={() => handleClick(index, item.href)}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={() => handleCardHover(null)}
                >
                  <div className="card">
                    <div>
                      <img src={item.img} alt={item.title} className="img-fluid rounded"
                        style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
                    </div>
                    <span className="project-title" style={{ display: hoveredIndex === index ? 'block' : 'none' }}>
                      {item.title}
                    </span>
                  </div>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {activeIndex !== -1 && items[activeIndex]?.listeimg && (
          <div className="carousel-container">
            <button className="close-carousel d-flex flex-end" onClick={handleCloseCarousel}>
              x
            </button>
            <Carousel>
              {items[activeIndex].listeimg.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img src={image} alt={`Carousel ${imgIndex}`} />
                </div>
              ))}
            </Carousel>
          </div>
        )}

      </div>
    </section>
  );
}

export default Project;
