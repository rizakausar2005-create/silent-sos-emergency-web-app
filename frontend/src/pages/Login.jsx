// LOGIN PAGE TEST
import { useState } from "react";

function Login() {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });


  function handleChange(e) {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log(loginData);

    alert("Login Successful");

  }


  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
        />

        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
        />

        <br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}


export default Login;