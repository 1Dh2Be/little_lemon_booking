import Logo from "../../assets/logo.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="site-footer">

            <div className="footer-content">

                <div className="footer-branding">
                    <img src={Logo} alt="Little Lemon restaurant logo"/>
                </div>

                <section className="footer-links">
                    <h2>Navigation</h2>
                    <nav aria-label="Main navigation">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservation">Reservation</a></li>
                            <li><a href="/order">Order online</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </nav>
                </section>

                <section className="footer-links">
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="#">Address</a></li>
                        <li><a href="tel:#">Phone Number</a></li>
                        <li><a href="mailto:#">Email</a></li>
                    </ul>
                </section>

                <section className="footer-links">
                    <h2>Socials</h2>
                    <nav aria-label="Social media links">
                        <ul>
                            <li><a href="#" aria-label="Visit our Facebook page">Facebook</a></li>
                            <li><a href="#" aria-label="Visit our Instagram profile">Instagram</a></li>
                            <li><a href="#" aria-label="Visit our LinkedIn page">LinkedIn</a></li>
                            <li><a href="#" aria-label="Visit our X profile">X</a></li>
                        </ul>
                    </nav>
                </section>
            </div>
        </footer>
    )
}

export default Footer