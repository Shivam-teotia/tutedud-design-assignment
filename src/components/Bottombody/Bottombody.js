import React from "react";
import "./Bottombody.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
export const Bottombody = () => {
  return (
    <div className="bottombody">
      <p className="text">Friends who enrolled(3)</p>
      <div className="maindiv">
        <div className="firstdiv">
          <div className="top">
            <div className="name">Dhiraj Saxena</div>
            <div className="date">14 Sep,2022</div>
          </div>
          <div className="coursename">Courses Enrolled(6)</div>
          <div className="types">
            <div className="combinefirst">
              <div className="type">UI/UX</div>
              <div className="type">Photoshop</div>
              <div className="type">Illustrator</div>
            </div>
            <div className="combinesecond">
              <div className="type">Python</div>
              <div className="type">MERN</div>
              <div className="type">Java</div>
            </div>
          </div>
          <div className="amount">
            Referral Amount
            <div className="amount1">
              <CurrencyRupeeIcon /> 185
            </div>
          </div>
        </div>
        <div className="seconddiv">
          <div className="top">
            <div className="name">Subhash Mishra</div>
            <div className="date">15 Sep,2022</div>
          </div>
          <div className="coursename">Courses Enrolled(23)</div>
          <div className="combine">
            <div className="types">
              <div className="combinefirst">
                <div className="type">UI/UX</div>
                <div className="type">Photoshop</div>
                <div className="type">Illustrator</div>
              </div>
              <div className="combinesecond">
                <div className="type">Python</div>
                <div className="type">MERN</div>
                <div className="type">Java</div>
                <div className="type">c++</div>
              </div>
            </div>
            <div className="scroll"></div>
          </div>
          <div className="amount">
            Referral Amount
            <div className="amount1">
              <CurrencyRupeeIcon /> 485
            </div>
          </div>
        </div>
        <div className="thirddiv">
          <div className="thirddiv2">
            <div className="top">
              <div className="name">Prafull Kumar</div>
              <div className="date">16 Sep,2022</div>
            </div>
            <div className="coursename">Courses Enrolled(23)</div>
            <div className="combine">
              <div className="types">
                <div className="combinefirst">
                  <div className="type">UI/UX</div>
                  <div className="type">Photoshop</div>
                  <div className="type">Illustrator</div>
                </div>
                <div className="combinesecond">
                  <div className="type">Python</div>
                  <div className="type">MERN</div>
                  <div className="type">Java</div>
                  <div className="type">c++</div>
                </div>
              </div>
              <div className="scroll"></div>
            </div>
            <div className="amount">
              Referral Amount
              <div className="amount1">
                <CurrencyRupeeIcon /> 485
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="terms">Tems & Condition</div>
    </div>
  );
};
