import "./LogInForm.css";
import NavBar from "../../components/NavBar/NavBar";
import LogIn from "../../components/LogIn/LogIn";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";

function LogInForm() {
  return (
    <div className="loginpage">
      <NavBar />
      <LogIn />
      <NavBarMobile />
    </div>
  );
}

export default LogInForm;
