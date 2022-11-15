import React from "react";
import "./App.css";
import { Body } from "./components/Body/Body";
import { Topbar } from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Body />
    </div>
  );
}

export default App;
