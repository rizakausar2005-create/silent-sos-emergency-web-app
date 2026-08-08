import "./AlertHistory.css";

function AlertHistory({ alerts = [] }) {

  return (

    <div>

      <h3>
        Alert History
      </h3>


      {alerts.length === 0 ? (

        <p className="empty-history">
          No Alerts Found
        </p>

      ) : (

        alerts.map((alert) => (

          <div
            key={alert._id}
            className="history-card"
          >


            {/* Status */}

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


            {/* Location */}

            <div className="history-item">

              <div className="history-label">
                📍 Location
              </div>

              <div className="history-value">
                {alert.latitude}, {alert.longitude}
              </div>

            </div>


            {/* Date */}

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