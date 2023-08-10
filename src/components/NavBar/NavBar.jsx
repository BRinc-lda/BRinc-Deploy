import { Link } from "react-router-dom";
import "./NavBar.css";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img src="/src/assets/logo light color2.png" className="img" />
        </Link>
        <ul>
          <Link to="/search">
            <li>
              <FiSearch className="searchicon" />
            </li>
          </Link>
          {user && Object.keys(user).length > 0 ? (
            <li>Welcome {user.email.split("@")[0]}</li>
          ) : (
            <Link to="/login" state={{ previousUrl: location.pathname }}>
              <li> LogIn </li>
            </Link>
          )}
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
