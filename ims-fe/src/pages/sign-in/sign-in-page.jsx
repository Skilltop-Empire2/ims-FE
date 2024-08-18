import { React, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/ims_logo.png";
import SignInForm from "../../components/sign-in/sign-In-form.component";
import { SignedInContext } from "../../contexts/sign-in.contexts";
import "./sign-in.styles.css";

function SignInPage() {
  const { signedIn } = useContext(SignedInContext);

  const Navigate = useNavigate();
  const RedirectToSignUp = () => {
    Navigate("/sign-up");
  };

  return (
    <div className="mainContainer">
      {signedIn ? (
        <div className="slide-in-notification-container">
          <div className="slide-in-notification-msg-wrapper">
            <div className="slide-in-notification-msg animate-up-down">
              <strong>You have successfully signed in.</strong>
            </div>
          </div>
        </div>
      ) : (
        <span></span>
      )}

      <div className="flex-container">
        <div className="left-container-signIn">
          <div className="logo_div">
            <Link to={"/landing-page"}>
              <img src={logo} alt="company logo" />
            </Link>
          </div>
          <div className="left-inner-container">
            <div className="left-title-wrapper">
              <b>
                <h1 className="title-color poppins-bold">Welcome back</h1>
              </b>
            </div>

            <div className="form-wrapper">
              <SignInForm />
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="right-inner-container">
            <>
              <h1 className="white-col poppins-bold">
                Don't have an <br /> account?
              </h1>
            </>
            <p>
              <b>start your journey in one click</b>
            </p>

            <button
              type="button"
              className="btn btn-light btn-rounded btn-lg right-btn"
              onClick={RedirectToSignUp}
            >
              <span>SIGN UP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
