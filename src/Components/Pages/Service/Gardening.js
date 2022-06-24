import React from 'react';
import Footer from '../Footer';
import HeaderContact from '../HeaderContact';
import Banner from '../../../images/Service/GarBanner.jpg'
import One from '../../../images/Service/GarOne.jpg'
import Two from '../../../images/Service/GarTwo.jpeg'
import Three from '../../../images/Service/GarThree.jpeg'
import Four from '../../../images/Service/GarFour.jpeg'
import Navbar from '../Navbar';

const Gardening = () => {
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
                        <h1>Gardening</h1>
                    </div>
                    <div className="service-details-area">
                        <div className="service-details">
                            <p>Make your place a new look with a total gardening solution to accomplish great things with green everywhere. Maintain your garden with our expert gardeners to keep them healthy & greenish. 
<br /><br />
Set your plants in planters to make your office or home ornate & elegant. Unique plants are chosen by sophisticated minds. Stay green, Live green. Our services are…

                                <li>Commercial Landscaping.</li>
                                <li>Garden and Landscaping.</li>
                                <li>Residential Landscaping.</li>
                                <li>Rooftop Gardening.</li>
                                <li>Indoor and Outdoor Trees Supply.</li>
                                <li>Tree Trimming and Pruning.</li>
                                <li>Landscape Maintenance.</li>
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

export default Gardening;