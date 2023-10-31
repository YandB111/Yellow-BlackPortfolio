import React from 'react';
import { Link } from 'react-router-dom';
import Graphic11 from '../UIweb/think.jpg';
import '../Style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import Graphic12 from '../Logo/LogoYB2.jpg';
function Contact() {
    return (
        <div className="contact">
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
                            <img src={Graphic11} alt="Image Alt Text" className="description-image" />
                            <p className='more'>Want to Know Something More About Us?</p>

                        </div>
                    </div>
                </Link>
            </header>
            <div className='spacecard'>
                <div class="card-container">
                    <div class="card">
                        <div class="card_content">
                            <div class="card_title"> Rahul Rohila</div>
                            <div class="card_desc"> Founder Senior Developer</div>
                        </div>
                        <div class="card_bottom_shadow"></div>
                    </div>
                    <div class="card2 ">
                        <div class="card_content">
                            <div class="card_title"> Kashish Sharma</div>
                            <div class="card_desc"> CO-Founder Senior Developer</div>
                        </div>
                        <div class="card_bottom_shadow"></div>
                    </div>
                </div>
                </div>
            
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-cta pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="cta-text">
                                        <h4>Find us</h4>
                                        <span>3266 , sec 19D, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text">
                                        <h4>Call us</h4>
                                        <span>+91 7837839923 </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html"><img src={Graphic12} class="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>
                                            Contact Us at Yellow and Black Firms"

                                            Why should you contact us?

                                            At Yellow and Black Firms, we are dedicated to providing you with top-notch solutions
                                            and services tailored to your unique needs. Our team of experts is committed to delivering excellence in every project we undertake.
                                            When you choose to contact us, you're opening the door to a world of possibilities
                                        </p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span className='icon'>Follow us</span>
                                        <FontAwesomeIcon icon={faFacebookF} className="facebook-bg" size="2x" />
                                        <FontAwesomeIcon icon={faTwitter} className="twitter-bg" size="2x" />
                                        <FontAwesomeIcon icon={faGooglePlusG} className="google-bg" size="2x" />

                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>Subscribe Channel "DOAKASHU"</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, Our Youtube Social Media Platforms</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
}

export default Contact;
