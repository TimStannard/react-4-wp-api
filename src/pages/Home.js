import React, { Component } from 'react'
// generic image component
import ImageGallery from '../components/ImageGallery'

const Home = () => {
    return (
        <div id="home-container">
            <div className="section">
                <ImageGallery type="sea" />
                <ImageGallery type="shells" />
                <ImageGallery type="mountain" />
            </div>
        </div>
    )
}

export default Home

// Note: other components we can use

