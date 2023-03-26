import React from "react";
import OtpInput from "../Components/OtpForm";
import Btc from "../images/btc.png"
import Eth from "../images/ethereum.png"

const DonateCrypto = () => {
  return (
    <div className="auth-bg">
      <div className="donation-modal-var2">
        <h1>Thank you for your donations!</h1>
        <p> Please find our addresses below.</p>
        <div className="donation-addresses">
        <div className="donation-address">
        <img src={Btc} alt="BTC ICON" />
            <div>
              <h3>Choppings SME Fund</h3>
              <p>12cfM8UN9hVUSPTHdYQ6ZXUZeryTHbfas</p>
            </div>
        </div>
        <div className="donation-address">
        <img src={Eth} alt="ETH ICON" />
            <div>
              <h3>Choppings SME Fund</h3>
              <p>12cfM8UN9hVUSPTHdYQ6ZXUZeryTHbfas</p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default DonateCrypto;
