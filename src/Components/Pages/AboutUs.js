import React from 'react';
import About from '../../images/Images/About.png'
import { Link } from "react-router-dom";
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='about-us-container'>
            <div className="about-us-left-area">
                <h2>About <span>Us</span></h2>
                <p>Hello Facility promise to deliver best-in-class, customized facility services focusing customer satisfaction, quality and integrity. We are offering Cleaning service, Pest Control, Car Rental, General Supplies, Building Management Solution, Gardening and many more.</p>
                <Link to='/aboutus'>See More</Link>
            </div>
            <div className="about-us-right-area">
                <img src={About} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;