import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/project.css';
import Food from '../Projects/Andriod8.jpg';
import Food2 from '../Projects/Food2.jpg';
import Food3 from '../Projects/Andriod6.jpg';
import Food4 from '../Projects/Food4.jpg';
import Food5 from '../AccMobile/Andriod.jpg';
import Food6 from '../AccMobile/Andriod.jpg';
import Food7 from '../AccMobile/Andriod1.jpg';
import Food8 from '../AccMobile/Andriod3.jpg';
import Food9 from '../AccMobile/Andriod4.jpg';
import Food10 from '../Projects/Food10.jpg';
import Food11 from '../Projects/Andriod5.jpg';
import Food12 from '../Projects/Food12.jpg';
import Food13 from '../Projects/Andriod7.jpg';
import VideoSwiggyApp from '../Video/VideoSwiggyApp.mp4';
import WebDesign from '../UIweb/Africa2.jpg';
import WebDesign1 from '../UIweb/UIp4.jpg';
import WebDesign2 from '../UIweb/Africa6.jpg';
import webDesign3 from '../UIweb/UIp3.jpg';
import webDesign4 from '../UIweb/Web.jpg';
import webDesign5 from '../UIweb/UIp7.jpg';
import webDesign6 from '../UIweb/Africa7.jpg';
import webDesign7 from '../UIweb/UIp8.jpg';
import webDesign8 from '../UIweb/Africa3.jpg';
import webDesign9 from '../UIweb/Tracker.jpg';
import Graphic1 from '../Graphic/Branding.02.jpg';
import Graphic2 from '../Graphic/GraphicBhawna.jpg';
import Graphic3 from '../Graphic/GraphicDesginers.jpg';
import Graphic4 from '../Graphic/GraphicsBanner2.jpg';
import Graphic5 from '../Graphic/HappyDesharam.jpg';
import Graphic6 from '../Graphic/Gra1.jpg';
import Graphic7 from '../Graphic/Gra2.jpg';
import Graphic8 from '../Graphic/Gra3.jpg';
import Graphic9 from '../Graphic/Gra4.jpg';
import Graphic10 from '../UIweb/think.jpg';
import Graphic12 from '../Logo/LogoYB2.jpg';


function Project() {

    const main = document.getElementById("main");
    const mainImage = document.getElementById("main");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {

            mainImage.src = this.src;
        });
    });

    const [isZoomed, setZoomed] = useState(false);

    // Function to toggle zoom
    const handleZoom = () => {
        setZoomed(!isZoomed);
    };

    // Function to scroll to the previous image
    const prev = () => {
        document.getElementById('slider-container').scrollLeft -= 270;
    };

    // Function to scroll to the next image
    const next = () => {
        document.getElementById('slider-container').scrollLeft += 270;
    };

    useEffect(() => {
        // Set up a timer to automatically scroll to the previous image every 10 seconds
        const timer = setInterval(() => {
            prev(); // Scrolls to the previous image
        }, 10000); // 10,000 milliseconds = 10 seconds

        // Clean up the timer when the component unmounts to prevent memory leaks
        return () => {
            clearInterval(timer);
        };
    }, []);

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
                            <img src={Graphic10} alt="Image Alt Text" className="description-image" />
                            <p>Want to Know Something More About Us?</p>

                        </div>
                    </div>
                </Link>
            </header>
            <div>
                <h1 class="mint">Cool And Fun Desgins Create By Our UI_UX/Graphic Team</h1>
            </div>
            <div className="container">
                <div className='val'>
                    <div className='gra' id="carousel">
                        <div className='img'>
                            <img className='graim' src={Graphic1} alt="Image1" />
                        </div>
                        <div className='img'>
                            <img className='graim' src={Graphic2} alt="Image2" />
                        </div>
                        <div className='img'>
                            <img className='graim' src={Graphic9} alt="Image3" />
                        </div>
                        <div className='img'>
                            <img className='graim' src={Graphic4} alt="Image3" />
                        </div>
                        <div className='img'>
                            <img className='graim' src={Graphic7} alt="Image3" />
                        </div>
                        <div className='img'>
                            <img className='graim' src={Graphic6} alt="Image3" />
                        </div>
                        <div className='img'>
                            <img className='graim' src={Graphic8} alt="Image3" />
                        </div>
                        <div className='img'>
                            <img className='graim' src={Graphic3} alt="Image3" />
                        </div>
                        <div className='img'>
                            <img className='graim' src={Graphic5} alt="Image3" />
                        </div>
                    </div>
                    {/* Add more div elements for additional images */}
                </div>
            </div>

            <div className="container imageChange" >
                <h1 className='head2'>Projects of Web Desgins We Worked Upon</h1>
                <img src={WebDesign1} id="main" alt='' />
                <div id="thumbnails" className="thumbnails">
                    <img src={webDesign3} className="thumbnail" alt="" />
                    <img src={WebDesign2} className="thumbnail" alt="" />

                    <img src={WebDesign1} className="thumbnail" alt="" />
                    <img src={WebDesign} className="thumbnail" alt="" />
                    <img src={webDesign4} className="thumbnail" alt="" />
                    <img src={webDesign5} className="thumbnail" alt="" />
                    <img src={webDesign6} className="thumbnail" alt="" />
                    <img src={webDesign7} className="thumbnail" alt="" />
                    <img src={webDesign8} className="thumbnail" alt="" />
                    <img src={webDesign9} className="thumbnail" alt="" />

                </div>
            </div>



            <div className="container">
                <div className="video-overlay"></div>
                <video className="bg-video" src={VideoSwiggyApp} loop muted autoPlay />

                <h3 className='header3'>Android Project Showcase</h3>
                <div id="slider-container" className="slider">
                    <div className="slide" onClick={handleZoom}>
                        <img src={Food} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Food2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Food9} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Food4} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Food13} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Food6} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Food10} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Food7} alt="" />
                    </div>
                    <div className="slide">

                        <img src={Food3} alt="" />
                    </div>
                    <div className="slide">

                        <img src={Food11} alt="" />

                    </div>
                    <div className="slide">

                        <img src={Food8} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Food12} alt="" />
                    </div>
                    <div className="slide">

                        <img src={Food5} alt="" />
                    </div>
                    <div className='slide'>

                    </div>
                    <div onClick={prev} className="control-prev-btn">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div onClick={next} className="control-next-btn">
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Project;
