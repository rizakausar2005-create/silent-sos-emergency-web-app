import API from "../services/api";
import { useState } from "react";

function SOSButton() {

  const [alertActive, setAlertActive] = useState(false);
  async function handleSOS() {

  try {

    const response = await API.post("/alert", {

      user: localStorage.getItem("userId"),
      // Temporary Location
      latitude: 30.3165,
      longitude: 78.0322

    });

    alert(response.data.message);

    setAlertActive(true);

  }

  catch (error) {

    console.log(error);

    alert("Failed to send SOS Alert");

  }

}

  return (
    <div>

      {
        alertActive ? (
          <>
            <h3>
              🔴 SOS ACTIVE
            </h3>

            <p>
              Emergency alert has been activated.
            </p>

            <button
              onClick={() => setAlertActive(false)}
            >
              Cancel Alert
            </button>
          </>
        ) : (
          <>
            <h3>
              🟢 System Ready
            </h3>

            <button
              onClick={handleSOS}
            >
               Send SOS
            </button>
          </>
        )
      }

    </div>
  );
}

export default SOSButton;