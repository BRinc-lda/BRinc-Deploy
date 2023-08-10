import { Link } from "react-router-dom";
import "./PaymentForm.css";
function PaymentForm() {
  return (
    <div className="payContainer">
      <h2 className="paymentText">Add Your Payment details</h2>
      <div className="radios">
        <div className="radio">
          <label htmlFor="">Visa</label>
          <input type="radio" id="visa" name="card" className="visaMaster" />
        </div>
        <div className="radio master">
          <label htmlFor="master">Master Card</label>
          <input type="radio" id="master" name="card" className="visaMaster" />
        </div>
      </div>
      <div className="inputsContainer">
        <div className="cardNameAndNumber">
          <input
            type="text"
            id="cardName"
            className="input"
            placeholder="Card Name"
          />
          <input
            type="number"
            id="cardNumber"
            className="input"
            placeholder="Card Number"
          />
        </div>

        <div className="smallerInputs">
          <input
            type="month"
            id="cardNumber"
            className="smallInput"
            placeholder="Exp. date"
          />
          <input
            type="number"
            id="cardNumber"
            className="smallInput"
            min="1"
            max="3"
            placeholder="cv"
          />
        </div>
        <Link to="/paymentDone">
          <button className="btnpayment">Done</button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentForm;
