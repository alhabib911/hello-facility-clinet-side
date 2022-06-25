import React from 'react';
import { Link } from "react-router-dom";
import WhiteLogo from '../../images/Logo/White.png'
import { FaFacebook } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer-area'>
                <div className="column1">
                    <div className="logo">
                        <img src={WhiteLogo} alt="" />
                        <p><span>Integrity</span> <small>.</small> <span>Commitment</span> <small>.</small> <span>Quality</span></p>
                    </div>
                    <div className="footer-social-contact">
                        <div className="facebook-footer">
                            <a target='-blank' href="https://www.facebook.com/hellofacility"><FaFacebook /></a>
                        </div>
                        <div className="linkedin-footer">
                            <a target='-blank' href="https://www.linkedin.com/company/hello-facility/"><TiSocialLinkedinCircular /></a>
                        </div>
                        <div className="instagram-footer">
                            <a target='-blank' href="https://www.instagram.com/hellofacility.bd/"><AiFillInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="column2">
                    <h1 className='column2-title'>Contact Us</h1>
                    <p><span>Registered Address: <br /></span>Sunrise Garden, House # 5/B, Primary School Road , <br /> Kallyanpur, Mirpur - 1207, Dhaka Division, Bangladesh</p>
                    <p><span>Mailing Address: <br /></span>Road- 1, House- 6, Shekhertek, Adabor, Dhaka- 1207</p>
                    <div className="footer-num-email-web">
                        <div className="hotline-footer">
                            <p><span>Helpline:</span> <br /> <small> 09606 35 35 35</small> <br /> <small>01757 11 11 77</small>
                            </p>
                        </div>
                        <div className="email-web-footer">
                            <p><span>E-mail: </span>info@hellofacility.com.bd</p>
                            <p><span>Website: </span>www.hellofacility.com.bd</p>
                        </div>
                    </div>
                </div>
                <div className="column3">
                    <div className="column3-title">
                        <h1>Additional Links</h1>
                    </div>
                    <div className="column3-link">
                        <Link to='/aboutus'>About Us</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/faq'>Faq</Link>
                        <Link to='/career'>Career</Link>
                        <Link to='/contacts'>Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className='copyright-area'>
                <p>Copyright © {new Date().getFullYear()}  Hello Facility. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;