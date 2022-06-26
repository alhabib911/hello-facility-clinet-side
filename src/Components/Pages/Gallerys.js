import React from 'react';
import './Gallery.css'

const Gallerys = (props) => {
    const {_id, img} = props.gallery
    return (
        <div className='gallery-img-area'>
            <img src={img} alt="" />
        </div>
    );
};

export default Gallerys;