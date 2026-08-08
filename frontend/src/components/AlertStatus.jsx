import "./AlertStatus.css";

function AlertStatus({ alerts = [] }) {

  const latestAlert = alerts.length > 0
    ? alerts[0]
    : null;


  return (

    <div className="alert-status">

      <h3>
        Current Status
      </h3>


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


        <>

          <div className="status-badge">

            {latestAlert.status === "Active"
              ? "🔴 Active"
              : "⚪ Cancelled"
            }

          </div>


          <div className="status-details">

            <div className="status-item">

              <span className="status-label">
                Location
              </span>

              <p className="status-value">
                📍 Shared
              </p>

            </div>


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