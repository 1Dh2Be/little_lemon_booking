import "./About.css"
import owner1 from "../../../../assets/owners1.png"
import owner2 from "../../../../assets/owners2.png"

const About = () => {
    return (
        <div className="about-section">
            <div className="text-content">
                <h1>Who We Are</h1>
                <p>
                Little Lemon is owned by two Italian brothers, Mario and Adrian, 
                who moved to the United States to pursue their shared dream of owning a restaurant.
                To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. 
                Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond 
                classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <div className="image-container">
                <img className="img1" src={owner1} alt="Picture of little lemon restaurant owners."/>
                <img className="img2" src={owner2} alt="Picture of little lemon restaurant owners."/>
            </div>
        </div>
    );
};

export default About