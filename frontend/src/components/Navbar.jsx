import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  function handleLogout() {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");

    alert("Logged Out Successfully");

    navigate("/login");

  }

  return (

    <nav className="navbar">

      <Link to="/" className="logo">
        Silent SOS
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        {!token ? (

          <>

            <Link to="/login">
              Login
            </Link>

            <Link
              to="/register"
              className="register-btn"
            >
              Register
            </Link>

          </>

        ) : (

          <>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <button
              className="logout-btn-nav"
              onClick={handleLogout}
            >
              Logout
            </button>

          </>

        )}

      </div>

    </nav>

  );

}

export default Navbar;