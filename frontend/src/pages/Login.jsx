// LOGIN PAGE TEST
import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";
function Login() {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  function handleChange(e) {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

  }

  async function handleSubmit(e) {

  e.preventDefault();

  try {

    const response = await API.post("/login", loginData);

// Save JWT Token
localStorage.setItem("token", response.data.token);

// Save User ID
localStorage.setItem("userId", response.data.userId);

// Save Email
localStorage.setItem("email", response.data.email);

//save name
localStorage.setItem("name", response.data.name);

console.log(response.data);

alert(response.data.message);

setLoginData({
  email: "",
  password: ""
});

navigate("/dashboard");
  }

  catch (error) {

    console.error(error);

    alert("Invalid Email or Password");

  }

}


  return (

<div className="auth-container">

    <div className="auth-card">

        <h1 className="auth-title">
            Silent SOS
        </h1>

        <p className="auth-subtitle">
            Sign in to continue
        </p>

        <form
            className="auth-form"
            onSubmit={handleSubmit}
        >

            <input
                className="auth-input"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={loginData.email}
                onChange={handleChange}
            />

            <input
                className="auth-input"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={loginData.password}
                onChange={handleChange}
            />

            <button
                className="btn btn-dark auth-btn"
                type="submit"
            >
                Login
            </button>

        </form>

        <p className="auth-footer">
          Don't have an account?
          <br />
          <Link to="/register">
            Register here
          </Link>
        </p>

    </div>

</div>

);
}


export default Login;