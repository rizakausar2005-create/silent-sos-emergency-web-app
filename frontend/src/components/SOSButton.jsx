import API from "../services/api";
import "./SOSButton.css";

function SOSButton({ alerts = [], onAlertChange }) {

  // Find the currently active SOS alert
  const activeAlert = alerts.find(
    (alert) => alert.status === "Active"
  );


  // -----------------------------
  // SEND SOS
  // -----------------------------

  async function handleSOS() {

    // Prevent multiple active alerts
    if (activeAlert) {

      alert("An SOS alert is already active.");

      return;

    }


    // Check geolocation support
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


          // Refresh alerts immediately
          await onAlertChange();

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


  // -----------------------------
  // CANCEL SOS
  // -----------------------------

  async function handleCancel() {

    // Make sure an active alert exists
    if (!activeAlert) {

      alert("No active alert found.");

      return;

    }


    try {

      const response = await API.put(
        `/alert/${activeAlert._id}/cancel`
      );


      alert(response.data.message);


      // VERY IMPORTANT
      // Fetch updated alerts from MongoDB
      await onAlertChange();

    }

    catch (error) {

      console.log(error);

      alert("Failed to Cancel Alert");

    }

  }


  return (

    <div className="sos-container">


      {/* ACTIVE SOS */}

      {activeAlert ? (

        <>

          <h4 className="text-danger">
            🔴 SOS ACTIVE
          </h4>


          <p className="sos-status">
            Emergency alert has been activated.
          </p>


          <button
            className="btn btn-outline-danger cancel-btn"
            onClick={handleCancel}
          >
            Cancel Alert
          </button>

        </>


      ) : (


        /* NORMAL SOS BUTTON */

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

      )}

    </div>

  );

}

export default SOSButton;