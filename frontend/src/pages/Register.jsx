import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";
import "./Auth.css";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });


  function handleChange(e) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  }


  async function handleSubmit(e) {

  e.preventDefault();

  try {

    const response = await API.post("/register", user);

    alert(response.data.message);

    console.log(response.data);

    setUser({
      name: "",
      email: "",
      phone: "",
      password: ""
    });

  }

  catch (error) {

  console.error("Full Error:", error);

  if (error.response) {
    console.log("Response:", error.response.data);
  }

  if (error.request) {
    console.log("Request:", error.request);
  }

  alert(error.message);

}

}


  return (

<div className="auth-container">

    <div className="auth-card">

        <h1 className="auth-title">
            Silent SOS
        </h1>

        <p className="auth-subtitle">
            Create your account
        </p>

        <form
            className="auth-form"
            onSubmit={handleSubmit}
        >

            <input
                className="auth-input"
                type="text"
                name="name"
                placeholder="Full Name"
                value={user.name}
                onChange={handleChange}
            />

            <input
                className="auth-input"
                type="email"
                name="email"
                placeholder="Email Address"
                value={user.email}
                onChange={handleChange}
            />

            <input
                className="auth-input"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={user.phone}
                onChange={handleChange}
            />

            <input
                className="auth-input"
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
            />

            <button
                className="btn btn-dark auth-btn"
                type="submit"
            >
                Create Account
            </button>

        </form>

        <p className="auth-footer">
          Already have an account?
          <br />
          <Link to="/login">
            Login here
          </Link>
        </p>

    </div>

</div>

);
}


export default Register;