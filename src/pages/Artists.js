import { useAxios } from "use-axios-client";
import React from 'react'
import { Link } from "react-router-dom";
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

// ------------This function:------------
// - gets images from api
// - renders images based on the API data


const AllArtists = () => {
    // console.log(props);

    // declare endpoint
    const endpoint = `${baseUrl}/artists?_embed`

    const { data, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!data) return "No data...";
    if (data.length === 0) return "No results found!";
    if (error) return "Error!";
    // console.log(data)

    // ----This function shows the cats on the screen------
    const renderedArtists = data.map((artist, index) => {
        return (
            <div className="artist-container item-container" key={index}>
                <Link className="artists-link" to={`/artist/${artist.id}`} >
                    <img src={artist._embedded['wp:featuredmedia']['0'].source_url} alt={artist.title.rendered} />
                    <h4 className="name">{artist.title.rendered}</h4>
                </Link>
            </div>

        )
    })
    // ----this is the return function for AllCats()----
    // we return the rendered cats
    return (
        <>
            {renderedArtists}
        </>
    )
}

// -----This is our main component we export-----

const Artists = () => {
    return (
        <div id="artists-page" className="page-container">
            <h2>Artists</h2>
            <div id="artists-grid" className="grid-container">
                <AllArtists />
            </div>
        </div>
    )
}

export default Artists