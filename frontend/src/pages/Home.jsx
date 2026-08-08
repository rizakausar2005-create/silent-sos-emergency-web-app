import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

  return (

    <div className="home-container">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <div className="home-hero">

        <h1>
          Silent SOS
        </h1>

        <p>
          Stay connected during emergencies with
          instant SOS alerts, location sharing,
          and trusted emergency contacts.
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

      </div>


      {/* =====================================
          HOW IT WORKS
      ===================================== */}

      <div className="home-how">

        <h2>
          How Silent SOS Works
        </h2>

        <p>
          A simple emergency system designed to
          help you quickly alert your trusted contacts.
        </p>


        <div className="home-steps">


          <div className="feature-card">

            <div className="feature-icon">
              1️⃣
            </div>

            <h3>
              Add Contacts
            </h3>

            <p>
              Add trusted people who can be contacted
              during an emergency.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              2️⃣
            </div>

            <h3>
              Press SOS
            </h3>

            <p>
              Activate an emergency alert with
              a single button.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              3️⃣
            </div>

            <h3>
              Share Location
            </h3>

            <p>
              Your current location is recorded
              with the emergency alert.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              4️⃣
            </div>

            <h3>
              Track Alert
            </h3>

            <p>
              Monitor the alert status and view
              your complete alert history.
            </p>

          </div>


        </div>

      </div>


      {/* =====================================
          FEATURES
      ===================================== */}

      <div className="home-features-section">

        <h2>
          Features
        </h2>


        <div className="home-features">


          <div className="feature-card">

            <h3>
              🚨 One-Tap SOS
            </h3>

            <p>
              Send an emergency alert instantly
              with a single click.
            </p>

          </div>


          <div className="feature-card">

            <h3>
              📍 Location Tracking
            </h3>

            <p>
              Get your current latitude and longitude
              using your device location.
            </p>

          </div>


          <div className="feature-card">

            <h3>
              📞 Emergency Contacts
            </h3>

            <p>
              Add, edit and delete trusted emergency
              contacts from your dashboard.
            </p>

          </div>


          <div className="feature-card">

            <h3>
              📜 Alert History
            </h3>

            <p>
              View previous alerts along with their
              status, location and date.
            </p>

          </div>


        </div>

      </div>


      {/* =====================================
          CALL TO ACTION
      ===================================== */}

      <div className="home-cta">

        <h2>
          Be Prepared Before an Emergency
        </h2>

        <p>
          Create your account and add your trusted
          emergency contacts today.
        </p>


        <Link
          to="/register"
          className="btn btn-dark"
        >
          Create Account
        </Link>

      </div>


    </div>

  );

}

export default Home;