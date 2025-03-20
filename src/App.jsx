import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/travel-list";  // Importamos el componente

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* Renderizamos el componente TravelList */}
      <TravelList />
    </>
  );
}

export default App;
