import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
import Favourites from "./components/Favourites";
import travelPlansData from "./assets/travel-plans.json";
import { useState } from "react";
function App() {
  const [favouriteList, setFavouriteList] = useState([]);
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <div className="displayHotels">
        <TravelList
          travelPlansData={travelPlansData}
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
        />
        <Favourites favouriteList={favouriteList} />
      </div>
    </>
  );
}

export default App;
