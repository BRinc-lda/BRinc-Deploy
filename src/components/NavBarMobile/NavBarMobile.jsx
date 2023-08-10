import { Link } from "react-router-dom";
import "./NavBarMobile.css";
import { ImHome } from "react-icons/im";
import { FiUser, FiSearch } from "react-icons/fi";
import { TiInfoLarge } from "react-icons/ti";

function NavBarMobile() {
  return (
    <nav>
      <div className="navbarmobile">
        <Link to="/">
          <ImHome className="img" />
        </Link>
        <ul>
          <Link to="/search">
            <li>
              <FiSearch className="img" />
            </li>
          </Link>
          <Link to="/login">
            <li>
              {" "}
              <FiUser className="img" />{" "}
            </li>
          </Link>
          <Link to="/about">
            <TiInfoLarge className="img" />
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarMobile;

{
  /* <img src={<ImHome />} className="img" /> */
}

{
  /* <img src={searchIcon} alt="Search" className="searchicon" /> */
  //   <li>About</li>
}
