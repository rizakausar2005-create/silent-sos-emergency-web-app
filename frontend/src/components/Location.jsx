import { useState } from "react";
import "./Location.css";

function Location() {

  const [location, setLocation] = useState({
    latitude: "",
    longitude: ""
  });

  function getLocation() {

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(

      function (position) {

        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

      },

      function () {
        alert("Unable to get your location.");
      }

    );
  }

  // Google Maps link
  const mapUrl =
    location.latitude && location.longitude
      ? `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
      : "";

  return (

    <div>

      <h3 className="location-title">
        📍 Live Location
      </h3>

      <button
        className="btn btn-dark location-btn"
        onClick={getLocation}
      >
        Get My Location
      </button>


      {/* Location Information */}

      <div className="location-info">

        <div className="location-item">

          <span className="location-label">
            Latitude
          </span>

          <p className="location-value">
            {location.latitude || "Not Available"}
          </p>

        </div>


        <div className="location-item">

          <span className="location-label">
            Longitude
          </span>

          <p className="location-value">
            {location.longitude || "Not Available"}
          </p>

        </div>


        {/* Location Status */}

        <div className="location-item">

          <span className="location-label">
            Status
          </span>

          <p className="location-value location-status">

            {location.latitude && location.longitude
              ? "🟢 Location Available"
              : "⚪ Location Not Available"}

          </p>

        </div>

      </div>


      {/* Google Maps */}

      {location.latitude && location.longitude && (

        <div className="map-container">

          <h4>
            📍 Location Found
          </h4>

          <p>
            You can view your current location on Google Maps.
          </p>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success map-btn"
          >
            🗺️ Open in Google Maps
          </a>

        </div>

      )}

    </div>

  );

}

export default Location;