import { useState } from "react";
import "./Location.css";

function Location() {

  const [location, setLocation] = useState({
    latitude: "",
    longitude: ""
  });

  function getLocation() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(

        function(position) {

          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });

        },

        function() {
          alert("Unable to get your location.");
        }

      );

    } else {

      alert("Geolocation is not supported by your browser.");

    }

  }

  return (

<div className="location-container">

    <h3 className="location-title">
        📍 Live Location
    </h3>

    <button
        className="btn btn-dark location-btn"
        onClick={getLocation}
    >
        Get My Location
    </button>

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

    </div>

</div>

);

}

export default Location;