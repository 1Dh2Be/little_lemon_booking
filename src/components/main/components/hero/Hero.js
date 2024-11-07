import './Hero.css';
import Dish from "../../../../assets/Frame 9.png"

const Hero = () => {
    return (
        <section className="hero">
            <div className="content-container">
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className='book-table-btn'>Book Table</button>
                </div>
                <div className="hero-image">
                    <img src={Dish} alt="Featured dish" />
                </div>
            </div>
        </section>
    );
}

export default Hero;