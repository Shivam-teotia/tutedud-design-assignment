import React from "react";
import "./Middlebody.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
export const Middlebody = () => {
  return (
    <div className="middlebody">
      <div className="leftbox">
        <div className="referral">Your Referral Code</div>
        <div className="code">EDCH54</div>
      </div>
      <div className="rightbox">
        <div className="wallet">Wallet Balance</div>
        <div className="balance">
          <CurrencyRupeeIcon />
          <div className="balanceamount">500</div>
        </div>
      </div>
    </div>
  );
};
