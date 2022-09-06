import { useAxios } from "use-axios-client";
import React from 'react'
import { Link, useParams } from "react-router-dom";

// ------------This function:------------
// - gets images from api
// - renders images based on the API data

const GetDino = () => {
    // 👇️ get ID from url
    const params = useParams();
    // console.log(params);

    // declare endpoint
    const endpoint = `http://localhost/wordpress/wp-json/wp/v2/dinosaurs/${params.id}?_embed`

    const { data, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!data) return "No data...";
    if (data.length === 0) return "No results found!";
    if (error) return "Error!";
    console.log(data)

    // ----This function shows the dino on the screen------
    return (
        <div className="single-dino-container">
            <h2>{data.title.rendered}</h2>
            <img src={data._embedded['wp:featuredmedia']['0'].source_url} alt={data.title.rendered} />
            <div id="content" dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
            <Link className="regular-button" to='/dinosaurs'>Go Back</Link>
        </div>
    )
}

const SingleDinosaur = () => {
    return (
        <div id="dinosaur-item-page">
            <GetDino />
        </div>
    )
}

export default SingleDinosaur