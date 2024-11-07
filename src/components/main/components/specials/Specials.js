import "./Specials.css"
import "./SpecialCard.css"
import greekSalad from "../../../../assets/Frame 11.png"
import lemonDessert from "../../../../assets/LemonDessert.png"
import bruchetta from "../../../../assets/Bruchetta.png"

const SpecialCard = ({ image, title, price, description }) => {
    return (
        <div className="special-card">
            <img src={image} alt={title} className="special-image" />
            <div className="special-content">
                <div className="special-header">
                    <h3>{title}</h3>
                    <span className="price">${price}</span>
                </div>
                <p className="description">{description}</p>
                <a href="/">Order Delivery Now</a>
            </div>
        </div>
    );
};



const Specials = () => {
    const specialItem = [
        {
            image: lemonDessert,
            title: "Lemon Dessert",
            price: "4.99$",
            description: `Bright and tangy lemon custard rests atop a buttery shortbread crust, 
                            finished with a sweet dusting of powdered sugar. The perfect balance of tart and sweet,
                            this lemon dessert delivers a refreshing burst of citrus in every bite. A light and elegant treat to end any meal.`
        },
        {
            image: greekSalad,
            title: "Greek Salad",
            price: "12.99$",
            description: `Crisp lettuce, juicy tomatoes, and crunchy cucumbers come together in a Greek salad. Kalamata olives, 
                            tangy feta, and a zesty lemon-oregano dressing create a refreshing and flavorful Mediterranean-inspired dish.
                            A simple yet satisfying salad, perfect as a light meal or side.`
        },
        {
            image: bruchetta,
            title: "Bruchetta",
            price: "8.99$",
            description: `Crisp slices of toasted bread are the foundation for this classic Italian appetizer. 
            Topped with a vibrant tomato and basil mixture, the bruschetta delivers a burst of fresh, juicy flavors.
            Drizzled with olive oil and a sprinkle of balsamic, this simple yet satisfying dish makes for a perfect party bite.`
        },
    ];

    return (
        <section className="specials">
            <div className="specials-container">
                <div className="specials-header">
                <div className="title-wrapper">
                    <h1>This Week Specials</h1>
                </div>
                <button className="order-online-btn">Order Online</button>
                </div>
                <div className="specials-grid">
                    {specialItem.map((item, index) => (
                        <SpecialCard 
                            key={index}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specials