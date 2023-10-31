import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/service.css';
import Renuka from '../Image/Renuka.jpg';
import Bhawna from '../Image/Bhawna.jpg';
import Vandana from '../Image/Vandana.jpg';
import Kashyap from '../Image/Kashyap.jpg';
import Ahisekh from '../Image/Ahisekh.jpg';
import vishal from '../Image/vishal.jpg';
import Graphic11 from '../UIweb/think.jpg';
import Graphic12 from '../Logo/LogoYB2.jpg';
function Service() {

    return (
        <div>
            < body className='service'>
                <header >
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
                <section class="container2">
                    <div>
                        <h2 className='water-flow'>Y&B Services We Provide</h2>
                        <div class="row">
                            <div class="service">
                                <img
                                    className="image" src={Kashyap}
                                    alt="Kashyap"
                                />
                                <h3>Web Design</h3>
                                <p>Yellow&Black's web design service is a masterpiece of creativity and functionality. They craft websites that not only look stunning but are also user-friendly and responsive across all devices. Your online presence is in good hands with their talented designers</p>
                            </div>
                            <div class="service">
                                <img
                                    className="image" src={Bhawna}
                                    alt="Kashyap"
                                />
                                <h3>Graphic Design</h3>
                                <p>The graphic design expertise at Yellow&Black is unmatched. They breathe life into your brand with captivating visuals. From logos to marketing materials, their designs are a powerful tool for making a memorable impression.</p>
                            </div>
                            <div class="service">
                                <img
                                    className="image" src={Ahisekh}
                                    alt="Kashyap"
                                />
                                <h3>App Development</h3>
                                <p>Yellow&Black's app development team transforms your ideas into fully functional and aesthetically pleasing mobile applications. Their attention to detail and commitment to delivering high-quality apps make them your ideal app development partner.</p>
                            </div>

                            <div class="service">
                                <img
                                    className="image" src={Vandana}
                                    alt="Kashyap"
                                />
                                <h3>Video and Photo Editing</h3>
                                <p>Yellow&Black's video and photo editing team turns your raw footage and images into polished, professional content. Their creative touch enhances your visual storytelling, making your brand stand out with captivating visuals.</p>
                            </div>
                            <div class="service">
                                <img
                                    className="image" src={vishal}
                                    alt="Kashyap"
                                />
                                <h3>SEO (Search Engine Optimization)</h3>
                                <p>SEO is the backbone of online success, and Yellow&Black excels in optimizing your digital presence. With their SEO expertise, your website climbs the search engine rankings, ensuring that your target audience can find you easily.</p>
                            </div>
                            <div class="service">
                                <img
                                    className="image" src={Renuka}
                                    alt="Kashyap"
                                />
                                <h3>Content Writing</h3>
                                <p>Content is king, and Yellow&Black's content writing service reigns supreme. Their talented writers craft engaging, informative, and persuasive content that not only informs but also converts visitors into customers. Quality content is their forte.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </div>
    );
}

export default Service;
