import { React, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignedInContext } from "../../contexts/sign-in.contexts";

function SignInForm() {
  const { setSignedIn } = useContext(SignedInContext);
  const Navigate = useNavigate();
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

  const onEmailChange = (event) => {
    event.preventDefault();
    let emailValues = event.target.value;
    setEmail(emailValues);
  };

  // Password validation and error messages
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

  async function handleSignInClick() {
    if (!emailError && !passwordError) {
      let response = await fetch("http://localhost:8080/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      response = await response.json();
      if ((await response) === "success") {
        setSignedIn(true);
        // sessionStorage.setItem("signedIn", true);

        setTimeout(() => Navigate("/home"), 1000);
      }
      // else {
      //   alert("Invalid details! Either email or password is wrong.");
      // }
    } else {
      setDisplayEmailError(true);
      setDisplayPasswordError(true);
    }
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
