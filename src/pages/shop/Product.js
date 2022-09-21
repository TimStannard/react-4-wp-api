import { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft } from 'react-bootstrap-icons'
import PlaceholderImage from "../../assets/placeholder-no-image.png"
import { useAxios } from "use-axios-client"
// our utilities
import addToCart from "./utilities/addToCart.js"
import Notification from "./utilities/Notification.js"
// get base URL
const baseUrl = process.env.REACT_APP_WOO_BASEURL

const SingleProduct = () => {
    // set up variables which check if product was added to cart
    const [responseRecieved, updateResponse] = useState(false)
    const [notification, updateNotification] = useState("")
    const [buttonStatus, updateButtonStatus] = useState("Add to cart")

    // router set up
    const params = useParams();
    const navigate = useNavigate();

    const endpoint = `${baseUrl}/wp-json/wc/store/v1/products/${params.id}`

    const { data: product, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if products have been returned----
    if (loading) return "Loading...";
    if (!product) return "No data...";
    if (product.length === 0) return "No results found!";
    if (error) return "Error!";
    // console.log(product)

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
                <button id="add-to-cart-button" className="regular-button" onClick={() => { addToCart(product.id, updateResponse, updateNotification, updateButtonStatus) }}>{buttonStatus}</button>
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

