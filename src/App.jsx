import logo from "./assets/logo.png";
import "./App.css";
import travelPlansData from "./assets/travel-plans.json";
import { TravelList } from "./components/TravelList";
import { useState } from "react";

function App() {
  const [travelListState, setTravelListState] = useState(travelPlansData)
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <TravelList className="travelList" travelList = {travelListState} 
                  setTravelListState = {setTravelListState}/>
      
    </>
  );
}

export default App;
