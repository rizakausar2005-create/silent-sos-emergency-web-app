import Location from "../components/Location";
import SOSButton from "../components/SOSButton";
import EmergencyContacts from "../components/EmergencyContacts";

function Dashboard() {

  return (
    <div>

      <h1>
        Silent SOS Dashboard
      </h1>


      <h2>
        Welcome User
      </h2>


      <hr />


      <h3>
        Emergency Contacts
      </h3>

        <EmergencyContacts />


      <hr />


      <h3>
        Emergency Alert
      </h3>

      <SOSButton />


      <hr />


      <Location />


    </div>
  );
}


export default Dashboard;