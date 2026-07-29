function AlertStatus() {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "8px",
      }}
    >
      <h3>Alert Status</h3>

      <p>
        <strong>Status:</strong> Active
      </p>

      <p>
        <strong>Location:</strong> Shared
      </p>

      <p>
        <strong>Time:</strong> 10:45 PM
      </p>
    </div>
  );
}

export default AlertStatus;