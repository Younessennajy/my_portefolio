import React, { useState } from 'react';
import profile_img from './../assets/img/profile_aside.png';
import {  FaBars   } from 'react-icons/fa';
import Nav from './Nav';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './../style/style.css';

function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header id="header" className={toggle ? 'header-toggled' : 'header'}>
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={profile_img} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light"><a href="index.html">Ennajy Youness</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://mailto:younessennajy30@gmail.com" target="_blank" rel="noopener noreferrer"><i><FaEnvelope /></i></a>
            <a href="https://www.linkedin.com/in/ennajy-youness"  target="_blank"><i><FaLinkedin /></i></a>
            <a href="https://github.com/Younessennajy" target="_blank" rel="noopener noreferrer"><i><FaGithub /></i></a>
            <a href="https://wa.me/+212649962806" target="_blank" rel="noopener noreferrer"><i><FaWhatsapp /></i></a>
          </div>
        </div>
        <Nav />
        <div className="toggle-nav" onClick={handleToggle}><FaBars /></div>
      </div>
    </header>
  );
}

export default Header;
