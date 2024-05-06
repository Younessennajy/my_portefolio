import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaFile, FaServer, FaEnvelope } from 'react-icons/fa';


function Nav() {
  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            <i><FaHome/></i> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <i ><FaUser/></i> <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
            <i ><FaCode/></i> <span>Project</span>
          </Link>
        </li>
        <li>
          <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
            <i ><FaServer/></i> <span>Services</span>
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <i ><FaEnvelope/></i> <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
