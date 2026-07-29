import { useState } from "react";

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

    <div>

      <h3>📍 Live Location</h3>

      <button onClick={getLocation}>
        Get My Location
      </button>

      <p>
        Latitude: {location.latitude || "Not Available"}
      </p>

      <p>
        Longitude: {location.longitude || "Not Available"}
      </p>

    </div>

  );

}

export default Location;