import React from 'react';
import './Goal.css'

const Goal = () => {
    return (
        <div className='goal-container'>
            <div className="mission">
                <h2>Mission</h2>
                <p>To enhance the reputation of Hello Facility as a leader in Facility service and every aspect of our business by achieving sustainable, quality growth and creating winning culture.</p>
            </div>
            <div className="vision">
                <h2>Vision</h2>
                <p>We believe that our first responsibility is to our clients and others who use our services, and to our employees, who contribute with their effort and commitment to delivering our services in a safe and timely manner.</p>
            </div>
            <div className="values">
                <h2>Values</h2>
                <p>Saftey, Integrity, Accountability, Quality Collaboration, Customer Excellence and Dynamic Culture.</p>
            </div>
        </div>
    );
};

export default Goal;