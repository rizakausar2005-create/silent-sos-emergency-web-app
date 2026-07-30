import { useState } from "react";
import API from "../services/api";

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
    <div>

      <h1>Register</h1>


      <form onSubmit={handleSubmit}>


        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
        />


        <br />


        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />


        <br />


        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={user.phone}
          onChange={handleChange}
        />


        <br />


        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
        />


        <br />


        <button type="submit">
          Create Account
        </button>


      </form>


    </div>
  );
}


export default Register;