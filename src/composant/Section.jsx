import React from 'react';
import './../style/style.css'
import { useTypewriter } from 'react-simple-typewriter';
function Section() {
  const [typeEffect]=useTypewriter({
    words:['Front end ','Backend','Full stack'],
    loop:{},
    typeSpeed:150,
    delaySpeed:50
  })
  
  return (
    <section id="hero" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="hero-container">
<<<<<<< HEAD
        <h1>YOUNESS ENNAJY</h1>
        <p>
          I'm Developer <span> {typeEffect}</span>
        </p>
=======
        <h1>Youness Ennajy</h1>
        <p>
          I'm Developer <span> {typeEffect}</span>
        </p>

>>>>>>> 50badf2542c7f857aa32cdebe145319a6a5960e5
      </div>
    </section>
  );
}

export default Section;
