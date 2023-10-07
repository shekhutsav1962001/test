import React, { useState } from "react";

import { siginIn } from "../apis/auth";
import { useAuth } from "../helpers/auth";

function Signin() {
  const auth = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await siginIn({ password: user.password, email: user.email });
    if (data && data.token) auth.login(data.token);
  }

  function handleChange(e) {
    setUser((previousValue) => {
      return {
        ...previousValue,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <form className="container w-50" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={handleChange}
          value={user.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-2">
        Login
      </button>
    </form>
  );
}

export default Signin;
