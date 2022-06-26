import React from 'react';
import HeaderContact from '../Pages/HeaderContact'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import './Blog.css'
import useBlog from '../hooks/useBlog';
import Blogs from './Blogs';
import './Blog.css'
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blog] = useBlog()
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <div className="blog--container">
                <div className="blog--area">
                    <div className="blog-title">
                        <h2>Blogs</h2>
                    </div>
                    <div className="blog-details">
                        {
                            blog.slice(0, 6).map(blog => <Blogs
                                blog={blog}
                            ></Blogs>)
                        }
                    </div>
                    <div className="all-blogs-link">
                        <Link className='all-blog-link' to='/all-blogs'>See All Blog</Link>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;