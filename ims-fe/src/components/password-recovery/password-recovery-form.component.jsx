import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordRecoveryForm = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  async function handlePasswordRecovery() {
    let response = await fetch("/recover-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    });
    response = response.json();
    (await response) === "success"
      ? Navigate("/index")
      : alert("something went wrong! Try again.");
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
          placeholder="Enter registered email"
          autoComplete="off"
          required
          onChange={onEmailChange}
        />
      </div>
      <div className="password-recovery-btn">
        <button
          className="btn btn-outline-light btn-lg btn-block btn-rounded btn-purple"
          onClick={handlePasswordRecovery}
        >
          Recover Password
        </button>
      </div>
    </div>
  );
};

export default PasswordRecoveryForm;
