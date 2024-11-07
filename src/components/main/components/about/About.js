import "./About.css"
import owner1 from "../../../../assets/owners1.png"
import owner2 from "../../../../assets/owners2.png"

const About = () => {
    return (
        <div className="about-section">
            <div className="text-content">
                <h1>Who We Are</h1>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                     below for those interested. Sections 1.10.32 and 1.10.33 from
                     The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
                     for those interested. Sections 1.10.32 and 1.10.33 from The standard chunk of Lorem
                      Ipsum used since the 1500s is reproduced below for those interested.
                      Sections 1.10.32 and 1.10.33 from
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