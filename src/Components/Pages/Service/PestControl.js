import React from 'react';
import Footer from '../Footer';
import HeaderContact from '../HeaderContact';
import Banner from '../../../images/Service/PestBanner.jpg'
import One from '../../../images/Service/PestOne.jpg'
import Two from '../../../images/Service/PestTwo.jpeg'
import Three from '../../../images/Service/PestThree.jpeg'
import Four from '../../../images/Service/PestFour.jpeg'
import Navbar from '../Navbar';

const PestControl = () => {
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
                        <h1>Pest Control</h1>
                    </div>
                    <div className="service-details-area">
                        <div className="service-details">
                            <p>Hellofacility provide the best quality trained professionals in pest control who will respect your house or business & treat it as if it were their own & work safely and effectively to protect your residence, office, health, and property.
<br /><br />
We also as a service provider, ensure to offer result-driven services to make sure your investment counts. Our services are…

                                <li>Cockroach Control.</li>
                                <li>Rodent Control.</li>
                                <li>Termite Control.</li>
                                <li>Ant Control.</li>
                                <li>Fumigation Service.</li>
                                <li>Wood Borer.</li>
                                <li>Bed Bug Control.</li>
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

export default PestControl;