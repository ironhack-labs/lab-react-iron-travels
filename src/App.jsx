import logo from "./assets/logo.png";

import TravelList from "./components/TravelList/TravelList";
import FavoriteList from "./components/FavoriteList/FavoriteList";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <div className="Components">
        <TravelList />
        <FavoriteList />
      </div>
    </>
  );
}

export default App;
