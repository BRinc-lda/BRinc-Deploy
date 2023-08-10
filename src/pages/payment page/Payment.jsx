import NavBar from "../../components/NavBar/NavBar";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";
import PaymentForm from "../../components/Payment Compo/PaymentForm";
import "./Payment.css";

function Payment() {
  return (
    <div className="paymentContainer">
      <NavBar />
      <PaymentForm />
      <NavBarMobile />
    </div>
  );
}

export default Payment;
