import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
import travelPlansData from "./assets/travel-plans.json";
import { useState } from "react";

function App() {
  const [travelList, setTravelList] = useState(travelPlansData);
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <TravelList state={travelList} setState={setTravelList} />
    </>
  );
}

export default App;
