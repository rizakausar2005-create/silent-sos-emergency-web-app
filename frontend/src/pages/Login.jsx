// LOGIN PAGE TEST
import { useState } from "react";
import API from "../services/api";

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

  async function handleSubmit(e) {

  e.preventDefault();

  try {

    const response = await API.post("/login", loginData);

    alert(response.data.message);

    console.log(response.data);

    setLoginData({
      email: "",
      password: ""
    });

  }

  catch (error) {

    console.error(error);

    alert("Invalid Email or Password");

  }

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