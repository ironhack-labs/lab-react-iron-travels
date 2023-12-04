import logo from "./assets/logo.png";
import "./App.css";
import travelPlansData from './data/travel-plans.json'
import TravelList from "./components/TravelList";

function App() {
  return (
    <div className="app">
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <TravelList />

      {/* RENDER YOUR LIST COMPONENT HERE */}
      
    </div>
  );
}

export default App;
