
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from '../Image/About.jpg';
import myOffice from '../Image/office.jpg';
import '../Style/about.css';
import Graphic12 from '../Logo/LogoYB2.jpg';

function About() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  const handleButtonClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  const toggleDetails = (item) => {
    if (item === 1) {
      setShowDetails1(!showDetails1);
    } else if (item === 2) {
      setShowDetails2(!showDetails2);
    } else if (item === 3) {
      setShowDetails3(!showDetails3);
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // Close the details section after 10 seconds
    if (isTextVisible) {
      const timeout = setTimeout(() => {
        setIsTextVisible(false);
      }, 10000); // 10 seconds

      // Clear the timeout if the component unmounts or if the button is clicked to close manually
      return () => clearTimeout(timeout);
    }
  }, [isTextVisible]);


  return (

    <div  >
      <body>
        <header >
        <Link to="/"> <img className="logo" src={Graphic12} alt="logo " /></Link>
              <nav>
            <ul className="nav__links">
              <Link to="/about">About</Link>
              <Link to="/service">Services</Link>
              <Link to="/project">Projects</Link>
            </ul>
          </nav>
       <Link to="/contact">   <a href="#" className="cta">
            <button >CONTACT</button>
          </a></Link>
        </header>
        <div class="container">

          <img className="image2" src={myOffice} alt="Image" />

          <section>
            <div class="content">

              <h2>Yellow&Black</h2>
              <h2>Yellow&Black</h2>
            </div>

          </section>

        </div><br></br>
        <div className="center">
      <button
        className={`button ${isTextVisible ? 'button-zoom zoom-in' : ''}`}
        onClick={handleButtonClick}
      >
        {isTextVisible ? 'Close' : 'Click Here For More Information About Yellow&Black'}
      </button>
      {isTextVisible && (
        <p className="pvis">At Yellow&Black, we're not just another IT services company; we're the architects of your digital dreams. Our journey is a blend of passion, innovation, and unwavering commitment to excellence. We're here to make the digital world a better place for you, one project at a time</p>
      )}

      <div className="cards">
        <a className="cards__item" href="#" onClick={(e) => preventDefault(e)}>
          <span className="cards__date">Diverse Talents</span>
          <h3 className="cards__title">
            We're a diverse mix of talents, from coding wizards to design maestros and strategic thinkers. This diversity is the breeding ground for creativity and innovation.
          </h3>
          <span className="cards__more" onClick={() => toggleDetails(1)}>
            {showDetails1 ? 'Read Less' : 'Read More'}
          </span>
          {showDetails1 && (
            <div className="cards__overlay">
              <p className="cards__details">
                Collaborative Spirit: We believe that the best ideas are born from collaboration. Every project is a collective effort where ideas flow freely, and the result is something truly extraordinary.
              </p>
            </div>
          )}
        </a>
        <a className="cards__item" href="#" onClick={(e) => preventDefault(e)}>
          <span className="cards__date">Client-Centric Approach</span>
          <h3 className="cards__title">
            Your vision is our compass. We listen to your unique needs, adapt to your goals, and create solutions that not only meet but exceed your expectations.
          </h3>
          <span className="cards__more" onClick={() => toggleDetails(2)}>
            {showDetails2 ? 'Read Less' : 'Read More'}
          </span>
          {showDetails2 && (
            <div className="cards__overlay">
              <p className="cards__details">
                Continuous Learning: In a tech world that evolves at breakneck speed, we're committed to staying on the cutting edge. We're perpetual learners, constantly updating our skills to serve you better.
              </p>
            </div>
          )}
        </a>
        <a className="cards__item" href="#" onClick={(e) => preventDefault(e)}>
          <span className="cards__date">Quality and Precision</span>
          <h3 className="cards__title">
            We don't cut corners. Quality and precision are at the heart of our work.Quality services need not break the bank. We offer competitive pricing to suit your budget.
          </h3>
          <span className="cards__more" onClick={() => toggleDetails(3)}>
            {showDetails3 ? 'Read Less' : 'Read More'}
          </span>
          {showDetails3 && (
            <div className="cards__overlay">
              <p className="cards__details">
                Timely Delivery: We understand the value of time, and we're committed to delivering on time, every time.
              </p>
            </div>
          )}
        </a>
      </div>
      </div>

        <div class="contenedor">
          <div class="img">
            <img
              src={myImage}
              alt="My Image"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div class="contenido">
            <h1 className='head'>What   Sets   Us   Apart</h1>
            <p className='para'>   <div class="line">Passion for Innovation: We love what we do, and it shows in the innovative solutions we deliver.</div>
              <div class="line">Client-Centric Approach: Your success is our success. We collaborate closely with you to ensure your goals are met.</div>
              <div class="line">Experienced Team: Our team consists of seasoned professionals who excel in their respective fields.</div>
              <div class="line">Quality and Precision: We don't cut corners. Quality and precision are at the heart of our work.</div>
              <div class="line">Timely Delivery: We understand the value of time, and we're committed to delivering on time, every time.</div>
              <div class="line">Affordable Pricing: Quality services need not break the bank. We offer competitive pricing to suit your budget.</div>
            </p>
          </div>
        </div>


      </body>

    </div>
  );
}

export default About;
