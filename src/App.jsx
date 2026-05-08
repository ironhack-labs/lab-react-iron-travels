import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList.jsx";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="App logo" style={{ width: "100px" }} />
      <h1 className="text-3xl font-bold underline">Iron Travels</h1>
      <h3>Tailored Travel Plans for Ironhackers</h3>

      {/* Renderizar a lista aqui */}
      <TravelList />
    </div>
  );
}

export default App;