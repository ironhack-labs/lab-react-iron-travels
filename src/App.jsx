import logo from "./assets/logo.png";
import "./App.css";
import TravelList2 from "./components/TravelList2";
import Favorites from "./components/Favorites";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
      <TravelList2 />

      {/* RENDER YOUR LIST COMPONENT HERE */}
    </>
  );
}

export default App;
