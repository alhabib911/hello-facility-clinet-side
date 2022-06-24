import React from 'react';
import Footer from '../Footer';
import HeaderContact from '../HeaderContact';
import Banner from '../../../images/Service/Sbanner.png'
import One from '../../../images/Service/Stwo.jpg'
import Two from '../../../images/Service/Stathree.jpeg'
import Three from '../../../images/Service/StaFour.jpeg'
import Four from '../../../images/Service/StaFive.jpeg'
import Navbar from '../Navbar';

const Stationary = () => {
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <div className="service-container">
                <div className="service-area">
                    <div className="service-banner">
                        <img className='service-banner-img' src={Banner} alt="" />
                    </div>
                    <div className="service-title">
                        <h1>Stationery Supply</h1>
                    </div>
                    <div className="service-details-area">
                        <div className="service-details">
                            <p>To get a complete range of Stationery products you can knock Hello Facility. Our products are widely accepted in the Offices, Educational Institutions, Medical Institutions, and Varieties to match your requirements.

                                
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

export default Stationary;