import React from "react";
import { Bottombody } from "../Bottombody/Bottombody";
import { Middlebody } from "../Middlebody/Middlebody";
import { Topbody } from "../Topbody/Topbody";
import "./Body.css";
export const Body = () => {
  return (
    <div className="body">
      <Topbody />
      <Middlebody />
      <Bottombody />
    </div>
  );
};
