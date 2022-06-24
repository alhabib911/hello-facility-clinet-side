import React from 'react';
import Footer from '../Footer';
import HeaderContact from '../HeaderContact';
import Banner from '../../../images/Service/BuildingManagementBanner.jpg'
import Btwo from '../../../images/Service/Btwo.jpg'
import Bthree from '../../../images/Service/Bthree.jpeg'
import Bfour from '../../../images/Service/Bfour.jpeg'
import Bfive from '../../../images/Service/Bfive.jpeg' 
import Navbar from '../Navbar';

const BuildingManagement = () => {
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
                            <img src={Btwo} alt="" />
                        </div>
                    </div>
                    <div className="service-gallery">
                        <div className="service-gallery-area">
                            <div className="gallery-card">
                                <img src={Bthree} alt="" />
                            </div>
                            <div className="gallery-card">
                                <img src={Bfour} alt="" />
                            </div>
                            <div className="gallery-card">
                                <img src={Bfive} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BuildingManagement;