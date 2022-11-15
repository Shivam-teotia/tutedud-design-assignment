import React from "react";
import "./Topbody.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
export const Topbody = () => {
  return (
    <div className="topbody">
      <p>
        <p>
          UI/UX {">"} Refer & Earn {">"} Friends Referred
        </p>
        <div className="goback">
          <KeyboardBackspaceIcon />
          <p>go back</p>
        </div>
      </p>
    </div>
  );
};
