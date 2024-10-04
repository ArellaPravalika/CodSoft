import React from "react";
import './head.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Travel Adventure</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Explore the World</h2>
        <p>Discover breathtaking destinations and unforgettable experiences.</p>
        <a href="#services" className="button">Get Started</a>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Travel Planning</h3>
            <p>Plan the perfect trip with our personalized travel guides.</p>
          </div>
          <div className="service-item">
            <h3>Hotel Booking</h3>
            <p>Book your stay at the best hotels around the world.</p>
          </div>
          <div className="service-item">
            <h3>Tour Packages</h3>
            <p>Choose from a variety of tour packages that fit your style.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
