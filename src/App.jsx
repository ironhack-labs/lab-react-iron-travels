import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
import TravelPlanCard from "./components/TravelPlanCard";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <div id="pantalla">
      <TravelList />
      <TravelPlanCard  /* plan={plan} */  />
      </div>
    </>
  );
}

export default App;
