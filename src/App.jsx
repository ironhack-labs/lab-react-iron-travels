import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import "./index.css"
import TravelList from "../src/components/travelList.jsx";
function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
       
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
      
      {<TravelList />}
    </>
  );
}

export default App;
