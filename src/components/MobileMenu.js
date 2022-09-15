import React from 'react'
// router
import { Link } from "react-router-dom";

const MobileMenu = (props) => {
    // console.log(props);
    const closeModal = props.closeMethod;
    return (
        <>
            <ul id='mobile-menu'>
                <li>
                    <Link to="/" onClick={closeModal}>Home</Link>
                </li>
                <li>
                    <Link to="/dinosaurs" onClick={closeModal}>Dinosaurs</Link>
                </li>
                <li>
                    <Link to="/news" onClick={closeModal}>News</Link>
                </li>
                <li>
                    <Link to="/artists">Artists</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeModal}>Contact</Link>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu

// Rendering the list of links using Map, and assigning onClicks to all

// https://stackoverflow.com/questions/51915125/react-jsx-how-to-avoid-multiple-onclick-handlers-for-multiple-elements

