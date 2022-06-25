import React from 'react';
import HeaderContact from '../Pages/HeaderContact'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Xiaomi from '../../images/Client/Xiaomi.png'
import BPG from '../../images/Client/BPG.png'
import AgraniHolding from '../../images/Client/AgraniHolding.png'
import Dphe from '../../images/Client/DPHE.png'
import foodpanda from '../../images/Client/foodpanda.png'
import FPT from '../../images/Client/FPT.png'
import Haier from '../../images/Client/Haier.png'
import Lantabor from '../../images/Client/Lantabor.png'
import Swodesh from '../../images/Client/SWODESH.png'
import Tsports from '../../images/Client/Tsports.png'
import './Client.css'

const Client = () => {
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <div className="client-container">
                <div className="client-area">
                    <div className="client-banner">
                        <h1 className='client-banner-title'>Our Clients</h1>
                    </div>
                    <div className="client-title">

                    </div>
                    <div className="client-details">

                    </div>
                    <div className="clent-img">
                        <div className="client-img-area">
                            <img src={Xiaomi} alt="" />
                            <img src={BPG} alt="" />
                            <img src={AgraniHolding} alt="" />
                            <img src={Dphe} alt="" />
                            <img src={foodpanda} alt="" />
                            <img src={FPT} alt="" />
                            <img src={Haier} alt="" />
                            <img src={Lantabor} alt="" />
                            <img src={Swodesh} alt="" />
                            <img src={Tsports} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Client;