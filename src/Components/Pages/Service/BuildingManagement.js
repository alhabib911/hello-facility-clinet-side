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
                        <h1>Building Management Solution</h1>
                    </div>
                    <div className="service-details-area">
                        <div className="service-details">
                            <p>To enhance the quality in service & efficient use of owners’ resources in transparent manner Hello Facility building management solution would be your best choice.
<br /><br />
To create a change in this work, we initiated a complete property management ecosystem through the use of our proprietary work-flow management system which is new across this arena. So, don’t be bother, give your property responsibility to us and become stress free & satisfied. We are providing…

                                <li>Building Maintenance and operations.</li>
                                <li>Facility Management.</li>
                                <li>Security Management.</li>
                                <li>Gardening and Landscaping Management.</li>
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