import "./About.css";

function About() {

  return (

    <div className="about-container">

      <h1 className="about-title">
        About Silent SOS
      </h1>

      <p className="about-text">

        Silent SOS is a web-based emergency assistance platform
        designed to help users quickly send emergency alerts
        along with their live location.

      </p>

      <div className="about-grid">

        <div className="about-card">

          <h3>🚨 Instant SOS</h3>

          <p>
            Send emergency alerts with a single click.
          </p>

        </div>

        <div className="about-card">

          <h3>📍 Live Location</h3>

          <p>
            Share your current location securely.
          </p>

        </div>

        <div className="about-card">

          <h3>📞 Emergency Contacts</h3>

          <p>
            Store trusted contacts for emergencies.
          </p>

        </div>

        <div className="about-card">

          <h3>📜 Alert History</h3>

          <p>
            Review previous emergency alerts anytime.
          </p>

        </div>

      </div>

    </div>

  );

}

export default About;