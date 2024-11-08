import { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav">
            <div className="burger-menu" onClick={toggleMenu}>
                <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="menu">Menu</NavLink>
                <NavLink to="/">Reservation</NavLink>
                <NavLink to="/">Order online</NavLink>
                <NavLink to="/">Login</NavLink>
            </ul>
        </nav>
    );
};

export default Nav;