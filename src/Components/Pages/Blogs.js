import React from 'react';
import './Blog.css'

const Blogs = (props) => {
    const { _id, name, details, img } = props.blog
    return (
        <div>
            <div className="blogs-area">
                <div className="blogs-img">
                    <img src={img} alt="" />
                </div>
                <div className="blog-text">
                    <h3>Blog Title: {name}</h3>
                    <p><small>{details}</small></p>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;