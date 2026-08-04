import { useEffect, useState } from "react";
import API from "../services/api";

function AlertHistory() {

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  async function fetchAlerts() {

    try {

      const response = await API.get("/alerts");

      setAlerts(response.data);

    }

    catch (error) {

      console.log(error);

      alert("Failed to Load Alert History");

    }

  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "8px",
      }}
    >

      <h3>Alert History</h3>

      {
        alerts.length === 0 ? (

          <p>No Alerts Found</p>

        ) : (

          alerts.map((alert) => (

            <div
              key={alert._id}
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "10px",
                paddingBottom: "10px"
              }}
            >

              <p>
                <strong>Latitude:</strong> {alert.latitude}
              </p>

              <p>
                <strong>Longitude:</strong> {alert.longitude}
              </p>

              <p>
                <strong>Status:</strong> {alert.status}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {new Date(alert.createdAt).toLocaleString()}
              </p>

            </div>

          ))

        )
      }

    </div>
  );
}

export default AlertHistory;