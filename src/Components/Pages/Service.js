import React from 'react';
import HeaderContact from '../Pages/HeaderContact'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Cleaning from '../../images/Service/Cleaning.jpeg'
import CarRental from '../../images/Service/CarRental.jpeg'
import BuildingManagement from '../../images/Service/BuildingManagement.jpeg'
import Stationery from '../../images/Service/Stationary.jpeg'
import PestControl from '../../images/Service/PestControl.jpeg'
import Gardening from '../../images/Service/Gardening.jpeg'
import { Link } from "react-router-dom";
import './Service.css'

const Service = () => {
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <div className="service-container">
                <h2 className='service-title'>Services</h2>
                <div className="service-area">
                    <div class="card w-96 h-52 bg-base-100 shadow-xl image-full">
                        <img className='w-96 h-52' src={Cleaning} alt="Shoes" />
                        <div class="card-body">
                            <h2 class="card-title">Cleaning Service</h2>
                            <p>At Hello Facility, we provide a squeaky clean & healthy work environment made possible by our expert Housekeeper</p>
                            <div className="service-details-btn">
                                <Link to='/'>See More</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 h-52 bg-base-100 shadow-xl image-full">
                        <img className='w-96 h-52' src={CarRental} alt="Shoes" />
                        <div class="card-body">
                            <h2 class="card-title">Car Rental</h2>
                            <p>Hello Facility car rental is the most reliable car rental in Dhaka.</p>
                            <div className="service-details-btn">
                                <Link to='/'>See More</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 h-52 bg-base-100 shadow-xl image-full">
                        <img className='w-96 h-52' src={BuildingManagement} alt="Shoes" />
                        <div class="card-body">
                            <h2 class="card-title">Building Management Solution</h2>
                            <p>To enhance the quality in service & efficient use of owners’ resources in transparent manner Hello Facility building management solution would be your best choice.</p>
                            <div className="service-details-btn">
                                <Link to='/'>See More</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 h-52 bg-base-100 shadow-xl image-full">
                        <img className='w-96 h-52' src={Stationery} alt="Shoes" />
                        <div class="card-body">
                            <h2 class="card-title">Stationery Supply</h2>
                            <p>To get a complete range of Stationery products you can knock Hello Facility.</p>
                            <div className="service-details-btn">
                                <Link to='/'>See More</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 h-52 bg-base-100 shadow-xl image-full">
                    <img className='w-96 h-52' src={PestControl} alt="Shoes" />
                        <div class="card-body">
                            <h2 class="card-title">Pest control</h2>
                            <p>We also as a service provider, ensure to offer result-driven services to make sure your investment counts. </p>
                            <div className="service-details-btn">
                                <Link to='/'>See More</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 h-52 bg-base-100 shadow-xl image-full">
                    <img className='w-96 h-52' src={Gardening} alt="Shoes" />
                        <div class="card-body">
                            <h2 class="card-title">Gardening</h2>
                            <p>Make your place a new look with a total gardening solution to accomplish great things with green everywhere. </p>
                            <div className="service-details-btn">
                                <Link to='/'>See More</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;