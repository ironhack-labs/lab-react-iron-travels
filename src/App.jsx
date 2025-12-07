
import TravelList from "./components/travel-list";
import TravelPlanCard from "./components/travel-plan-card";
import logo from "./assets/logo.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  function addItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <>
      <div>
        <img src={logo} className="logo mb-5" alt="App logo" />
      </div>
      <h1 className="text-iron mb-5">Iron Travels</h1>
      <h3 className="text-iron mb-5">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <div className="d-flex">
        <div>
          <TravelList onAddItem={addItem}></TravelList>
        </div>
        <div className="ms-3">
          <h3 style={{color: '#0a035a', width: '450px'}}>Favorites</h3>
          <TravelPlanCard plan={items}></TravelPlanCard>
        </div>
      </div>
    </>
  );
}

export default App;
