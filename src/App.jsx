import logo from "./assets/logo.png";
import { useState } from "react";
import "./App.css";
import TravelList from "./components/TravelList";
import travelPlansData from "./assets/travel-plans.json";

function App() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (idTodelete) => {
    const updatedPlans = travelPlans.filter(eachPlan => eachPlan.id !== idTodelete)
    setTravelPlans(updatedPlans)
  }

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList travelPlans={travelPlans} onDelete={handleDelete}/>
    </>
  );
}

export default App;
