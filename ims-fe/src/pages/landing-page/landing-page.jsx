import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/2skill_empire_logo.png";
import "./landing-page.styles.scss";

function LandingPage() {
  return (
    <div>
      <div className="logo_div">
        <img src={logo} alt="company logo" />
      </div>
      <span className="noName">
        <h2>Landing Page!</h2> <br />
        <p>Wellcome to Skill top.</p>
      </span>

      <Link to="/sign-in">Sign-In / Sign-Up</Link>
    </div>
  );
}

export default LandingPage;
