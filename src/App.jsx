import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron" style={{ color: '#0d47a1' }}>Iron Travels</h1>


      <h3 className="text-iron" style={{ color: '#0d47a1' }}>Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList />
    </>
  );
}

export default App;
