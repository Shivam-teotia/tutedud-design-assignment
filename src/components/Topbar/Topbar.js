import React from "react";
import "./Topbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <img
          className="iconImage"
          src="https://tutedude.com/refundassets/Tutedude.png"
          alt="none"
        />
      </div>
      <div className="topbarRight">
        <div className="myassignment">My Assignment</div>
        <div className="chatwithmentor">Chat With Mentor</div>
        <div className="profilename">
          <div className="icon">
            <AccountCircleIcon />
          </div>
          <p className="profilename1">ProfileName</p>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};
