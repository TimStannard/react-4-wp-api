import { useAxios } from "use-axios-client";
import { Link, useParams, useNavigate } from "react-router-dom";
import PlaceholderImage from "../assets/placeholder-no-image.png"
// Placeholder retrieved from...
// https://classnotes.marquette.edu/wp-content/uploads/2019/11/placeholder-no-image.png
import { ArrowLeft } from 'react-bootstrap-icons';

// get our env variable, the baseURL
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

// ------------This function:------------
// - gets new from api
// - renders Artist based on the API data

const RenderedArtist = () => {
    // ----declare our react router functions
    // 👇️ get ID from url
    const params = useParams();
    // go back function needs navigate
    const navigate = useNavigate();

    // ----declare endpoint
    const endpoint = `${baseUrl}/artists/${params.id}?_embed`

    const { data: artist, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!artist) return "No data...";
    if (artist.length === 0) return "No results found!";
    if (error) return "Error!";
    // console.log(data)

    // ----This function shows the Artist on the screen------
    const Image = () => {
        if (artist._embedded['wp:featuredmedia']) {
            return (
                <img src={artist._embedded['wp:featuredmedia']['0'].source_url} alt={artist.title.rendered} />
            )
        } else {
            return (
                <img src={PlaceholderImage} alt="placeholder" />
            )
        }
    }

    const Genres = () => {
        // get the term
        // console.log(data._links["wp:term"][0].href)
        const taxonomyEndpoint = artist._links["wp:term"][0].href;
        let { data: taxonomies, error } = useAxios({
            url: taxonomyEndpoint
        })
        // if (loading) return "Loading...";
        if (!taxonomies) return null;
        if (taxonomies.length === 0) return null;
        if (error) return "Error getting taxonomy!";
        // console.log(taxonomies)

        const renderedTaxonomies = taxonomies.map((taxomomy, index) => {
            return (
                <Link to={`/genre/${taxomomy.id}`} key={index}>
                    <span className="taxonomy-term-pill">
                        {taxomomy.name}
                    </span>
                </Link>

            )
        })

        return (
            <div>
                {renderedTaxonomies}
            </div>
        )
    }

    return (
        <div className="single-artist-container item-container">
            <Image />
            <h4 className="title">{artist.title.rendered}</h4>
            <Genres />
            <div className="mb-2" dangerouslySetInnerHTML={{ __html: artist.content.rendered }} />
            <button onClick={() => navigate(-1)} className="regular-button"><ArrowLeft /> Go Back</button>
        </div>
    )
}

// -----This is our main component we export-----

const ArtistItem = () => {
    return (
        <div id="Artist-page" className="page-container">
            <RenderedArtist />
        </div>
    )
}

export default ArtistItem