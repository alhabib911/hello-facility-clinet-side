import React from 'react';
import SanjibKumar from '../../images/TeamMemebrs/SanjibKumar.jpg'
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { RiExternalLinkFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import './OurTeam.css'

const OurTeam = () => {
    return (
        <div className="team-container">
            <div className="team-container-title">
                <h2 >Meet <span>Our</span> Team</h2>
            </div>
            <div className='team-member-area'>
                <div className="team-member">
                    <div className="team-member-details">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-32">
                                <span class="text-3xl"><img src={SanjibKumar} alt="" /></span>
                            </div>
                            <Link className='team-member-details-link' to='/'><RiExternalLinkFill /></Link>
                        </div>
                        <h2>SANJIB KUMAR SARKER</h2>
                        <p>Founder & CEO</p>
                        <div className="team-member-social-link">
                            <div className="facebook">
                                <a href=""><FaFacebook /></a>
                            </div>
                            <div className="linkedin">
                                <a href=""><AiFillLinkedin /></a>
                            </div>
                            <div className="instagram">
                                <a href=""><AiFillInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-details">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-32">
                                <span class="text-3xl"><img src={SanjibKumar} alt="" /></span>
                            </div>
                            <Link className='team-member-details-link' to='/'><RiExternalLinkFill /></Link>
                        </div>
                        <h2>SANJIB KUMAR SARKER</h2>
                        <p>Founder & CEO</p>
                        <div className="team-member-social-link">
                            <div className="facebook">
                                <a href=""><FaFacebook /></a>
                            </div>
                            <div className="linkedin">
                                <a href=""><AiFillLinkedin /></a>
                            </div>
                            <div className="instagram">
                                <a href=""><AiFillInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member-details">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-32">
                                <span class="text-3xl"><img src={SanjibKumar} alt="" /></span>
                            </div>
                            <Link className='team-member-details-link' to='/'><RiExternalLinkFill /></Link>
                        </div>
                        <h2>SANJIB KUMAR SARKER</h2>
                        <p>Founder & CEO</p>
                        <div className="team-member-social-link">
                            <div className="facebook">
                                <a href=""><FaFacebook /></a>
                            </div>
                            <div className="linkedin">
                                <a href=""><AiFillLinkedin /></a>
                            </div>
                            <div className="instagram">
                                <a href=""><AiFillInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;