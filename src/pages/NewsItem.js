import { useAxios } from "use-axios-client";
import React from 'react'
import { Link, useParams } from "react-router-dom";
import PlaceholderImage from "../assets/placeholder-no-image.png"
// Placeholder retrieved from...
// https://classnotes.marquette.edu/wp-content/uploads/2019/11/placeholder-no-image.png

// get our env variable, the baseURL
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

// ------------This function:------------
// - gets new from api
// - renders news based on the API data

const RenderedNewsPost = () => {
    // 👇️ get ID from url
    const params = useParams();
    // console.log(params);

    // declare endpoint
    const endpoint = `${baseUrl}/posts/${params.id}?_embed`

    const { data: newsPost, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!newsPost) return "No data...";
    if (newsPost.length === 0) return "No results found!";
    if (error) return "Error!";
    console.log(newsPost)

    // ----This function shows the news on the screen------
    const CheckImage = () => {
        if (newsPost._embedded['wp:featuredmedia']) {
            return (
                <img src={newsPost._embedded['wp:featuredmedia']['0'].source_url} alt={newsPost.title.rendered} />
            )
        } else {
            return (
                <img src={PlaceholderImage} alt="placeholder image" />
            )
        }
    }

    return (
        <div className="post-container item-container">
            <CheckImage />
            <h4 className="title">{newsPost.title.rendered}</h4>
            <div className="mb-2" dangerouslySetInnerHTML={{ __html: newsPost.content.rendered }} />
            <Link className="regular-button" to='/news'>Go Back</Link>
        </div>
    )
}

// -----This is our main component we export-----

const NewsItem = () => {
    return (
        <div id="news-page" className="page-container">
            <RenderedNewsPost />
        </div>
    )
}

export default NewsItem