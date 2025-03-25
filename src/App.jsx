import logo from "./assets/logo.png";
import "./App.css";
import { useState } from "react";
import travelPlansData from "./assets/travel-plans.json";
import TravelList from "./components/TravelList";

function App() {
  const [plans, setPlans] = useState(travelPlansData);
  const handleDelete = (id) =>{
    setPlans((prevPlans) => prevPlans.filter((plan)=>plan.id !== id))
  };

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList plans ={plans} onDelete={handleDelete}/>
      
    </>
  );
}

export default App;
