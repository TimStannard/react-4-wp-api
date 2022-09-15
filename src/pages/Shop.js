import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const key = process.env.REACT_APP_WOO_KEY
const secret = process.env.REACT_APP_WOO_SECRET
const baseUrl = process.env.REACT_APP_WOO_BASEURL

const api = new WooCommerceRestApi({
    url: baseUrl,
    consumerKey: key,
    consumerSecret: secret,
    version: "wc/v3",
    axiosConfig: {
        headers: {}
    }
});

// console.log(api)

const AllProducts = () => {
    // use empty array to indicate expected data
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // use effect will call something once
    // An empty dependencies array indicates the useEffect will act as a mount and only executes once.
    useEffect(() => {
        fetchProducts();
    }, []);

    // the woocommerce API is similar to axios, but needs a useEffect to function
    // otherwise there will be a loop as the component rerenders every time you change the state
    // so it fetches - changes state - renders again - etc
    let fetchProducts = () => {
        api
            .get("products")
            .then((response) => {
                if (response.status === 200) {
                    setProducts(response.data);
                    setLoaded(true);
                }
            })
            .catch((error) => { });
    };
    // we will see two console logs, one before the api fetches, 
    // and another when it's fetched



    const renderedProducts = products.map((product, index) => {
        return (
            <div className="product-container item-container" key={index}>
                <Link className="product-link" to={`/product/${product.id}`} >
                    <img src={product.images[0].src} alt={product.name} />
                    <h4 className="name">{product.name}</h4>
                </Link>
            </div>

        )
    })

    if (loaded === true) {
        // console.log(products)
        if (products.length > 0) {
            return (
                <>
                    {renderedProducts}
                </>
            )
        } else {
            return "No products found"
        }
    } else {
        return "Loading..."
    }
}

const Shop = () => {
    return (
        <div id="shop-page" className="page-container">
            <h2>Shop</h2>
            <div id="product-grid" className="grid-container">
                <AllProducts />
            </div>
        </div>
    )
}

export default Shop