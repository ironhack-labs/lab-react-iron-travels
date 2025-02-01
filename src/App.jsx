import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="text-center">
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList />
    </>
  );
}

export default App;
