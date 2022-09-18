import React, { useState } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import PlaceholderImage from "../../assets/placeholder-no-image.png"
import { useAxios } from "use-axios-client"
import { useNavigate } from "react-router-dom";

// get base URL
const baseUrl = process.env.REACT_APP_WOO_BASEURL

const CheckoutForm = () => {

    return (
        <>
            <h2>Payment successful</h2>
        </>
    )
}


const Checkout = () => {
    const navigate = useNavigate()
    return (
        <>
            <div id="checkout-page" className="page-container">
                <CheckoutForm />
                <button onClick={() => navigate(-1)} className="regular-button"><ArrowLeft /> Go Back</button>
            </div>

        </>
    )
}

export default Checkout

