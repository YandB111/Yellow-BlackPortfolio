import React from 'react';

import '../Style/DynamicElement.css'
import '../Style/container.css';
import { Link } from 'react-router-dom';
import Graphic11 from '../UIweb/think.jpg';
import Graphic12 from '../Logo/LogoYB2.jpg';
function DynamicElement() {
  return (
    <div>
      <header>
      <Link to="/"> <img className="logo" src={Graphic12} alt="logo " /></Link>
        <nav>
          <ul className="nav__links">
            <Link to="/about">About</Link>
            <Link to="/service">Services</Link>
            <Link to="/project">Projects</Link>
          </ul>
        </nav>
        <Link to="/contact">
          <div className="cta">
            <button>CONTACT</button>
            <div className="description">
              <img src={Graphic11}  alt="Image Alt Text" className="description-image" />
              <p>Want to Know Something More About Us?</p>

            </div>
          </div>
        </Link>
      </header>
      <div className='home'>
        <section class="hero">

          <div class="hero-content">

            <h1 class="hero-title"><span> Welcome To Yellow&Black Services </span> </h1>
            <p class="hero-description">One Solutions To All Your  Problems Click Below!  </p>
            <Link to="/about"> <a href="#" class="hero-button">About Us</a></Link>

          </div>
        </section>
      </div>

    </div>

  );
}

export default DynamicElement;
