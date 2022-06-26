import React from 'react';
import './AllBlog.css'

const AllBlog = (props) => {
    const { _id, name, details, img } = props.blog
    return (
        <div>
            <div className="blog-area">
                <div className="blog-img">
                <img src={img} alt="" />
                </div>
                <div className="blog-text">
                    <h3>{name}</h3>
                    <p><small>{details}</small></p>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;