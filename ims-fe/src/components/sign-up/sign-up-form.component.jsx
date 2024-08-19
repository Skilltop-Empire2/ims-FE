import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const Navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email and password validation variables
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [displayEmailError, setDisplayEmailError] = useState(false);
  const [displayPasswordError, setDisplayPasswordError] = useState(false);

  // Email regex validation
  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const onNameChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const onEmailChange = (event) => {
    event.preventDefault();
    let emailValues = event.target.value;
    setEmail(emailValues);
  };

  // password validation and error messages
  const isPasswordValid = (password) => {
    if (password.length < 1) {
      setPasswordError("Password field can't be empty.");
    } else if (password.includes(" ")) {
      setPasswordError("Password can't include spaces.");
    } else if (password.length < 4) {
      setPasswordError("Password must have at least four characters.");
    } else {
      setPasswordError("");
    }
  };

  // Email error setter function
  useEffect(() => {
    if (!email) {
      setEmailError("Email can't be empty.");
    } else if (!isEmailValid(email)) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }

    isPasswordValid(password);
  });

  const onPasswordChange = (event) => {
    event.preventDefault();
    let passwordValues = event.target.value;
    setPassword(passwordValues);
  };

  async function registerSignUp() {
    if (!emailError && !passwordError) {
      let response = await fetch("http://localhost:3005/signup", {
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
    } else {
      setDisplayEmailError(true);
      setDisplayPasswordError(true);
    }
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
        <p className="error-msg">
          {displayEmailError ? <span>{emailError}</span> : <span></span>}
        </p>
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
        <p className="error-msg">
          {displayPasswordError ? <span>{passwordError}</span> : <span></span>}
        </p>
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
