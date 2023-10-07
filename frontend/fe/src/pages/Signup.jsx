import React, { useState } from "react";
import { siginUp } from "../apis/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await siginUp({ password: user.password, email: user.email });

    if (data) {
      const path = "/";
      navigate(path);
    }
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
        Regiser
      </button>
    </form>
  );
}

export default Signup;
