import API from "../services/api";
import { useState } from "react";

function SOSButton() {

  const [alertActive, setAlertActive] = useState(false);

  async function handleSOS() {

    if (!navigator.geolocation) {

      alert("Geolocation is not supported.");

      return;

    }

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        try {

          const response = await API.post("/alert", {

            latitude: position.coords.latitude,
            longitude: position.coords.longitude

          });

          alert(response.data.message);

          setAlertActive(true);

        }

        catch (error) {

          console.log(error);

          alert("Failed to send SOS Alert");

        }

      },

      () => {

        alert("Unable to get your location.");

      }

    );

  }

  return (
    <div>

      {
        alertActive ? (
          <>
            <h3>🔴 SOS ACTIVE</h3>

            <p>Emergency alert has been activated.</p>

            <button onClick={() => setAlertActive(false)}>
              Cancel Alert
            </button>
          </>
        ) : (
          <>
            <h3>🟢 System Ready</h3>

            <button onClick={handleSOS}>
              Send SOS
            </button>
          </>
        )
      }

    </div>
  );
}

export default SOSButton;