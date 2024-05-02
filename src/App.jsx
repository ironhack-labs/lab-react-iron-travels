import React, { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

import travelPlans from "./assets/travel-plans.json";

import TravelList from "./components/TravelList";

function App() {
  const [travelList, setTravelList] = useState(travelPlans);
  const handleDelete = (id) => {
    const updatedList = travelList.filter((plan) => plan.id !== id);

    setTravelList(updatedList);
  };
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList planList={travelList} onDelete={handleDelete} />
    </>
  );
}

export default App;
