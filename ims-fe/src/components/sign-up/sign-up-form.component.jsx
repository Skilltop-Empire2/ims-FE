import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const Navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const onEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  async function registerSignUp() {
    let response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: userName,
        email: email,
        password: password,
      }),
    });
    response = response.json();
    (await response) === "success"
      ? Navigate("/sign-in")
      : alert("Something went wrong.");
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="userName">
          <b>User Name</b>
        </label>
        <input
          type="text"
          name="userName"
          className="form-control rounded-10"
          id="userName"
          aria-describedby="emailHelp"
          placeholder="Enter user name"
          autoComplete="off"
          onChange={onNameChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          name="email"
          className="form-control rounded-10"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          autoComplete="off"
          required
          onChange={onEmailChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          className="form-control rounded-10"
          id="password"
          placeholder="Password"
          autoComplete="off"
          required
          onChange={onPasswordChange}
        />
      </div>

      <div className="signup-btn-wrapper">
        <button
          type="submit"
          className="btn btn-outline-light btn-lg btn-block btn-rounded btn-purple"
          onClick={registerSignUp}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
