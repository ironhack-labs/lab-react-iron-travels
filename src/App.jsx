// Import necessary dependencies and components from React and the project files
import React, { useState } from "react";
import logo from "./assets/logo.png"; // Import the logo image
import "./App.css"; // Import the styles for the App component
import TravelList from "../src/Components/TravelList.jsx"; // Import the TravelList component
import TravelPlans from "./assets/TravelPlans.json"; // Import the TravelPlans JSON data

// Define the main App component
function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
      <TravelList />
      {/* RENDER YOUR LIST COMPONENT HERE */}
    </>
  );
}

// Export the App component as the default export
export default App;
