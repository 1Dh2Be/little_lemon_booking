import { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

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
                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink to="about" onClick={closeMenu}>About</NavLink>
                <NavLink to="menu" onClick={closeMenu}>Menu</NavLink>
                <NavLink to="reservation" onClick={closeMenu}>Reservation</NavLink>
                <NavLink to="/" onClick={closeMenu}>Order online</NavLink>
            </ul>
        </nav>
    );
};

export default Nav;