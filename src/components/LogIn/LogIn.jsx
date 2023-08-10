import "./LogIn.css";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

import { useNavigate, useLocation } from "react-router-dom";

function LogIn() {
  const [userLogin, setUserLogin] = useState({});

  const { setUser, setBookDetailsPage } = useContext(UserContext);

  const navigate = useNavigate();

  const location = useLocation();

  const handleChange = () => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    event.preventDefault();
    setUser(userLogin);
    setBookDetailsPage(false);
    if (location.state.previousUrl.includes("/bookinfo/")) {
      navigate(location.state.previousUrl);
    } else {
      navigate("/search");
    }
  };

  return (
    <div className="registerLoginForm">
      <form onSubmit={handleSubmit} className="loginForm ">
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="inputForm"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          id="newPassword"
          name="password"
          className="inputForm"
          onChange={handleChange}
        />
        <button className="btn btnLogin" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LogIn;
