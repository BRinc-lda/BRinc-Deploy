import vector from "../../assets/vector.png";
import "./PaymentDone.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

function PaymentDone() {
  return (
    <div className="paymentDoneContainer">
      <NavBar />
      <div className="vectContent">
        <img src={vector} alt="A payment vector" className="vector" />
        <p>Thank you for Purchasing from BRinc</p>
        <Link to="/search">
          <button className="btnVector">Done</button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentDone;
