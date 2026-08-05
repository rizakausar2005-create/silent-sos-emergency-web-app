import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

import "./Dashboard.css";

import SOSButton from "../components/SOSButton";
import Location from "../components/Location";
import AlertStatus from "../components/AlertStatus";
import AlertHistory from "../components/AlertHistory";
import EmergencyContacts from "../components/EmergencyContacts";

function Dashboard() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalAlerts: 0,
    totalContacts: 0,
    status: "Active",
  });

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    fetchDashboardStats();

  }, [navigate]);

  async function fetchDashboardStats() {

    try {

      const response = await API.get("/dashboard-stats");

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }

  }

  function handleLogout() {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("name");

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
            Welcome back, 
            <strong>{localStorage.getItem("name")}</strong>
          </p>
          <p style={{ color: "#6c757d", marginTop: "-8px" }}>
            {localStorage.getItem("email")}
          </p>

        </div>

        <button
          className="btn btn-dark logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      {/* Statistics */}

      <div className="row mb-4">

        <div className="col-md-4">

          <div className="dashboard-card text-center">

            <h6>Total Alerts</h6>

            <h2>{stats.totalAlerts}</h2>

          </div>

        </div>

        <div className="col-md-4">

          <div className="dashboard-card text-center">

            <h6>Emergency Contacts</h6>

            <h2>{stats.totalContacts}</h2>

          </div>

        </div>

        <div className="col-md-4">

          <div className="dashboard-card text-center">

            <h6>System Status</h6>

            <h2 style={{ color: "#198754" }}>
              {stats.status}
            </h2>

          </div>

        </div>

      </div>

      {/* Main Dashboard */}

      <div className="row g-4">

        {/* SOS */}

        <div className="col-lg-6">

          <div className="dashboard-card h-100">

            <h3 className="card-title">
              🚨 Emergency SOS
            </h3>

            <SOSButton onAlertSent={fetchDashboardStats}/>

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

        {/* Emergency Contacts */}

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