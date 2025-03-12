import logo from "./assets/logo.png";
import "./App.css";
import { TravelList } from "./components/TravelList";
import { TravelFavorite } from "./components/TravelFavorite";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <div className="main-container">
        <div className="all-travel-container">
      <TravelList />
      </div>
        <div className="favorite-container">
            <h2>Favorite</h2>
        <TravelFavorite />
        </div>
        
        </div>
    </>
  );
}

export default App;
