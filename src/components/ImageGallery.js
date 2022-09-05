import { useAxios } from "use-axios-client";
import React from 'react'

// ------------This function:------------
// - gets images from api
// - renders images based on the API data

const Images = (props) => {
    // console.log(props);

    // declare endpoint
    const endpoint = `https://pixabay.com/api/?key=23357829-9b7269d284a8f7fd567a2b936&q=${props.imageType}&orientation=horizontal&per_page=3`

    const { data, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!data) return "No data...";
    if (data.hits.length === 0) return "No results found!";
    if (error) return "Error!";
    // console.log(data)

    // ----This function shows the cats on the screen------
    const renderedImages = data.hits.map((photo, index) => {
        return (
            <div className="photo-container" key={index}>
                <img className="photo" src={photo.largeImageURL} alt={photo.user} />
                <h4 className="name">{photo.user}</h4>
            </div>
        )
    })

    // ----this is the return function for AllCats()----
    // we return the rendered cats
    return (
        <>
            {renderedImages}
        </>
    )
}

// -----This is our main component we export-----

const ImageGallery = (props) => {
    return (
        <>
            <h2>{props.type} images</h2>
            <div className="results">
                <Images imageType={props.type} />
            </div>
        </>
    )
}

export default ImageGallery