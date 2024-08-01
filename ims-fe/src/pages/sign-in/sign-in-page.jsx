import { React } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/2skill_empire_logo.png";
import SignInForm from "../../components/sign-in/sign-In-form.component";
import "./sign-in.styles.css";

function SignInPage() {
  const Navigate = useNavigate();
  const RedirectToSignUp = () => {
    Navigate("/sign-up");
  };

  return (
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
  );
}

export default SignInPage;
