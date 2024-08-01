import React from "react";
import PasswordRecoveryForm from "../../components/password-recovery/password-recovery-form.component";
import "./password-recovery.styles.scss";

const PasswordRecoveryPage = () => {
  return (
    <div className="pass-wrapper">
      <div className="flex-container">
        <div className="white-box"></div>
        <div className="purple-box"></div>
      </div>

      <div className="password-recovery-container">
        <div className="title-wrapper">
          <h1 className="title-color poppins-bold">Recover Password</h1>
        </div>

        <div>
          <PasswordRecoveryForm />
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoveryPage;
