import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="menu">Menu</a></li>
              <li><a href="#">Reservation</a></li>
              <li><a href="#">Order Online</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>123 Main Street<br />Chicago, IL 60601</p>
            <p>+1 (234) 567-890</p>
            <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
          </div>
          <div className="footer-section">
            <h3>Availitbity</h3>
            <ul>
                <li>Tues-Thurs: 12pm-10pm</li>
                <li>Fri-Sun: 12pm-10pm</li>
                <li>Mon: Closed</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Socials</h3>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com" target="_blank">
                    <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                    <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank">
                    <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
            <Link to="/">
                <img className="logo" src={Logo} alt="Little Lemon restaurant logo"/>
            </Link>
          <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;