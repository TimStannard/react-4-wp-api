import { useAxios } from "use-axios-client";
import React from 'react'
import { Link } from "react-router-dom";
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

// ------------This function:------------
// - gets images from api
// - renders images based on the API data


const AllDinosaurs = () => {
    // console.log(props);

    // declare endpoint
    const endpoint = `${baseUrl}/dinosaurs?_embed`

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
    const renderedDinos = data.map((dino, index) => {
        return (
            <Link className="dinosaurs-link" to={`/dinosaur/${dino.id}`} key={index}>
                <div className="dino-container item-container">
                    <img src={dino._embedded['wp:featuredmedia']['0'].source_url} alt={dino.title.rendered} />
                    <h4 className="name">{dino.title.rendered}</h4>
                    {/* <div dangerouslySetInnerHTML={{ __html: dino.content.rendered }} />  */}
                </div>
            </Link>
        )
    })

    // ----this is the return function for AllCats()----
    // we return the rendered cats
    return (
        <>
            {renderedDinos}
        </>
    )
}

// -----This is our main component we export-----

const Dinosaurs = () => {
    return (
        <div id="dinosaurs-page" className="page-container">
            <h2>Dinosaurs</h2>
            <div id="dinosaurs-grid" className="grid-container">
                <AllDinosaurs />
            </div>
        </div>
    )
}

export default Dinosaurs