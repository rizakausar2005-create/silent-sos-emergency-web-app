import { useState } from "react";

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


  function handleSubmit(e) {

    e.preventDefault();

    console.log(user);

    alert("Registration Successful");

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