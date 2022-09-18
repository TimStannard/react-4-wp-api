import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from 'react-bootstrap-icons';
import PlaceholderImage from "../../assets/placeholder-no-image.png"
import { useAxios } from "use-axios-client";
import axios from 'axios';

const baseUrl = process.env.REACT_APP_WOO_BASEURL

const addToCart = (productId, responseReceived, notificationMessage) => {
    // console.log("clicked add to cart")
    // console.log(added);
    // Test the co-cart is plugged in and working
    // Run a GET  to the following endpoint:
    // ​http://localhost:8888/wordpress-api/wp-json/cocart/v2/store

    const cartEndpoint = `${baseUrl}/wp-json/cocart/v2/cart/add-item`
    const idString = productId.toString();
    axios.post(cartEndpoint, {
        id: idString,
        quantity: "1"
    })
        .then((response) => {
            console.log(response);
            responseReceived(true)
            notificationMessage("Successfully added to cart!")
        })
        .catch((error) => {
            console.log(error);
            responseReceived(true)
            notificationMessage("Sorry there was a problem. Please try again later.")
        });

}

const Notification = ({ type }) => {
    // console.log(type);
    return (
        <div id="notification">
            <p>{type}</p>
        </div>
    )
}


const SingleProduct = () => {

    const [responseRecieved, updateResponse] = useState(false);
    const [notification, updateNotification] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    const endpoint = `${baseUrl}/wp-json/wc/store/v1/products/${params.id}`

    const { data: product, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!product) return "No data...";
    if (product.length === 0) return "No results found!";
    if (error) return "Error!";
    console.log(product)

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
                <h3>${product.prices.price}</h3>
            </div>
            <div id="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
            <div id="tools">
                <button id="add-to-cart-button" className="regular-button" onClick={() => { addToCart(product.id, updateResponse, updateNotification) }}>Add to cart</button>
                {/* custom message for the user when a product is added */}
                {responseRecieved && <Notification type={notification} />}
                {/* back button */}
                <button onClick={() => navigate(-1)} className="regular-button"><ArrowLeft /> Go Back</button>

            </div>

        </>
    )
}


const Product = () => {
    return (
        <>
            <div id="shop-page" className="page-container">
                <SingleProduct />
            </div>

        </>
    )
}

export default Product

