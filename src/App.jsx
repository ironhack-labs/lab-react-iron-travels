import { useState } from "react";

import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
import travelsPlansData from "./assets/travel-plans.json";

function App() {
  const [trips, setTrips] = useState(travelsPlansData);

  function handleDelete(tripId) {
    const filteredTrips = trips.filter((trip) => trip.id !== tripId);
    console.log("delete button pressed.", tripId);
    setTrips(filteredTrips);
  }
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList trips={trips} handleDelete={handleDelete} />
    </>
  );
}

export default App;
