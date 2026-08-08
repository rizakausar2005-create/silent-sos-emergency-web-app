import "./AlertHistory.css";

function AlertHistory({ alerts = [] }) {

  return (

    <div>

      <h3>
        Alert History
      </h3>


      {/* =====================================
          NO ALERTS
      ===================================== */}

      {alerts.length === 0 ? (

        <p className="empty-history">
          No Alerts Found
        </p>

      ) : (


        /* =====================================
           ALERT LIST
        ===================================== */

        alerts.map((alert) => (

          <div
            key={alert._id}
            className="history-card"
          >


            {/* STATUS */}

            <div
              className={
                alert.status === "Active"
                  ? "history-status active-status"
                  : "history-status cancelled-status"
              }
            >

              {alert.status === "Active"
                ? "🔴 Active"
                : "⚪ Cancelled"
              }

            </div>


            {/* LOCATION */}

            <div className="history-item">

              <div className="history-label">
                📍 Location
              </div>

              <div className="history-value">

                {alert.latitude}, {alert.longitude}

              </div>

            </div>


            {/* DATE & TIME */}

            <div className="history-item">

              <div className="history-label">
                🕒 Date & Time
              </div>

              <div className="history-value">

                {new Date(
                  alert.createdAt
                ).toLocaleString()}

              </div>

            </div>


          </div>

        ))

      )}

    </div>

  );

}

export default AlertHistory;