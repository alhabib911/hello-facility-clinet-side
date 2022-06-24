import React from 'react';
import AboutUs from '../Pages/AboutUs';
import HeaderContact from '../Pages/HeaderContact';
import HeaderSlider from '../Pages/HeaderSlider';
import Navbar from '../Pages/Navbar';
import Goal from '../Pages/Goal';
import Achivement from '../Pages/Achivement'
import OurTeam from '../Pages/OurTeam';
import ValuedClients from '../Pages/ValuedClients';
import Footer from '../Pages/Footer';

const Home = () => {
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <HeaderSlider></HeaderSlider>
            <AboutUs></AboutUs>
            <Goal></Goal>
            <Achivement></Achivement>
            <OurTeam></OurTeam>
            <ValuedClients></ValuedClients>
            <Footer></Footer>
        </div>
    );
};

export default Home;