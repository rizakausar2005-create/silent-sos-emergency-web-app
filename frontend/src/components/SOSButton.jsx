import { useState } from "react";
import API from "../services/api";
import "./SOSButton.css";

function SOSButton({ alerts = [], onAlertChange }) {

  // Find currently active SOS alert
  const activeAlert = alerts.find(
    (alert) => alert.status === "Active"
  );

  // Store contacts returned when SOS is activated
  const [notifiedContacts, setNotifiedContacts] = useState([]);


  // ==========================================
  // SEND SOS
  // ==========================================

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


          const contacts = response.data.notifiedContacts || [];

          if (contacts.length > 0) {

          alert(
            `🚨 SOS Alert Activated!\n\n` +
            `📍 Your location has been recorded.\n` +
            `📞 ${contacts.length} emergency contact(s) identified.\n` +
            `✅ Notification process initiated.`
        );

      } else {

        alert(
          `🚨 SOS Alert Activated!\n\n` +
          `📍 Your location has been recorded.\n` +
          `⚠️ No emergency contacts found.`
        );

      }


          // Get emergency contacts returned by backend
          setNotifiedContacts(
            response.data.notifiedContacts || []
          );


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


  // ==========================================
  // CANCEL SOS
  // ==========================================

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


      // Clear notified contacts
      setNotifiedContacts([]);


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


      {/* =====================================
          ACTIVE SOS
      ===================================== */}

      {activeAlert ? (

        <>

          <h4 className="text-danger">
            🔴 SOS ACTIVE
          </h4>


          <p className="sos-status">
            Emergency alert has been activated.
          </p>


          {/* Emergency Contacts */}

          <div className="notified-contacts">

            <h5>
              📞 Emergency Contacts
            </h5>


            {notifiedContacts.length > 0 ? (

              <>

                <p className="contacts-notified-message">
                  Emergency contacts associated with this SOS:
                </p>


                {notifiedContacts.map((contact, index) => (

                  <div
                    key={index}
                    className="notified-contact"
                  >

                    <strong>
                      👤 {contact.name}
                    </strong>

                    <br />

                    📞 {contact.phone}

                    <br />

                    🤝 {contact.relationship}

                  </div>

                ))}

              </>

            ) : (

              <p>
                No emergency contacts added.
              </p>

            )}

          </div>


          {/* Cancel */}

          <button
            className="btn btn-outline-danger cancel-btn"
            onClick={handleCancel}
          >
            Cancel Alert
          </button>

        </>


      ) : (


        /* =====================================
           NORMAL SOS BUTTON
        ===================================== */

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