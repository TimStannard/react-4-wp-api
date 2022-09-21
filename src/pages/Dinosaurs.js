import { useAxios } from "use-axios-client";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

// ------------This function:------------
// - gets dinos from api
// - renders dinos based on the API data


const AllDinosaurs = () => {
    // console.log(props);

    // declare endpoint
    const endpoint = `${baseUrl}/dinosaurs?_embed`

    const { data: dinosaurs, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!dinosaurs) return "No data...";
    if (dinosaurs.length === 0) return "No results found!";
    if (error) return "Error!";
    // console.log(data)

    // ----This function shows the dinos on the screen------
    const renderedDinos = dinosaurs.map((dino, index) => {
        return (
            <div className="dino-container item-container" key={index}>
                <Link className="dinosaurs-link" to={`/dinosaur/${dino.id}`} >
                    <img src={dino._embedded['wp:featuredmedia']['0'].source_url} alt={dino.title.rendered} />
                    <h4 className="name">{dino.title.rendered}</h4>
                </Link>
                <p><b>Nickname: </b>{dino.acf.nickname}</p>
                {/* <div dangerouslySetInnerHTML={{ __html: dino.content.rendered }} />  */}
            </div>

        )
    })
    // we return the rendered dinos
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