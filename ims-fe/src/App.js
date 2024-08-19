import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import LandingPage from "./pages/landing-page/landing-page";
import SignUpPage from "./pages/sign-up/sign-up-page";
import SignInPage from "./pages/sign-in/sign-in-page";
import PasswordRecoveryPage from "./pages/password-recovery/password-recovery-page";
import HomePage from "./pages/home/home-page";
import "./styles/general.styles.scss";

import { SignedUpProvider } from "./contexts/sign-up.contexts";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
      </Routes>
    </div>
  );
};

export default App;
