import SOSButton from "../components/SOSButton";
import "./Home.css";

function Home() {

  return (
    <div className="home">

      <h1>
        Silent SOS Emergency System
      </h1>

      <p>
        Your safety, one click away.
      </p>

      <SOSButton />

    </div>
  );
}

export default Home;