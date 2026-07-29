function AlertHistory() {
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

      <ul>
        <li>
          <strong>28 July 2026</strong> - Alert Resolved
        </li>

        <li>
          <strong>25 July 2026</strong> - Alert Cancelled
        </li>

        <li>
          <strong>18 July 2026</strong> - Alert Sent
        </li>
      </ul>
    </div>
  );
}
export default AlertHistory;