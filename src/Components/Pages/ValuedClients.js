import React from 'react';
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
import './ValuedClients.css'

const ValuedClients = () => {
    return (
        <div className='valued-clients-container'>
            <h2>Valued <span>Clients</span></h2>
            <div class="carousel ">
                <div id="slides1" class=" carousel-item relative w-11/12 pl-72">
                    <img className='w-48 h-48' src={Xiaomi} />
                    <img className='w-48 h-48' src={BPG} />
                    <img className='w-48 h-48' src={AgraniHolding} />
                    <img className='w-48 h-48' src={Dphe} />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-32 right-80 top-1/2">
                        <a href="#slides3" class="btn btn-circle">❮</a>
                        <a href="#slides2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slides2" class="carousel-item relative w-11/12 pl-72">
                    <img className='w-48 h-48' src={foodpanda} />
                    <img className='w-48 h-48' src={FPT}  />
                    <img className='w-48 h-48' src={Haier} />
                    <img className='w-48 h-48' src={Lantabor}  />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-32 right-80 top-1/2">
                        <a href="#slides1" class="btn btn-circle">❮</a>
                        <a href="#slides3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slides3" class="carousel-item relative w-11/12 pl-72">
                    <img className='w-48 h-48' src={Swodesh} />
                    <img className='w-48 h-48' src={Tsports} />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-32 right-80 top-1/2">
                        <a href="#slides2" class="btn btn-circle">❮</a>
                        <a href="#slides1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValuedClients;