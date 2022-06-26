import React from 'react';
import useBlog from '../hooks/useBlog';
import AllBlog from './AllBlog';
import Footer from './Footer';
import HeaderContact from './HeaderContact';
import Navbar from './Navbar';
import './AllBlog'

const AllBlogs = () => {
    const [blog] = useBlog()
    console.log(blog);
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <div className="all-blog-content">
                {
                    blog.map(blog => <AllBlog
                        blog={blog}
                    ></AllBlog>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBlogs;