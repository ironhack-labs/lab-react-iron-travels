import React from "react";
import logo from "./assets/logo.png";
import "./App.css";

// Define the List component
function List() {
  const items = [
    "Custom itineraries for every destination",
    "Exclusive discounts for Ironhackers",
    "24/7 customer support",
    "Hassle-free booking process",
    "Travel tips and resources tailored for coders",
  ];

  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* Render the List component here */}
      <List />
    </>
  );
}

export default App;
