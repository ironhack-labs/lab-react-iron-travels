import logo from "./assets/logo.png";
import "./App.css";
import travelPlansData from "./assets/travel-plans.json";
import TravelList from "./components/TravelList";
import { useState } from "react";

function App() {
  const [travelList , setTravelList] = useState(travelPlansData);
  

  const handleDelete = (id) => {
    const filteredList = travelList.filter(item => item.id !== id);
    setTravelList(filteredList);
  }
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList list={travelList} onDelete={handleDelete} />
    </>
  );
}

export default App;
