import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Location from "../components/Location";
import SOSButton from "../components/SOSButton";
import EmergencyContacts from "../components/EmergencyContacts";
import AlertStatus from "../components/AlertStatus";
import AlertHistory from "../components/AlertHistory";
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
    localStorage.removeItem("email");

    alert("Logged Out Successfully");

    navigate("/login");

}

  return (
    <div>

      <h1>
        Silent SOS Dashboard
      </h1>


      <h2>
        Welcome User
      </h2>

      <button onClick={handleLogout}>
        Logout
      </button>
  


      <h3>
        Emergency Alert
      </h3>

      <SOSButton />


      <hr />


      <Location />

      <hr/>

      <AlertStatus/>
      <hr/>

      <AlertHistory/>
      <hr/>


      <h3>
        Emergency Contacts
      </h3>

        <EmergencyContacts />


      <hr />


    </div>
  );
}


export default Dashboard;