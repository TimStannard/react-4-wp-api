import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import PlaceholderImage from "../../assets/placeholder-no-image.png"
import { useAxios } from "use-axios-client";

const key = process.env.REACT_APP_WOO_KEY
const secret = process.env.REACT_APP_WOO_SECRET
const baseUrl = process.env.REACT_APP_WOO_BASEURL

const AllProducts = () => {

    // declare endpoint
    const endpoint = `${baseUrl}//wp-json/wc/store/v1/products`

    const { data: products, error, loading } = useAxios({
        url: endpoint
    })

    // ----Check if photos have been returned----
    if (loading) return "Loading...";
    if (!products) return "No data...";
    if (products.length === 0) return "No results found!";
    if (error) return "Error!";
    // console.log(products)



    // ----This function shows the products on the screen------
    const renderedProducts = products.map((product, index) => {
        const GetImageOrPlaceholder = () => {
            if (product.images.length > 0) {
                return (
                    <img src={product.images[0].src} alt={product.name} />
                )
            } else {
                return (
                    <img src={PlaceholderImage} alt="placeholder" />
                )
            }
        }
        return (
            <div className="product-container item-container" key={index}>
                <Link className="product-link" to={`/product/${product.id}`} >
                    <GetImageOrPlaceholder />
                    <h4 className="name">{product.name}</h4>
                </Link>
                <h3 className="name">${product.prices.price}</h3>

            </div>

        )
    })

    return (
        <>
            {renderedProducts}
        </>
    )
}

const Shopfront = () => {
    return (
        <div id="shop-page" className="page-container">
            <h2>Shop</h2>
            <div id="product-grid" className="grid-container">
                <AllProducts />
            </div>
        </div>
    )
}

export default Shopfront