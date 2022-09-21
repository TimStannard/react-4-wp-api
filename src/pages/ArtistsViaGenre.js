import { useAxios } from "use-axios-client";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from 'react-bootstrap-icons';

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;


// ------------This function:------------
// - gets images from api
// - renders images based on the API data

const GenreName = () => {
    const params = useParams();
    // get genre name based from API endpoint
    const genreEndpoint = `${baseUrl}/genre/${params.id}`
    const { data: genre, error } = useAxios({
        url: genreEndpoint
    })

    // ----Check if photos have been returned----
    if (!genre) return null;
    if (genre.length === 0) return null;
    if (error) return "Error getting genre title"
    const genreName = genre.name;

    // ----this is the return function for AllArtists()----
    // we return the rendered artists via genre
    return (
        <>
            <h2>All Artists</h2>
            <h3>Genre: {genreName}</h3>
        </>
    )
}

const AllArtistsInGenre = () => {
    const params = useParams();
    // declare endpoint
    const endpoint = `${baseUrl}/artists?genre=${params.id}&_embed`

    const { data: artists, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!artists) return "No data...";
    if (artists.length === 0) return "No results found!";
    if (error) return "Error!";
    // console.log(artists)

    // ----This function shows the artists on the screen------
    const renderedArtists = artists.map((artist, index) => {
        return (
            <div className="artist-container item-container" key={index}>
                <Link className="artists-link" to={`/artist/${artist.id}`} >
                    <img src={artist._embedded['wp:featuredmedia']['0'].source_url} alt={artist.title.rendered} />
                    <h4 className="name">{artist.title.rendered}</h4>
                </Link>
            </div>

        )
    })


    // ----this is the return function for AllArtists()----
    // we return the rendered artists via genre
    return (
        <>
            {renderedArtists}
        </>
    )
}

// -----This is our main component we export-----

const ArtistsViaGenre = () => {
    const navigate = useNavigate();
    return (
        <div id="artists-via-genre" className="page-container">
            <GenreName />
            <div id="artists-grid" className="grid-container">
                <AllArtistsInGenre />
            </div>
            <button onClick={() => navigate(-1)} className="regular-button"><ArrowLeft /> Go Back</button>
        </div>
    )
}

export default ArtistsViaGenre