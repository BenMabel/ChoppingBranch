import React from "react";
import OtpInput from "../Components/OtpForm";
import Btc from "../images/btc.png";
import Eth from "../images/ethereum.png";
import { useNavigate } from "react-router-dom";

const Donation = () => {
  const navigate = useNavigate();
  function navigateCrypto() {
    navigate("/donatecrypto");
  }
  function navigateCash() {
    navigate("/donatecash");
  }
  return (
    <div className="auth-bg">
      <div className="donation-modal">
        <h1>Help SMEs become better!</h1>
        <p>
          You donations would go a long way towards improving their businesses
        </p>
        <div className="donation-btns">
          <button className="loginBtn" onClick={navigateCash}>
            Donate with Card
          </button>
          <button className="loginBtn" onClick={navigateCrypto}>
            Donate with Crypto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
