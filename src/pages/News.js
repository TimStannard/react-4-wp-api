import { useAxios } from "use-axios-client";
import { Link } from "react-router-dom";
import PlaceholderImage from "../assets/placeholder-no-image.png"
// Note: Placeholder retrieved from...
// https://classnotes.marquette.edu/wp-content/uploads/2019/11/placeholder-no-image.png

// get our env variable, the baseURL
const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

// ------------This function:------------
// - gets new from api
// - renders news based on the API data

const AllNews = () => {
    // declare endpoint
    const endpoint = `${baseUrl}/posts?_embed`
    const { data: newsPosts, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!newsPosts) return "No data...";
    if (newsPosts.length === 0) return "No results found!";
    if (error) return "Error!";
    console.log(newsPosts)

    // ----This function shows the news on the screen------
    const renderedNews = newsPosts.map((post, index) => {
        const GetImageOrPlaceholder = () => {
            if (post._embedded['wp:featuredmedia']) {
                return (
                    <img src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title.rendered} />
                )
            } else {
                return (
                    <img src={PlaceholderImage} alt="placeholder" />
                )
            }
        }
        return (
            <div className="post-container item-container" key={index}>
                <GetImageOrPlaceholder />
                <h4 className="title">{post.title.rendered}</h4>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <Link className="post-link" to={`/news/${post.id}`}>
                    Read more
                </Link>
            </div>
        )
    })

    // return the rendered News
    return (
        <>
            {renderedNews}
        </>
    )
}

// -----This is our main component we export-----

const News = () => {
    return (
        <div id="news-page" className="page-container">
            <h2>Latest News</h2>
            <div id="news-grid" className="grid-container">
                <AllNews />
            </div>
        </div>
    )
}

export default News