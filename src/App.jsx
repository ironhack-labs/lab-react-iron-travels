import logo from "./assets/logo.png";
import Travellist from "./components/Travellist";
import Data from "./assets/travel-plans.json";
import "./App.css";
import TravelPlanCard from "./components/TravelPlanCard";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <Travellist data={Data}/>
      <TravelPlanCard plan={Data}/>
    </div>
  );
}

export default App;
