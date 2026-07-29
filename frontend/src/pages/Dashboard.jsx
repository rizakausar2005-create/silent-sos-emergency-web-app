import Location from "../components/Location";
import SOSButton from "../components/SOSButton";
import EmergencyContacts from "../components/EmergencyContacts";
import AlertStatus from "../components/AlertStatus";
import AlertHistory from "../components/AlertHistory";
function Dashboard() {

  return (
    <div>

      <h1>
        Silent SOS Dashboard
      </h1>


      <h2>
        Welcome User
      </h2>


  


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