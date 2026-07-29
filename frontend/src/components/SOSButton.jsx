import { useState } from "react";

function SOSButton() {

  const [alertActive, setAlertActive] = useState(false);

  return (
    <div>

      {
        alertActive ? (
          <>
            <h3>
              🔴 SOS ACTIVE
            </h3>

            <p>
              Emergency alert has been activated.
            </p>

            <button
              onClick={() => setAlertActive(false)}
            >
              Cancel Alert
            </button>
          </>
        ) : (
          <>
            <h3>
              🟢 System Ready
            </h3>

            <button
              onClick={() => setAlertActive(true)}
            >
              Send SOS
            </button>
          </>
        )
      }

    </div>
  );
}

export default SOSButton;