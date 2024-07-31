import React from "react";
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
    </div>
  );
}

export default LandingPage;
