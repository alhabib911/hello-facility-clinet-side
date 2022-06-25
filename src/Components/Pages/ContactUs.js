import React, { useRef } from 'react';
import HeaderContact from '../Pages/HeaderContact'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import { MdPhone } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { TbLocation } from 'react-icons/tb';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './ContactUs.css'


const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2gymtep', 'template_d2ek5l8', form.current, 'SJu1r-YvY044P6nO5')

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            .then(() => {
                // toast('Email Sent')
                e.target.reset()

            })
            ;
    };
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <div className='contact-container'>
                <div className="contact-page-title">
                    <h2>Get <span>in Touch</span></h2>
                </div>
                <div className="contact-section">
                    <div className="info-icon">
                        <div className="contact-info">
                            <div className="icon-details">
                                <div className="icon">
                                    <MdPhone />
                                </div>
                                <div className="info">
                                    <h5>Phone</h5>
                                    <p>+880 9606 35 35 35</p>
                                </div>
                            </div>
                            <div className="icon-details">
                                <div className="icon">
                                    <AiOutlineMail />
                                </div>
                                <div className="info">
                                    <h5>Email</h5>
                                    <p>info@hellofacility.com.bd</p>
                                </div>
                            </div>
                            <div className="icon-details">
                                <div className="icon">
                                    <TbLocation />
                                </div>
                                <div className="info">
                                    <h5>Location</h5>
                                    <p>Road- 1, House- 6, Shekhertek, <br /> Adabor, Dhaka- 1207</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-network">
                            <div className="linkedin">
                                <a target='-blank' href="https://www.linkedin.com/company/hello-facility/"><BsLinkedin /></a>
                            </div>
                            <div className="fb">
                                <a target='-blank' href="https://www.facebook.com/hellofacility"><AiFillFacebook /></a>
                            </div>
                            <div className="instagram-icon-contact">
                                <a target='-blank' href="https://www.instagram.com/hellofacility.bd/"><AiFillInstagram/></a>
                            </div>
                        </div>
                    </div>
                    <form className='contact-form' ref={form} onSubmit={sendEmail}>
                        <label>Name</label> <br />
                        <input className='name-email' type="text" name="user_name" required /> <br />
                        <label>Email</label> <br />
                        <input className='name-email' type="email" name="user_email" required /> <br />
                        <label>Message</label><br />
                        <textarea name="message" required /><br /> <br />
                        <div className='message-submit-button'>
                            <FiSend />
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
                {/* <ToastContainer /> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;