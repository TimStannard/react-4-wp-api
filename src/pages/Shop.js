import React from 'react'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const key = process.env.REACT_APP_WOO_KEY
const secret = process.env.REACT_APP_WOO_SECRET
const baseUrl = process.env.REACT_APP_WOO_BASEURL

const api = new WooCommerceRestApi({
    url: baseUrl,
    consumerKey: key,
    consumerSecret: secret,
    version: "wc/v3"
});

console.log(api)

// const getProducts = () => {
//     // use empty array to indicate expected data
//     const [products, setProducts] = useState([]);

//     api.get("products")
//         .then((response) => {
//             if (response.status === 200) {
//                 setProducts(response.data);
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     console.log(products);
//     // const renderedProducts = products.map((artist, index) => {
//     //     return (
//     //         <div className="artist-container item-container" key={index}>
//     //             <Link className="artists-link" to={`/artist/${artist.id}`} >
//     //                 <img src={artist._embedded['wp:featuredmedia']['0'].source_url} alt={artist.title.rendered} />
//     //                 <h4 className="name">{artist.title.rendered}</h4>
//     //             </Link>
//     //         </div>

//     //     )
//     // })
// }

const Shop = () => {
    return (
        <div>
            Shop
            {/* <getProducts /> */}
        </div>
    )
}

export default Shop