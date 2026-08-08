import { Link } from "react-router-dom";
import SOSButton from "../components/SOSButton";
import "./Home.css";

function Home() {

  return (
    <div className="home">

      <h1>
        Silent SOS
      </h1>

      <p>
        Stay connected during emergencies with instant SOS alerts,
        live location sharing, and trusted emergency contacts.
      </p>

      <div className="home-buttons">

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


      {/* SOS BUTTON */}

      <div className="home-sos">

        <h3>
          🚨 Emergency SOS
        </h3>

        <SOSButton />

      </div>


      <div className="home-features">

        <div className="feature-card">

          <h3>🚨 One-Tap SOS</h3>

          <p>
            Send an emergency alert instantly with a single click.
          </p>

        </div>


        <div className="feature-card">

          <h3>📍 Live Location</h3>

          <p>
            Share your current location with your emergency contacts.
          </p>

        </div>


        <div className="feature-card">

          <h3>📞 Emergency Contacts</h3>

          <p>
            Keep your trusted contacts ready during emergencies.
          </p>

        </div>


        <div className="feature-card">

          <h3>📜 Alert History</h3>

          <p>
            View all your previous emergency alerts.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;