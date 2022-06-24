import React from 'react';
import CountUp from 'react-countup';
import './Achivement.css'

const Achivement = () => {
    return (
        <div className="achivement-container">
            <h2 className='achivement-title'><span>Achivement</span></h2>
            <div className='achivement-area'>
                <div className="project-area">
                    <div className="project">
                        <div><CountUp start={0} end={12} delay={2}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp></div>
                        <div>+</div>
                    </div>
                    <h2>Ongoing Projects</h2>
                </div>
                <div className="team-area">
                    <div className="team">
                        <div><CountUp start={15} end={60} delay={2}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp></div>
                        <div>+</div>
                    </div>
                    <h2>Expert Team Members</h2>
                </div>
                <div className="customer-area">
                    <div className="customer">
                        <div><CountUp start={80} end={100} delay={2}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp></div>
                        <div>+</div>
                    </div>
                    <h2>Happy Customers</h2>
                </div>

            </div>
        </div>
    );
};

export default Achivement;