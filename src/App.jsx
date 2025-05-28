import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";

function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img src={logo} className="logo" alt="App logo" />
        <h1 className="text-iron">Iron Travels</h1>
        <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
      </div>

      <TravelList />
    </>
  );
}

export default App;
