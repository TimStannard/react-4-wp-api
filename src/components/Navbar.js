import React, { Component, useState } from 'react'
import { List, X } from 'react-bootstrap-icons';
import MobileMenu from './MobileMenu'
// router
import { Link } from "react-router-dom";

const Navbar = () => {
    // we need to include on and off state in navbar so we can open the navbar/close button
    // declare our menu state and a function to openMenu
    const [menuIsOpen, openMenu] = useState(false);
    // this function toggles the state of openMenu
    const toggleMobileMenu = () => {
        // test open only using true
        // openMenu(true);
        openMenu(!menuIsOpen);
    };

    return (
        <>
            <div id='topnav'>

                <div id='logo'>
                    <Link to="/">Wordpress</Link>
                </div>


                {/* Desktop Menu, which only appears on large screens */}
                <ul id='menu'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dinosaurs">Dinosaurs</Link>
                    </li>
                    <li>
                        <Link className="test" to="/news">News</Link>
                    </li>
                </ul>

                {/* Hamburger icon, only shows up on small screens. */}
                <div id="menu-container">
                    <button id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                        <List id="hamburger-icon" />
                    </button>
                </div>
            </div>

            {/* If menuIsOpen, show the mobile menu*/}
            {menuIsOpen && <MobileMenu />}
            {/* If menuIsOpen, show the close button */}
            {menuIsOpen &&
                (
                    <button id="close-nav-menu" onClick={toggleMobileMenu}>
                        <X />
                    </button>
                )
            }
        </>
    )
}

export default Navbar
