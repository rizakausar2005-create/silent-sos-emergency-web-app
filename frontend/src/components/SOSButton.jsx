import { useState } from "react";
import API from "../services/api";
import "./SOSButton.css";

function SOSButton({ alerts = [], onAlertChange }) {

  // Find currently active SOS alert
  const activeAlert = alerts.find(
    (alert) => alert.status === "Active"
  );


  // Emergency contacts associated with SOS
  const [notifiedContacts, setNotifiedContacts] = useState([]);


  // ==========================================
  // FETCH EMERGENCY CONTACTS
  // ==========================================

  async function fetchEmergencyContacts() {

    try {

      const response = await API.get("/contacts");

      setNotifiedContacts(response.data || []);

      return response.data || [];

    }

    catch (error) {

      console.log(
        "Failed to load emergency contacts:",
        error
      );

      return [];

    }

  }


  // ==========================================
  // SEND SOS
  // ==========================================

  async function handleSOS() {

    // Prevent multiple active alerts
    if (activeAlert) {

      alert(
        "An SOS alert is already active."
      );

      return;

    }


    // Check geolocation support
    if (!navigator.geolocation) {

      alert(
        "Geolocation is not supported."
      );

      return;

    }


    navigator.geolocation.getCurrentPosition(

      async (position) => {

        try {

          // Create SOS alert
          const response = await API.post(
            "/alert",
            {
              latitude:
                position.coords.latitude,

              longitude:
                position.coords.longitude
            }
          );


          // Try contacts returned by backend first
          let contacts =
            response.data.notifiedContacts || [];


          // If backend did not return contacts,
          // get them from the existing contacts API.
          if (contacts.length === 0) {

            contacts =
              await fetchEmergencyContacts();

          }


          // Show notification simulation
          if (contacts.length > 0) {

            alert(
              `🚨 SOS Alert Activated!\n\n` +

              `📍 Your location has been recorded.\n` +

              `📞 ${contacts.length} emergency contact(s) identified.\n` +

              `✅ Notification process initiated.`
            );

          }

          else {

            alert(
              `🚨 SOS Alert Activated!\n\n` +

              `📍 Your location has been recorded.\n` +

              `⚠️ No emergency contacts found.`
            );

          }


          // Save contacts for display
          setNotifiedContacts(contacts);


          // Refresh dashboard
          await onAlertChange();

        }

        catch (error) {

          console.log(error);

          alert(
            "Failed to send SOS Alert"
          );

        }

      },


      () => {

        alert(
          "Unable to get your location."
        );

      }

    );

  }


  // ==========================================
  // CANCEL SOS
  // ==========================================

  async function handleCancel() {

    // Make sure active alert exists
    if (!activeAlert) {

      alert(
        "No active alert found."
      );

      return;

    }


    try {

      const response = await API.put(
        `/alert/${activeAlert._id}/cancel`
      );


      alert(
        response.data.message
      );


      // Clear displayed contacts
      setNotifiedContacts([]);


      // Refresh dashboard data
      await onAlertChange();

    }

    catch (error) {

      console.log(error);

      alert(
        "Failed to Cancel Alert"
      );

    }

  }


  // ==========================================
  // DISPLAY
  // ==========================================

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


          {/* ================================
              NOTIFICATION STATUS
          ================================= */}

          <div className="notified-contacts">

            <h5>
              📢 Notification Status
            </h5>


            {notifiedContacts.length > 0 ? (

              <>

                <p className="contacts-notified-message">

                  ✅ Notification process initiated

                </p>


                <p>

                  📞{" "}
                  {notifiedContacts.length}{" "}
                  emergency contact(s) identified.

                </p>


                {notifiedContacts.map(
                  (contact, index) => (

                    <div
                      key={
                        contact._id || index
                      }
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

                  )
                )}

              </>

            ) : (

              <p>
                ⚠️ No emergency contacts added.
              </p>

            )}

          </div>


          {/* ================================
              CANCEL
          ================================= */}

          <button
            className="btn btn-outline-danger cancel-btn"
            onClick={handleCancel}
          >

            Cancel Alert

          </button>

        </>


      ) : (


        /* ===================================
           NORMAL SOS BUTTON
        =================================== */

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