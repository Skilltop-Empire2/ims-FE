import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/ims_logo.png";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import "./sign-up-page.styles.css";

function SignUpPage() {
  const Navigate = useNavigate();
  const handleClickRedirect = () => {
    Navigate("/sign-in");
  };

  return (
    <div className="flex-container">
      <div className="left-container">
        <div className="logo_div">
          <Link to={"/landing-page"}>
            <img src={logo} alt="company logo" />
          </Link>
        </div>
        <div className="left-inner-wrapper">
          <div className="left-inner-container-signUp">
            <div className="left-title-wrapper">
              <b>
                <h1 className="title-color poppins-bold">Create Account</h1>
              </b>
            </div>

            <div className="form-wrapper">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>

      <div className="right-container">
        <div className="right-inner-container-signUp">
          <>
            <h1 className="white-col poppins-bold">
              Have an <br /> account?
            </h1>
          </>
          <p>
            <b>Continue your journey in one click</b>
          </p>

          <button
            type="button"
            className="btn btn-light btn-rounded btn-lg right-btn"
            onClick={handleClickRedirect}
          >
            <span>SIGN IN</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
