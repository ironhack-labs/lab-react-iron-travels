import logo from "./assets/logo.png";
import "./App.css";
import travelDataPlan from './assets/travel-plans.json'
import TravelList from "./components/TravelList";
import { useState } from "react";

function App() {
  const [travelsList, setTravelsList] =  useState(travelDataPlan);

  const deleteTravelListElement = (id) => {
    setTravelsList(travelsList.filter(elem => elem.id !== id))
  }

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <div className="TravelListContainer">
        <TravelList travels={travelsList} deleteCallback={deleteTravelListElement}/>
      </div>
      
    </>
  );
}

export default App;
