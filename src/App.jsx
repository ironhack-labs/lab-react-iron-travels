import logo from "./assets/logo.png";
import "./App.css";
import travelPlansData from "./assets/travel-plans.json";
import { useState } from "react";
import TravelList from "./components/TravelList";

function App() {
  const [list, setList] = useState(travelPlansData);
  const [fav, setFav] = useState([]);
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList list={list} setList={setList} fav={fav} setFav={setFav} />
    </>
  );
}

export default App;
