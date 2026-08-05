import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

  return (

    <div className="home-container">

      <div className="hero-section">

        <h1 className="hero-title">
          Silent SOS 
        </h1>

        <p className="hero-subtitle">
          Stay connected during emergencies with instant SOS alerts,
          live location sharing, and trusted emergency contacts.
        </p>

        <div className="hero-buttons">

          <Link
            to="/register"
            className="btn btn-dark"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="btn btn-outline-dark"
          >
            Login
          </Link>

        </div>

      </div>

      <div className="features-section">

        <div className="feature-card">
          <h4>🚨 One-Tap SOS</h4>
          <p>
            Send an emergency alert instantly with a single click.
          </p>
        </div>

        <div className="feature-card">
          <h4>📍 Live Location</h4>
          <p>
            Share your current location with your emergency contacts.
          </p>
        </div>

        <div className="feature-card">
          <h4>📞 Emergency Contacts</h4>
          <p>
            Store and manage trusted contacts securely.
          </p>
        </div>

        <div className="feature-card">
          <h4>📜 Alert History</h4>
          <p>
            View all your previous emergency alerts anytime.
          </p>
        </div>

      </div>

    </div>

  );

}

export default Home;