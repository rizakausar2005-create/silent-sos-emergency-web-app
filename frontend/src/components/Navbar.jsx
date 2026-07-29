import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Silent SOS</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;