import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="app">
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <TravelList/>
      
    </>
  );
}

export default App;
