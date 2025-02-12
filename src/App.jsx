import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
import FavoriteList from "./components/FavoriteList";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", padding: "20px" }}>

        <div>
          <TravelList />
        </div>
      </div>
    </>
  )
}

export default App;
