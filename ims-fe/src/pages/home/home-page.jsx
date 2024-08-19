import React, { useEffect } from "react";
import { useContext } from "react";
import { SignedInContext } from "../../contexts/sign-in.contexts";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { signedIn } = useContext(SignedInContext);
  const Navigate = useNavigate();

  useEffect(() => {
    let displayHomePage = false;
    signedIn ? (displayHomePage = true) : Navigate("/landing-page");
  });

  return (
    <div>
      <h1>Home-Page</h1>
    </div>
  );
};

export default HomePage;
