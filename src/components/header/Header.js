import './Header.css';
import Logo from "../../assets/logo.png"
import Nav from '../main/components/nav/Nav';

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={Logo} alt="Little Lemon restaurant logo"/>
            </div>
            <Nav />
        </header>
    )
}

export default Header