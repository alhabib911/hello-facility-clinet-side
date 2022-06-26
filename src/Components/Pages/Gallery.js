import React from 'react';
import HeaderContact from '../Pages/HeaderContact';
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import useGallery from '../hooks/useGallery';
import Gallerys from './Gallerys';
import './Gallery.css'


const Gallery = () => {
    const [gallery] = useGallery()
    console.log(gallery);
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
                <div className="gallery-container">
                    <div className="gallery-area">
                        <div className="gallery-title">
                            <h2>Gallery</h2>
                        </div>
                        <div className="gallery-img">
                            {
                                gallery.map(gallery=> <Gallerys
                                    gallery={gallery}
                                ></Gallerys>)
                            }
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;