import React, { Component, useState } from 'react'
import { List } from 'react-bootstrap-icons';
// router
import { Link } from "react-router-dom";

const MobileMenu = () => {
    return (
        <>
            <ul id='mobile-menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dinosaurs">Dinosaurs</Link>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu
