import logo from "./assets/logo.png";
import Travellist from "./components/Travellist";
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
      <Travellist/>
      
    </>
  );
}

export default App;
