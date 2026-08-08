import "./AlertStatus.css";

function AlertStatus({ alerts = [] }) {

  // Alerts are already coming from Dashboard.jsx
  // and are sorted newest first by the backend.
  const latestAlert = alerts.length > 0
    ? alerts[0]
    : null;


  return (

    <div className="alert-status">

      <h3>
        Current Status
      </h3>


      {/* =====================================
          NO ALERTS
      ===================================== */}

      {!latestAlert ? (

        <>

          <div className="status-badge">
            ⚪ No Alerts
          </div>


          <div className="status-details">

            <div className="status-item">

              <span className="status-label">
                Location
              </span>

              <p className="status-value">
                Not Available
              </p>

            </div>


            <div className="status-item">

              <span className="status-label">
                Last Updated
              </span>

              <p className="status-value">
                No alerts yet
              </p>

            </div>

          </div>

        </>


      ) : (


        /* =====================================
           LATEST ALERT
        ===================================== */

        <>

          <div className="status-badge">

            {latestAlert.status === "Active"
              ? "🔴 Active"
              : "⚪ Cancelled"
            }

          </div>


          <div className="status-details">


            {/* LOCATION */}

            <div className="status-item">

              <span className="status-label">
                Location
              </span>

              <p className="status-value">
                📍 Shared
              </p>

            </div>


            {/* LAST UPDATED */}

            <div className="status-item">

              <span className="status-label">
                Last Updated
              </span>

              <p className="status-value">

                {new Date(
                  latestAlert.createdAt
                ).toLocaleString()}

              </p>

            </div>


          </div>

        </>

      )}

    </div>

  );

}

export default AlertStatus;