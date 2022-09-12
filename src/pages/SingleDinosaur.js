import { useAxios } from "use-axios-client";
import React from 'react'
import { Link, useParams } from "react-router-dom";
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

// ------------This function:------------
// - gets images from api
// - renders images based on the API data

const GetDino = () => {
    // 👇️ get ID from url
    const params = useParams();
    // console.log(params);

    // declare endpoint
    const endpoint = `${baseUrl}/dinosaurs/${params.id}?_embed`

    const { data: dino, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!dino) return "No data...";
    if (dino.length === 0) return "No results found!";
    if (error) return "Error!";
    // console.log(dino)

    // ----This function shows the dino on the screen------
    return (
        <div className="single-dino-container">
            <h2>{dino.title.rendered}</h2>
            <img src={dino._embedded['wp:featuredmedia']['0'].source_url} alt={dino.title.rendered} />
            <h3>Nickname: {dino.acf.nickname}</h3>
            <h3>Diet: {dino.acf.diet}</h3>
            <br />
            <div id="content" dangerouslySetInnerHTML={{ __html: dino.content.rendered }} />
            <Link className="regular-button" to='/dinosaurs'>Go Back</Link>
        </div>
    )
}

const SingleDinosaur = () => {
    return (
        <div id="dinosaur-item-page" className="page-container">
            <GetDino />
        </div>
    )
}

export default SingleDinosaur