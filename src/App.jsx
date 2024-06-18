import logo from "./assets/logo.png";
import travelPlansData from "./assets/travel-plans.json";
import { useState } from "react";
import "./App.css";
import TravelList from "./components/TravelList";
import Favorites from "./components/Favorites";

function App() {
  const [travels, setTravels] = useState(travelPlansData);
  const [isDescending, setIsDescending] = useState(true);

  function handleRemove(id) {
    console.log(id);
    const filteredArray = travels.filter((travel) => travel.id !== id);
    setTravels(filteredArray);
  }

  function handleAscending() {
    const copy = [...travels];
    copy.sort((a, b) => a.totalCost - b.totalCost);
    setTravels(copy);
    setIsDescending(false);
  }

  function handleDescending() {
    const copy = [...travels];
    copy.sort((a, b) => b.totalCost - a.totalCost);
    setTravels(copy);
    setIsDescending(true);
  }

  function handleReset() {
    setTravels(travelPlansData);
  }

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <button onClick={isDescending ? handleAscending : handleDescending}>
        Sort by {isDescending ? "Descending" : "Ascending"} order
      </button>
      <button onClick={handleReset}>Reset</button>
      <div className="components">
        <TravelList travels={travels} handleRemove={handleRemove} />
        <Favorites travels={travels} />
        <h3 className="text-favorites">Hello</h3>
      </div>
    </>
  );
}

export default App;
