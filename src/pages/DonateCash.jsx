import React from "react";
import OtpInput from "../Components/OtpForm";
import Btc from "../images/btc.png"
import Eth from "../images/ethereum.png"
import { useNavigate } from 'react-router-dom';

const DonateCash = () => {

  return (
    <div className="auth-bg">
      <div className="donation-modal-var1">
        <p>Please enter donation amount.</p>
        <div className="donationAmount">
        <p>NGN</p>
        <input
              className="inputAlt"
              type="text"
              placeholder="e.g. 500"
              //   value={password}
            />
        </div>

        <div className="card-info">
          <p>Card Information</p>
          <div className="card-info-content">
            <input
              className="input"
              type="text"
              placeholder="Card Name"
              //   value={password}
            />
            <input
              className="input"
              type="number"
              placeholder="Card Number"
              //   value={password}
            />
            <div className="donation-btns">
              <input
                className="input"
                type="number"
                placeholder="MM/YY"
                //   value={password}
              />
              <input
                className="input"
                type="text"
                placeholder="CVV"
                //   value={password}
              />
            </div>
            <button className="loginBtn">Make Payment</button>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default DonateCash;
