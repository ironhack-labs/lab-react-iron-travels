import logo from "./assets/logo.png";
import "./App.css";
import React from 'react';
import TravelList from './components/TravelList'; 
import "./index.css";

function App() {
  const travelPlans = [
    { destination: "Paris", totalCost: 300, allInclusive: true },
    { destination: "Tokyo", totalCost: 2000, allInclusive: false },
    { destination: "New York", totalCost: 1200, allInclusive: false }
  ];

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList travelPlans={travelPlans} />
    </>
  );
}

export default App;
