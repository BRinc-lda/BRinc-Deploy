import "./RegForm.css";
import { Link } from "react-router-dom";

function RegForm() {
  return (
    <div className="registerLoginForm">
      <div className="registerForm ">
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          className="inputForm"
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          className="inputForm"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="inputForm"
        />

        <input
          type="password"
          placeholder="New Password"
          id="newPassword"
          className="inputForm"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          className="inputForm"
        />
        <button className="btn btnRegister" type="submit">
          Register
        </button>
        <p className="formBtnText">
          Already have an account?{" "}
          <Link to="/login" state={{ previousUrl: location.pathname }}>
            <a href="">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegForm;
