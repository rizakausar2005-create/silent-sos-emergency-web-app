import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

import SOSButton from "../components/SOSButton";
import Location from "../components/Location";
import AlertStatus from "../components/AlertStatus";
import AlertHistory from "../components/AlertHistory";
import EmergencyContacts from "../components/EmergencyContacts";

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

      alert("Please login first.");

      navigate("/login");

    }

  }, [navigate]);

  function handleLogout() {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");

    alert("Logged Out Successfully");

    navigate("/login");

  }

 return (

<div className="dashboard-container">

    {/* Header */}

    <div className="dashboard-header">

        <div>

            <h1 className="dashboard-title">
    Silent SOS Dashboard
</h1>

<p className="dashboard-subtitle">
    Welcome back, {localStorage.getItem("email")}
</p>

        </div>

        <button
            className="btn btn-dark logout-btn"
            onClick={handleLogout}
        >
            Logout
        </button>

    </div>

    <div className="row g-4">

        {/* SOS */}

        <div className="col-lg-6">

            <div className="dashboard-card h-100">

                <h3 className="card-title">
                    🚨 Emergency SOS
                </h3>

                <SOSButton />

            </div>

        </div>

        {/* Location */}

        <div className="col-lg-6">

            <div className="dashboard-card h-100">

                <h3 className="card-title">
                    📍 Current Location
                </h3>

                <Location />

            </div>

        </div>

        {/* Alert Status */}

        <div className="col-lg-6">

            <div className="dashboard-card h-100">

                <h3 className="card-title">
                    🚦 Alert Status
                </h3>

                <AlertStatus />

            </div>

        </div>

        {/* Alert History */}

        <div className="col-lg-6">

            <div className="dashboard-card h-100">

                <h3 className="card-title">
                    📜 Alert History
                </h3>

                <AlertHistory />

            </div>

        </div>

        {/* Contacts */}

        <div className="col-12">

            <div className="dashboard-card">

                <h3 className="card-title">
                    📞 Emergency Contacts
                </h3>

                <EmergencyContacts />

            </div>

        </div>

    </div>

</div>

);
}

export default Dashboard;