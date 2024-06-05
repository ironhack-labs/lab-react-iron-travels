import logo from "./assets/logo.png";
import "./App.css";
import travelPlansData from "./assets/travel-plans.json";
// import travelList from "./components/travelList";
import { useState } from "react";

function App() {
  const [travels, setTravels] = useState(travelPlansData);

  function handleDeleteTravels(travelId) {
    const filteredTravels = travels.filter((travel) => travel.id !== travelId);
    setTravels(filteredTravels);
  }
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>

      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}

      {travels.map((travel) => (
        <article key={travel.id}>
          <h3>
            {travel.destination} ({travel.days}){" "}
          </h3>

          <img src={travel.image} />
          <p> {travel.description} </p>
          <p>Price: {travel.totalCost}€</p>
          {travel.totalCost <= 350 ? <p>Great Deal</p> : <p></p>}
          {travel.totalCost >= 1500 ? <p>Premium</p> : <p></p>}
          {travel.allInclusive ? <p>All-Inclusive</p> : <p></p>}
          <button onClick={() => handleDeleteTravels(travel.id)}>Delete</button>
        </article>
      ))}
    </>
  );
}

export default App;
