import React, { Component } from 'react'
// generic image component
import ImageGallery from '../components/ImageGallery'

const Home = () => {
    return (
        <div id="home-container">
            <div className="section">
                <ImageGallery type="mountain" />
            </div>
        </div>
    )
}

export default Home