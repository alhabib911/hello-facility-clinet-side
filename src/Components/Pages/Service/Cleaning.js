import React from 'react';
import HeaderContact from '../../Pages/HeaderContact'
import Navbar from '../../Pages/Navbar'
import Footer from '../../Pages/Footer'
import CleaningBanner from '../../../images/Service/CleaningBanner.jpg'
import One from '../../../images/Service/cleaning-service-one.jpg'
import Two from '../../../images/Service/Stwo.jpeg'
import Three from '../../../images/Service/Sthree.jpeg'
import Four from '../../../images/Service/Sfour.jpeg'
import './Cleaning.css'

const Cleaning = () => {
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <div className="service-container">
                <div className="service-area">
                    <div className="service-banner">
                        <img className='service-banner-img' src={CleaningBanner} alt="" />
                    </div>
                    <div className="service-title">
                        <h1>Cleaning Service</h1>
                    </div>
                    <div className="service-details-area">
                        <div className="service-details">
                            <p>At Hello Facility, we provide a squeaky clean & healthy work environment made possible by our expert Housekeeper. Our commitment to excellent customer service. We employ advanced & effective systems available to sanitize living spaces & work areas where most of our clients are spending much of their time. <br /> <br /> We use eco-friendly cleaning materials & products. Moreover, we provide janitorial & grounds maintenance solutions for our valued clients. Now we are offering below services…

                                <li>Regular Cleaning Service (Office).</li>
                                <li>Floor Scrubbing.</li>
                                <li>Toilet Deep Cleaning.</li>
                                <li>Kitchen Deep Cleaning.</li>
                                <li>Sofa Deep Cleaning.</li>
                                <li>Carpet Wash.</li>
                                <li>Abseiling (External Glass Clean) Service.</li>
                            </p>
                        </div>
                        <div className="service-img">
                            <img src={One} alt="" />
                        </div>
                    </div>
                    <div className="service-gallery">
                        <div className="service-gallery-area">
                            <div className="gallery-card">
                                <img src={Two} alt="" />
                            </div>
                            <div className="gallery-card">
                                <img src={Three} alt="" />
                            </div>
                            <div className="gallery-card">
                                <img src={Four} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cleaning;