import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";
import { TravelList } from "./components/TravelList";
import { FavList } from "./components/FavList";

function App() {
  const [favs, setFavs] = useState([]);
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <div className="twoCols">
        <TravelList favs={favs} setFavs={setFavs} />
        <FavList favs={favs} />
      </div>
    </>
  );
}

export default App;
