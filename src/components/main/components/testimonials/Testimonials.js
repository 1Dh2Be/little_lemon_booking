import "./Testimonials.css"
import "./TestimonialsCards.css"
import person1 from "../../../../assets/Person1.png"
import person2 from "../../../../assets/Person2.png"
import person3 from "../../../../assets/Person3.png"

const TestimonialsCards = ({name, image, comment}) => {
    return (
        <div className="testimonial-card">
            <h1>{name}</h1>
            <img src={image} alt={`Photo of ${name}`}/>
            <p>{comment}</p>
            <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                    <span key={index} className="star">⭐</span>
                ))}
            </div>
        </div>
    );
};

const Testimonials = () => {
    const testimonialData = [
        {
            name: "Michael Chen",
            image: person1,
            comment: "The flavors were incredible! Their signature dish is a must-try. The atmosphere and service made our evening special."
        },
        {
            name: "James Wilson",
            image: person2,
            comment: "Best fine dining experience in Chicago! The wine pairing suggestions were perfect, and the dessert was unforgettable."
        },
        {
            name: "Sarah Rodriguez",
            image: person3,
            comment: "Such a cozy spot with amazing food. The chef's attention to detail shows in every dish. Will definitely be coming back!"
        }
    ];

    return (
        <div className="bg">
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonials-container">
                    {testimonialData.map((review, index) => (
                        <TestimonialsCards
                            key={index}
                            name={review.name}
                            image={review.image}
                            comment={review.comment}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Testimonials