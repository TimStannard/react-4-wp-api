import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { ArrowLeft } from 'react-bootstrap-icons';
import PlaceholderImage from "../../assets/placeholder-no-image.png"

const key = process.env.REACT_APP_WOO_KEY
const secret = process.env.REACT_APP_WOO_SECRET
const baseUrl = process.env.REACT_APP_WOO_BASEURL

const api = new WooCommerceRestApi({
    url: baseUrl,
    consumerKey: key,
    consumerSecret: secret,
    version: "wc/v3",
    axiosConfig: {
        headers: {
            // "Content-Type": "application/json"
        }
    }
});

// console.log(api)

const addToCart = (productId) => {
    console.log("added")

    const data = {
        id: productId
    }

    api.post("cart/items", data, {
        url: baseUrl,
        consumerKey: key,
        consumerSecret: secret,
        version: "wc/v3"
    })
        .then((response) => {
            if (response.status === 200) {
                // setProduct(response.data);
                // setLoaded(true);
                console.log(response);
            }
        })
        .catch((error) => {
            // Invalid request, for 4xx and 5xx statuses
            console.log("Response Status:", error.response.status);
            console.log("Response Headers:", error.response.headers);
            console.log("Response Data:", error.response.data);
        })

    // api.post("products", {
    //     name: "Premium Quality",
    //     type: "simple",
    //     regular_price: "21.99",
    // })
    //     .then((response) => {
    //         // Successful request
    //         console.log("Response Status:", response.status);
    //         console.log("Response Headers:", response.headers);
    //         console.log("Response Data:", response.data);
    //     })
    //     .catch((error) => {
    //         // Invalid request, for 4xx and 5xx statuses
    //         console.log("Response Status:", error.response.status);
    //         console.log("Response Headers:", error.response.headers);
    //         console.log("Response Data:", error.response.data);
    //     })
    //     .finally(() => {
    //         // Always executed.
    //     });


}

const SingleProduct = () => {
    // use empty array to indicate expected data
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // grab our router dependencies
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();

    // The function passed to useEffect will run after the render is committed to the screen
    // Use effect will call something once, if we give it an empty dependencies array
    // An empty dependencies array indicates the useEffect will act as a mount and only executes once.
    // The dependencies array determines how often the useEffect will run.
    // If the dependencies array changes, it triggers the use effect.
    useEffect(() => {
        fetchProduct();
    }, []);

    // the Woocommerce API is similar to axios, but needs a useEffect to function,
    // otherwise there will be a loop as the component rerenders every time you change the state
    // so it fetches - changes state - renders again - changes state - etc
    let fetchProduct = () => {
        api.get(`products/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    setProduct(response.data);
                    setLoaded(true);
                }
            })
            .catch((error) => { });
    };

    // ------------console log here------------
    // we will see three console logs, one before the api fetches, 
    // and another when it's fetched
    // and another when the image is checked
    // console.log(products)
    // this is because the component has rendered twice, as the state has updated twice
    // once before the data has arrived (loading message)
    // once after the data has arrived
    // ::::::::::::::::::::::::
    // console.log(product)
    // ::::::::::::::::::::::::
    // fucntion to render all the products

    const RenderedProduct = () => {
        // return an image
        const GetImageOrPlaceholder = () => {
            if (product.images.length > 0) {
                return (
                    <img src={product.images[0].src} alt={product.title} />
                )
            } else {
                return (
                    <img src={PlaceholderImage} alt="placeholder" />
                )
            }
        }
        return (
            <>
                <div className="product-container item-container">
                    <h4 className="name">{product.name}</h4>
                    <GetImageOrPlaceholder />
                    <h3>${product.price}</h3>
                </div>
                <div id="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
                <div id="tools">
                    <button id="add-to-cart-button" className="regular-button" onClick={() => addToCart(params.id)}>Add to cart</button>
                    <button onClick={() => navigate(-1)} className="regular-button"><ArrowLeft /> Go Back</button>
                </div>
            </>
        )
    }

    // // our own loading and finished logic
    if (loaded === true) {
        // console.log(product)
        if (product) {
            return (
                <>
                    <RenderedProduct />
                </>
            )
        } else {
            return "No products found"
        }
    } else {
        return "Loading..."
    }
}

const Product = () => {
    return (
        <div id="shop-page" className="page-container">
            <SingleProduct />
        </div>

    )
}

export default Product

