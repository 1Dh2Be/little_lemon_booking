import './Header.css';
import Logo from "../../assets/logo.png"
import Nav from '../main/components/nav/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src={Logo} alt="Little Lemon restaurant logo"/>
                </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header