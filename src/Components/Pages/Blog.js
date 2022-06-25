import React from 'react';
import HeaderContact from '../Pages/HeaderContact'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <div className="blog-container">
                <div className="blog-area">
                    <div className="blog-title">
                        <h2>Blogs</h2>
                    </div>
                    <div className="blog-details">
                        <div className="blog-content-img">

                        </div>
                        <div className="blog-content-title">

                        </div>
                        <div className="blog-title-para">

                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;