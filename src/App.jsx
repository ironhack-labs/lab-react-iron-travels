import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/travel-list";

function App() {
  return (
    <div className="container">
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList className="p-4"/>
    </div>
  );
}

export default App;
