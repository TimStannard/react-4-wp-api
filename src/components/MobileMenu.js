// router
import { Link } from "react-router-dom";
import { X } from 'react-bootstrap-icons';

const MobileMenu = ({ closeMethod }) => {
    return (
        <>
            <button id="close-nav-menu" onClick={closeMethod}>
                <X />
            </button>
            <ul id='mobile-menu'>
                <li>
                    <Link to="/" onClick={closeMethod}>Home</Link>
                </li>
                <li>
                    <Link to="/dinosaurs" onClick={closeMethod}>Dinosaurs</Link>
                </li>
                <li>
                    <Link to="/news" onClick={closeMethod}>News</Link>
                </li>
                <li>
                    <Link to="/artists" onClick={closeMethod}>Artists</Link>
                </li>
                <li>
                    <Link to="/shop" onClick={closeMethod}>Shop</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMethod}>Contact</Link>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu

// Rendering the list of links using Map, and assigning onClicks to all

// https://stackoverflow.com/questions/51915125/react-jsx-how-to-avoid-multiple-onclick-handlers-for-multiple-elements

