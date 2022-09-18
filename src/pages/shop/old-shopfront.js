import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import PlaceholderImage from "../../assets/placeholder-no-image.png"

const key = process.env.REACT_APP_WOO_KEY
const secret = process.env.REACT_APP_WOO_SECRET
const baseUrl = process.env.REACT_APP_WOO_BASEURL

// const api = new WooCommerceRestApi({
//     url: baseUrl,
//     consumerKey: key,
//     consumerSecret: secret,
//     version: "wc/v3",
//     axiosConfig: {
//         headers: {}
//     }
// });

// console.log(api)

// const AllProducts = () => {
//     // use empty array to indicate expected data
//     const [products, setProducts] = useState([]);
//     const [loaded, setLoaded] = useState(false);

//     // The function passed to useEffect will run after the render is committed to the screen
//     // use effect will call something once, if we give it an empty dependencies array
//     // An empty dependencies array indicates the useEffect will act as a mount and only executes once.
//     // The dependencies array is a way to trigger the use effect. If you put a prop in there instead of an empty array [], the useEffect would only run when that prop is changed.
//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     // the Woocommerce API is similar to axios, but needs a useEffect to function,
//     // otherwise there will be a loop as the component rerenders every time you change the state
//     // so it fetches - changes state - renders again - changes state - etc
//     let fetchProducts = () => {
//         api.get("products")
//             .then((response) => {
//                 if (response.status === 200) {
//                     setProducts(response.data);
//                     setLoaded(true);
//                 }
//             })
//             .catch((error) => { });
//     };
//     // ------------console log here------------
//     // we will see two console logs, one before the api fetches, 
//     // and another when it's fetched
//     // console.log(products)
//     // this is because the component has rendered twice, as the state has updated twice
//     // once before the data has arrived (loading message)
//     // once after the data has arrived

//     // fucntion to render all the products
//     const renderedProducts = products.map((product, index) => {
//         const GetImageOrPlaceholder = () => {
//             if (product.images.length > 0) {
//                 return (
//                     <img src={product.images[0].src} alt={product.title} />
//                 )
//             } else {
//                 return (
//                     <img src={PlaceholderImage} alt="placeholder" />
//                 )
//             }
//         }
//         return (
//             <div className="product-container item-container" key={index}>
//                 <Link className="product-link" to={`/product/${product.id}`} >
//                     <GetImageOrPlaceholder />
//                     <h4 className="name">{product.name}</h4>
//                     <h3>${product.price}</h3>
//                 </Link>
//             </div>
//         )
//     })

//     // our own loading and finished logic
//     if (loaded === true) {
//         console.log(products)
//         if (products.length > 0) {
//             return (
//                 <>
//                     {renderedProducts}
//                 </>
//             )
//         } else {
//             return "No products found"
//         }
//     } else {
//         return "Loading..."
//     }
// }

const Shopfront = () => {
    return (
        <div id="shop-page" className="page-container">
            <h2>Shop</h2>
            <div id="product-grid" className="grid-container">
                {/* <AllProducts /> */}
            </div>
        </div>
    )
}

export default Shopfront