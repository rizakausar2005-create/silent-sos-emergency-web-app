import API from "../services/api";
import { useState } from "react";
import "./SOSButton.css";

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

<div className="sos-container">

{
alertActive ? (

<>

<h4 className="text-danger">
🔴 SOS ACTIVE
</h4>

<p className="sos-status">
Emergency alert has been activated.
</p>

<button
className="btn btn-outline-danger cancel-btn"
onClick={() => setAlertActive(false)}
>
Cancel Alert
</button>

</>

) : (

<>

<button
className="sos-button"
onClick={handleSOS}
>
SOS
</button>

<p className="sos-status">
Press only during an emergency.
</p>

</>

)
}

</div>

);
}

export default SOSButton;