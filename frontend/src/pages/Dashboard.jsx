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

  // ==========================================
  // DASHBOARD STATISTICS
  // ==========================================

  const [stats, setStats] = useState({
    totalAlerts: 0,
    totalContacts: 0,
    status: "Active"
  });


  // ==========================================
  // ALL USER ALERTS
  // ==========================================

  const [alerts, setAlerts] = useState([]);


  // ==========================================
  // CHECK LOGIN + LOAD DATA
  // ==========================================

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

      alert("Please login first.");

      navigate("/login");

      return;

    }

    loadDashboardData();

  }, [navigate]);


  // ==========================================
  // LOAD ALL DASHBOARD DATA
  // ==========================================

  async function loadDashboardData() {

    await fetchDashboardStats();

    await fetchAlerts();

  }


  // ==========================================
  // FETCH DASHBOARD STATISTICS
  // ==========================================

  async function fetchDashboardStats() {

    try {

      const response = await API.get("/dashboard-stats");

      setStats(response.data);

    }

    catch (error) {

      console.log(
        "Failed to load dashboard stats:",
        error
      );

    }

  }


  // ==========================================
  // FETCH ALERTS
  // ==========================================

  async function fetchAlerts() {

    try {

      const response = await API.get("/alerts");

      setAlerts(response.data);

    }

    catch (error) {

      console.log(
        "Failed to load alerts:",
        error
      );

    }

  }


  // ==========================================
  // REFRESH AFTER SOS / CANCEL
  // ==========================================

  async function handleAlertChange() {

    await loadDashboardData();

  }


  // ==========================================
  // LOGOUT
  // ==========================================

  function handleLogout() {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("name");

    alert("Logged Out Successfully");

    navigate("/login");

  }


  // ==========================================
  // DASHBOARD UI
  // ==========================================

  return (

    <div className="dashboard-container">


      {/* =====================================
          HEADER
      ===================================== */}

      <div className="dashboard-header">

        <div>

          <h1 className="dashboard-title">
            Silent SOS Dashboard
          </h1>


          <p className="dashboard-subtitle">

            Welcome back{" "}

            <strong>
              {localStorage.getItem("name")}
            </strong>

          </p>


          <p
            style={{
              color: "#6c757d",
              marginTop: "-8px"
            }}
          >

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



      {/* =====================================
          STATISTICS
      ===================================== */}

      <div className="row mb-4">


        {/* TOTAL ALERTS */}

        <div className="col-md-4">

          <div className="dashboard-card text-center">

            <h6>
              Total Alerts
            </h6>

            <h2>
              {stats.totalAlerts}
            </h2>

          </div>

        </div>



        {/* TOTAL CONTACTS */}

        <div className="col-md-4">

          <div className="dashboard-card text-center">

            <h6>
              Emergency Contacts
            </h6>

            <h2>
              {stats.totalContacts}
            </h2>

          </div>

        </div>



        {/* SYSTEM STATUS */}

        <div className="col-md-4">

          <div className="dashboard-card text-center">

            <h6>
              System Status
            </h6>

            <h2
              style={{
                color: "#198754"
              }}
            >
              {stats.status}
            </h2>

          </div>

        </div>

      </div>



      {/* =====================================
          MAIN DASHBOARD
      ===================================== */}

      <div className="row g-4">


        {/* ===================================
            SOS
        =================================== */}

        <div className="col-lg-6">

          <div className="dashboard-card h-100">

            <h3 className="card-title">
              🚨 Emergency SOS
            </h3>


            <SOSButton
              alerts={alerts}
              onAlertChange={handleAlertChange}
            />

          </div>

        </div>



        {/* ===================================
            LOCATION
        =================================== */}

        <div className="col-lg-6">

          <div className="dashboard-card h-100">

            <h3 className="card-title">
              📍 Current Location
            </h3>


            <Location />

          </div>

        </div>



        {/* ===================================
            ALERT STATUS
        =================================== */}

        <div className="col-lg-6">

          <div className="dashboard-card h-100">

            <h3 className="card-title">
              🚦 Alert Status
            </h3>


            <AlertStatus
              alerts={alerts}
            />

          </div>

        </div>



        {/* ===================================
            ALERT HISTORY
        =================================== */}

        <div className="col-lg-6">

          <div className="dashboard-card h-100">

            <h3 className="card-title">
              📜 Alert History
            </h3>


            <AlertHistory
              alerts={alerts}
            />

          </div>

        </div>



        {/* ===================================
            EMERGENCY CONTACTS
        =================================== */}

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