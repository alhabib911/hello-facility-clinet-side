import React from 'react';
import { MdLocalPhone } from 'react-icons/md';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import './HeaderContacu.css'

const HeaderContact = () => {
    return (
        <div className='header-contact-container '>
            <div className="general-contact">
                <div className="phone-icon">
                    <div className="p-icon">
                        <MdLocalPhone />
                    </div>
                    <div className="p-address">
                        <h2>+880 9606 35 35 35</h2>
                    </div>
                </div>
                <div className="email-icon">
                    <div className="e-icon">
                        <MdOutlineMarkEmailUnread />
                    </div>
                    <div className="e-address">
                        <h2>info@hellofacility.com.bd</h2>
                    </div>
                </div>
            </div>
            <div className="social-contact">
                <div className="facebook">
                        <FaFacebook/>
                </div>
                <div className="linkedin-icon">
                    <AiFillLinkedin/>
                </div>
                <div className="instagram">
                    <AiFillInstagram/>
                </div>
            </div>
        </div>
    );
};

export default HeaderContact;