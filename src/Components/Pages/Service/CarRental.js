import React from 'react';
import Footer from '../Footer';
import HeaderContact from '../HeaderContact';
import CarRentalBanner from '../../../images/Service/CarBanner.png'
import RentalTwo from '../../../images/Service/RentalTwo.png'
import RentalThree from '../../../images/Service/RentalThree.jpg'
import RentalFour from '../../../images/Service/RentalFour.jpeg'
import RentalFive from '../../../images/Service/RentalFive.jpg'
import Navbar from '../Navbar';

const CarRental = () => {
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <div className="service-container">
                <div className="service-area">
                    <div className="service-banner">
                        <img className='service-banner-img' src={CarRentalBanner} alt="" />
                    </div>
                    <div className="service-title">
                        <h1>Car Rental</h1>
                    </div>
                    <div className="service-details-area">
                        <div className="service-details">
                            <p>Hello Facility car rental is the most reliable car rental in Dhaka. From customer convenience to quality service and exclusive deals, we are committed to rendering a fully-customized service, whether it is for an individual or a company.
                                <br /><br />
                                Since our establishment, we have worked with a clear focus on innovation and continuously strive to improve our services at every step. Now we are offering below services…

                                <li>Airport Pick/ Drop Service.</li>
                                <li>Holiday Travel Package.</li>
                                <li>On Demand Service.</li>
                                <li>Hourly Service.</li>
                                <li>Business Travel Package.</li>
                            </p>
                        </div>
                        <div className="service-img">
                            <img src={RentalTwo} alt="" />
                        </div>
                    </div>
                    <div className="service-gallery">
                        <div className="service-gallery-area">
                            <div className="gallery-card">
                                <img src={RentalThree} alt="" />
                            </div>
                            <div className="gallery-card">
                                <img src={RentalFour} alt="" />
                            </div>
                            <div className="gallery-card">
                                <img src={RentalFive} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CarRental;