import "./AlertStatus.css";

function AlertStatus() {

  return (

    <div className="alert-status">

      <h3>
        Current Status
      </h3>

      <div className="status-badge">
        🟢 Active
      </div>

      <div className="status-details">

        <div className="status-item">

          <span className="status-label">
            Location
          </span>

          <p className="status-value">
            Shared
          </p>

        </div>

        <div className="status-item">

          <span className="status-label">
            Last Updated
          </span>

          <p className="status-value">
            10:45 PM
          </p>

        </div>

      </div>

    </div>

  );

}

export default AlertStatus;