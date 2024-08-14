import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignInForm() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  async function handleSignInClick() {
    let response = await fetch("http://localhost:8080/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    response = await response.json();
    (await response) === "success"
      ? Navigate("/home")
      : alert("Invalid details! Either email or password is wrong.");
  }

  return (
    <div>
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
          className="btn btn-outline-light btn-lg btn-block btn-rounded btn-purple"
          onClick={handleSignInClick}
        >
          SIGN IN
        </button>
      </div>

      <div className="link-wrapper">
        <Link to="/password-recovery">
          <span className="link-wrapper">forgot your password?</span>
        </Link>
      </div>
    </div>
  );
}

export default SignInForm;
