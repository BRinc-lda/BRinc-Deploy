import NavBar from "../../components/NavBar/NavBar";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";
import RegForm from "../../components/RegisterForm/RegForm";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="registerpage">
      <NavBar />
      <RegForm />
      <NavBarMobile />
    </div>
  );
}

export default RegisterPage;
