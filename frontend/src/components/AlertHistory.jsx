import { useEffect, useState } from "react";
import API from "../services/api";
import "./AlertHistory.css";

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
    <div className="history-container">
      

      <h3>Alert History</h3>

      {
        alerts.length === 0 ? (

          <p className="empty-history">No Alerts Found</p>

        ) : (

          alerts.map((alert) => (

           <div
    key={alert._id}
    className="history-card"
>

    <div className="history-status">

        {alert.status === "Active"
            ? "🟢 Active"
            : "🔴 Resolved"}

    </div>

    <div className="history-item">

        <div className="history-label">
            Latitude
        </div>

        <div className="history-value">
            {alert.latitude}
        </div>

    </div>

    <div className="history-item">

        <div className="history-label">
            Longitude
        </div>

        <div className="history-value">
            {alert.longitude}
        </div>

    </div>

    <div className="history-item">

        <div className="history-label">
            Date & Time
        </div>

        <div className="history-value">
            {new Date(alert.createdAt).toLocaleString()}
        </div>

    </div>

</div>
          ))

        )
      }

    </div>
  );
}

export default AlertHistory;