import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <p>Explore our delicious offerings</p>

      <section className="specials">
        <h2>This Week Specials</h2>
        <div className="special-items">
          <div className="special-item">
            <img src="lemon-dessert.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>Bright and tangy lemon custard rests atop a buttery shortbread crust, finished with a sweet dusting of powdered sugar. The perfect balance of tart and sweet, this lemon dessert delivers a refreshing citrus in every bite. A light and elegant treat to end any meal.</p>
            <span className="price">$4.99</span>
            <button>Order Delivery Now</button>
          </div>
          <div className="special-item">
            <img src="greek-salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>Crisp lettuce, juicy tomatoes, and crunchy cucumbers come together in a Greek salad. Kalamata olives, tangy feta, and a zesty lemon-oregano dressing create a refreshing and flavorful Mediterranean-inspired dish. A simple yet satisfying salad, perfect as a light meal or side.</p>
            <span className="price">$12.99</span>
            <button>Order Delivery Now</button>
          </div>
          <div className="special-item">
            <img src="bruchetta.jpg" alt="Bruchetta" />
            <h3>Bruchetta</h3>
            <p>Crisp slices of toasted bread are the foundation for this classic Italian appetizer. Topped with a vibrant tomato and basil mixture, the bruschetta delivers a burst of fresh, juicy flavors. Drizzled with olive oil and a sprinkle of balsamic, this simple yet satisfying dish makes for a perfect party bite.</p>
            <span className="price">$8.99</span>
            <button>Order Delivery Now</button>
          </div>
        </div>
      </section>

      <section className="full-menu">
        <h2>Explore Our Full Menu</h2>
        <ul>
          <li>Appetizers</li>
          <li>Salads</li>
          <li>Entrees</li>
          <li>Desserts</li>
          <li>Beverages</li>
        </ul>
        <button>View Full Menu</button>
      </section>

      <button className="order-button">Order Online</button>
    </div>
  );
};

export default Menu;